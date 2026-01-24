import { Link } from '@tanstack/react-router';
import { Baby,
  BookOpen,
  Car,
  Download,
  Dumbbell,
  Home,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  X } from 'lucide-react';
import type { CategoryIconName } from '@/types';
import { useCategories } from '@/hooks/use-categories';
import { cn } from '@/lib/utils';

const iconMap: Record<CategoryIconName, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  BookOpen,
  Dumbbell,
  ShoppingBasket,
  Baby,
  Car,
  Download,
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const { data: categories, isLoading } = useCategories();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed left-0 top-0 z-50 h-full w-80 overflow-y-auto bg-[hsl(var(--card))] shadow-xl animate-slide-up lg:w-[600px]">
        <div className="sticky top-0 flex items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4">
          <h2 className="text-lg font-semibold">All Categories</h2>
          <button
            onClick={onClose}
            className="rounded-md p-2 hover:bg-[hsl(var(--muted))]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isLoading ? (
          <div className="p-4">
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-12 animate-pulse rounded bg-[hsl(var(--muted))]" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-2 p-4 lg:grid-cols-2">
            {categories?.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div key={category.id} className="rounded-lg border border-[hsl(var(--border))] p-4">
                  <Link
                    to={`/category/${category.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--muted))]">
                      <Icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                    </div>
                    <span>{category.name}</span>
                  </Link>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 4).map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/category/${category.slug}/${sub.slug}`}
                        onClick={onClose}
                        className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:underline"
                      >
                        {sub.name}
                      </Link>
                    ))}
                    {category.subcategories.length > 4 && (
                      <Link
                        to={`/category/${category.slug}`}
                        onClick={onClose}
                        className="text-xs font-medium text-[hsl(var(--primary))] hover:underline"
                      >
                        +{category.subcategories.length - 4} more
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
