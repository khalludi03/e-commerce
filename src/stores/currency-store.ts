// Currency Store

import { useCallback, useSyncExternalStore } from 'react';
import type { CurrencyCode } from '@/types';
import type {CurrencyConfig} from '@/lib/currency';
import { CURRENCIES,  formatCurrencyPrice } from '@/lib/currency';

const STORAGE_KEY = 'zynex-currency';

interface CurrencyState {
  currency: CurrencyCode;
}

interface CurrencyStore {
  getState: () => CurrencyState;
  setCurrency: (currency: CurrencyCode) => void;
  getCurrencyConfig: () => CurrencyConfig;
  formatPrice: (priceInBDT: number) => string;
  subscribe: (callback: () => void) => () => void;
}

function createCurrencyStore(): CurrencyStore {
  let state: CurrencyState = {
    currency: 'BDT',
  };
  const listeners = new Set<() => void>();

  // Load from localStorage
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && stored in CURRENCIES) {
        state = { currency: stored as CurrencyCode };
      }
    } catch (e) {
      console.error('Failed to load currency from localStorage:', e);
    }
  }

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  const persist = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, state.currency);
    }
  };

  return {
    getState: () => state,

    setCurrency: (currency: CurrencyCode) => {
      state = { currency };
      persist();
      notify();
    },

    getCurrencyConfig: () => {
      return CURRENCIES[state.currency];
    },

    formatPrice: (priceInBDT: number) => {
      return formatCurrencyPrice(priceInBDT, state.currency);
    },

    subscribe: (callback: () => void) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
  };
}

// Singleton instance
export const currencyStore = createCurrencyStore();

// React hook
export function useCurrency() {
  const subscribe = useCallback((callback: () => void) => {
    return currencyStore.subscribe(callback);
  }, []);

  const getSnapshot = useCallback(() => {
    return currencyStore.getState();
  }, []);

  const getServerSnapshot = useCallback(() => {
    return { currency: 'BDT' as CurrencyCode };
  }, []);

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    currency: state.currency,
    currencyConfig: CURRENCIES[state.currency],
    setCurrency: currencyStore.setCurrency,
    formatPrice: currencyStore.formatPrice,
    availableCurrencies: Object.values(CURRENCIES),
  };
}
