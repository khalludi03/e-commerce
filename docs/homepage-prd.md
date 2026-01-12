# Product Requirements Document (PRD)

## Zynex.com — Multi-Vendor E-Commerce Homepage

## 1. Executive Summary

Zynex.com is a **frontend-only prototype** for a multi-vendor e-commerce platform targeting South Asian users. This PRD covers the complete frontend implementation using modern React technologies with mock data simulation—no backend required. The prototype demonstrates the full user experience including local payment UI flows and culturally relevant product curation.

**Scope:** Frontend application only. All data is generated client-side using faker.js with persistent mock data stores.

---

## 2. Product Vision & Goals

**Vision:** Deliver a polished, production-ready frontend prototype that demonstrates the complete shopping experience for South Asian consumers.

**Primary Goals (Frontend Prototype):**
- Build a fully functional UI with all interactive components
- Implement realistic mock data simulation using faker.js
- Support dark/light theme switching with seamless transitions
- Demonstrate COD, bKash, Nagad, and card payment UI flows (mock)
- Achieve Lighthouse performance score > 90

---

## 3. Target Audience

South Asian users, mainly in English-speaking Bangladesh.

---

## 4. Homepage Functional Requirements

### 4.1 Header Section

#### 4.1.1 Top Navigation Bar

| Element | Description | Priority |
|---------|-------------|----------|
| Logo | Zynex.com logo, clickable to homepage | P0 |
| Search Bar | Full-text search with autocomplete | P0 |
| Currency Selector | BDT (৳), INR (₹), PKR (Rs), USD ($) | P0 |
| User Account | Sign In / Register dropdown with profile access | P0 |
| Cart Icon | Shows item count badge, opens cart drawer on click | P0 |
| Wishlist Icon | Shows saved items count, navigates to wishlist page | P1 |
| Download App CTA | Links to Play Store / App Store | P1 |

#### 4.1.2 Main Navigation Menu

| Menu Item | Description |
|-----------|-------------|
| All Categories | Mega menu with all product categories |
| Flash Deals | Time-limited discounts |
| New Arrivals | Products added in last 7 days |
| Top Vendors | Featured/verified sellers |
| Zynex Choice | Curated quality products |

---

### 4.2 Hero Section — Promotional Carousel

#### 4.2.1 Carousel Specifications

| Attribute | Specification |
|-----------|---------------|
| Type | Auto-rotating banner carousel |
| Dimensions | Full-width, 400px height (desktop), 200px (mobile) |
| Slides | 5-8 promotional banners |
| Auto-rotation | 5 seconds per slide |
| Navigation | Left/right arrows + pagination dots |
| Content | Deal images, discount percentages, CTA buttons |

#### 4.2.2 Carousel Content Types

| Content Type | Example | CTA |
|--------------|---------|-----|
| Seasonal Sale | "New Year Sale — Up to 70% Off" | "Shop Now" |
| Category Promotion | "Electronics Week" | "Explore" |
| Vendor Spotlight | "Featured: XYZ Electronics" | "Visit Store" |
| Flash Deal | "24-Hour Deal — ৳99 Items" | "Grab Now" |

#### 4.2.3 Carousel Data Model

| Field | Type | Description |
|-------|------|-------------|
| slide_id | string | Unique identifier |
| title | string | Main headline |
| subtitle | string | Supporting text |
| image_url | string | Desktop banner image |
| mobile_image_url | string | Mobile-optimized image |
| cta_text | string | Button label |
| cta_link | string | Navigation target |
| background_color | string | Fallback color |
| start_date | ISO8601 | Campaign start |
| end_date | ISO8601 | Campaign end |
| priority | integer | Display order |
| target_audience | array | Region codes (BD, IN, PK) |

---

### 4.3 Today's Deals Section

#### 4.3.1 Section Layout

| Element | Description |
|---------|-------------|
| Section Title | "Today's Deals" with countdown timer |
| Layout | Horizontal scrollable grid |
| Cards per row | 5 (desktop), 2 (mobile) |
| Subsections | "Dollar Express" (৳99 items), "SuperDeals" (time-limited) |

#### 4.3.2 Deal Card Components

| Component | Description |
|-----------|-------------|
| Product Image | 1:1 aspect ratio, 200x200px |
| Deal Badge | "X% OFF" or "Hot Deal" label |
| Product Title | Max 2 lines, truncated with ellipsis |
| Current Price | Bold, primary color (e.g., ৳299) |
| Original Price | Strikethrough (e.g., ~~৳599~~) |
| Discount Percentage | "-50%" badge |
| Timer | Countdown for time-limited deals |
| Add to Cart | Icon button |
| Quick View | On hover, "View" button appears |

#### 4.3.3 Deal Types

| Deal Type | Duration | Discount Range | Display Logic |
|-----------|----------|----------------|---------------|
| Flash Deal | 1-6 hours | 40-90% | Countdown timer visible |
| Daily Deal | 24 hours | 20-50% | Refreshes at midnight local time |
| Clearance | Until sold out | 50-80% | "Limited Stock" badge |
| Bundle Deal | Ongoing | 15-30% | "Buy X Get Y" messaging |

---

### 4.4 Product Categories Section

#### 4.4.1 Category Display Options

**Option A: Icon Grid (Primary)**

| Attribute | Specification |
|-----------|---------------|
| Layout | 8 categories per row (desktop), 4 (mobile) |
| Icon Size | 80x80px |
| Label | Category name below icon |
| Interaction | Click navigates to category page |

**Option B: Featured Categories with Images**

| Attribute | Specification |
|-----------|---------------|
| Layout | 4 large cards per row |
| Image | Category banner 300x200px |
| Overlay | Category name + product count |

#### 4.4.2 Category List (Initial)

| Category | Subcategories (Sample) |
|----------|------------------------|
| Electronics | Mobile Phones, Laptops, Audio, Cameras |
| Fashion | Men's, Women's, Kids, Traditional Wear |
| Home & Living | Furniture, Kitchen, Bedding, Decor |
| Beauty & Health | Skincare, Makeup, Supplements, Personal Care |
| Books & Stationery | Bengali Books, English Books, Islamic, Office |
| Sports & Outdoors | Fitness, Cricket, Football, Camping |
| Grocery | Staples, Snacks, Beverages, Halal Products |
| Baby & Kids | Toys, Clothing, Feeding, School Supplies |
| Automotive | Car Accessories, Motorcycle Parts, Tools |
| Digital Products | Gift Cards, Software, Online Courses |

---

### 4.5 Product Listing Section

#### 4.5.1 Product Grid Specifications

| Attribute | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Products per row | 5 | 3 | 2 |
| Card width | 220px | 200px | 48% viewport |
| Initial load | 20 products | 15 products | 10 products |
| Infinite scroll | Yes | Yes | Yes |

#### 4.5.2 Product Card Component

**Visual Elements:**

| Element | Position | Specification |
|---------|----------|---------------|
| Product Image | Top | 1:1 ratio, lazy-loaded, placeholder on load |
| Discount Badge | Top-left overlay | Red badge "-X%" |
| Favorite Button | Top-right overlay | Heart icon, toggles filled/outline |
| Vendor Badge | Below image | "Zynex Choice" or vendor name |
| Product Title | Below badge | Max 2 lines, 14px font |
| Rating | Below title | Star icons (1-5) + review count |
| Price Block | Below rating | Current price (bold) + original price (strikethrough) |
| Shipping Info | Below price | "Free Shipping" or estimated cost |
| Action Buttons | Bottom | "Buy Now" + "Add to Cart" |

**Interactive States:**

| State | Behavior |
|-------|----------|
| Default | Static display |
| Hover | Slight elevation shadow, action buttons appear |
| Image Click | Opens product detail modal |
| Favorite Click | Toggles heart, adds/removes from wishlist |
| Add to Cart | Button changes to "Added ✓" for 2 seconds, updates cart count |
| Buy Now | Navigates to checkout with item |

#### 4.5.3 Product Card Data Model

| Field | Type | Description |
|-------|------|-------------|
| product_id | string | Unique identifier |
| title | string | Product name |
| slug | string | URL-friendly identifier |
| images | array | Objects with url, alt, is_primary |
| vendor.id | string | Vendor identifier |
| vendor.name | string | Vendor display name |
| vendor.is_verified | boolean | Verification status |
| pricing.current_price | number | Sale price |
| pricing.original_price | number | Original price |
| pricing.currency | string | Currency code |
| pricing.discount_percentage | number | Discount amount |
| rating.average | number | Star rating (1-5) |
| rating.count | integer | Number of reviews |
| shipping.free_shipping | boolean | Free shipping flag |
| shipping.estimated_days | integer | Delivery estimate |
| shipping.cost | number | Shipping cost |
| stock_status | enum | in_stock, low_stock, out_of_stock |
| badges | array | choice, top_seller, new |
| category_id | string | Category reference |
| created_at | ISO8601 | Creation timestamp |

#### 4.5.4 Filter Panel

**Filter Categories:**

| Filter | Type | Options |
|--------|------|---------|
| Category | Multi-select tree | All categories with subcategories |
| Price Range | Range slider + inputs | Min-Max with presets (Under ৳500, ৳500-2000, etc.) |
| Vendor | Multi-select | Verified vendors, all vendors |
| Rating | Single-select | 4★ & above, 3★ & above, etc. |
| Shipping | Checkbox | Free shipping only |
| Discount | Checkbox | On sale only |
| Availability | Checkbox | In stock only |
| Location | Multi-select | Dhaka, Chittagong, etc. |

**Filter UI Behavior:**

| Behavior | Description |
|----------|-------------|
| Desktop | Sticky sidebar, 250px width |
| Mobile | Bottom sheet modal, triggered by "Filter" button |
| Apply | Products update on each filter change (debounced 300ms) |
| Clear | "Clear All" button resets all filters |
| Count | Show active filter count badge |

#### 4.5.5 Sorting Options

| Sort Option | Parameter |
|-------------|-----------|
| Relevance (default) | sort=relevance |
| Price: Low to High | sort=price_asc |
| Price: High to Low | sort=price_desc |
| Newest First | sort=created_desc |
| Best Selling | sort=sales_desc |
| Top Rated | sort=rating_desc |
| Discount: High to Low | sort=discount_desc |

---

### 4.6 Product Detail Modal

#### 4.6.1 Modal Trigger

| Trigger | Action |
|---------|--------|
| Click on product image | Opens modal |
| Click on product title | Navigates to full product page |
| "Quick View" button | Opens modal |

#### 4.6.2 Modal Layout

**Left Section (50% width):**

| Component | Description |
|-----------|-------------|
| Main Image | Large view of selected image (500x500px) |
| Image Gallery | Horizontal thumbnail strip (5 images max) |
| Zoom | Hover to zoom on desktop, pinch on mobile |
| Navigation | Left/right arrows for gallery |

**Right Section (50% width):**

| Component | Description |
|-----------|-------------|
| Product Title | Full title, H2 heading |
| Vendor Link | "Sold by: [Vendor Name]" with link |
| Rating Summary | Stars + "X reviews" link |
| Price Block | Current price, original price, discount badge |
| Variant Selector | Color/Size dropdowns if applicable |
| Quantity Selector | +/- buttons with input field |
| Stock Status | "In Stock", "Only X left", or "Out of Stock" |
| Action Buttons | "Add to Cart" (primary), "Buy Now" (secondary), "Favorite" (icon) |
| Shipping Info | Estimated delivery, shipping cost |
| Key Features | Bullet list (3-5 points) |
| "View Full Details" | Link to complete product page |

#### 4.6.3 Modal Data Model Extension

| Field | Type | Description |
|-------|------|-------------|
| description_short | string | Max 200 characters |
| key_features | array | List of feature strings |
| variants[].id | string | Variant identifier |
| variants[].type | enum | color, size, material |
| variants[].value | string | Display value |
| variants[].price_modifier | number | Price adjustment |
| variants[].stock | integer | Available quantity |
| variants[].image_url | string | Variant-specific image |
| shipping_options[].method | string | Shipping method name |
| shipping_options[].cost | number | Shipping cost |
| shipping_options[].estimated_days | integer | Delivery estimate |
| return_policy | string | Return policy text |
| warranty | string | Warranty information |

#### 4.6.4 Modal Behavior

| Behavior | Specification |
|----------|---------------|
| Open Animation | Fade in + slide up (300ms) |
| Close Triggers | X button, click outside, ESC key |
| Mobile | Full-screen drawer from bottom |
| Loading | Skeleton loader while fetching |
| Image Preload | Preload first 3 gallery images |
| Scroll Lock | Body scroll disabled when modal open |

---

### 4.7 Footer Section

#### 4.7.1 Footer Layout Structure

**Row 1: Newsletter Signup**

| Element | Description |
|---------|-------------|
| Heading | "Subscribe to Zynex for exclusive offers!" |
| Email Input | Placeholder: "Enter your email" |
| Subscribe Button | "Subscribe" CTA |
| Privacy Note | "We respect your privacy" link |

**Row 2: Trust Badges**

| Badge | Description |
|-------|-------------|
| Cash on Delivery | "Pay at your doorstep" |
| Nationwide Delivery | "Delivery all over Bangladesh" |
| Easy Returns | "7-day return policy" |
| Secure Payments | "SSL encrypted transactions" |

**Row 3: Multi-Column Links**

| Column | Links |
|--------|-------|
| About Us | About Zynex, Careers, Press, Blog |
| Shop By | All Categories, New Arrivals, Best Sellers, Deals |
| Customer Service | Contact Us, FAQ, Track Order, Return Policy, Shipping Info |
| Sell on Zynex | Become a Seller, Seller Login, Seller Guidelines, Seller Support |
| Legal | Terms & Conditions, Privacy Policy, Cookie Policy, DMCA |

**Row 4: Contact & Social**

| Element | Content |
|---------|---------|
| Customer Hotline | 16XXX (9 AM - 8 PM, Sat-Thu) |
| Email | support@Zynex.com |
| Seller Email | seller@Zynex.com |
| Address | [Office Address], Dhaka-1000 |
| Social Icons | Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp |
| App Download | Google Play + App Store badges |

**Row 5: Bottom Bar**

| Element | Content |
|---------|---------|
| Copyright | "© 2026 Zynex.com. All rights reserved." |
| Payment Icons | bKash, Nagad, Visa, Mastercard, AMEX, COD |

---

## 5. Non-Functional Requirements

### 5.1 Performance

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Mock Service Response Time | < 500ms (simulated) |

### 5.2 Accessibility

| Requirement | Standard |
|-------------|----------|
| WCAG Compliance | Level AA |
| Keyboard Navigation | Full support |
| Screen Reader | ARIA labels on all interactive elements |
| Color Contrast | Minimum 4.5:1 ratio |

### 5.3 Browser Support

| Browser | Versions |
|---------|----------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Samsung Internet | Last 2 versions |

### 5.4 Device Support

| Device Type | Breakpoints |
|-------------|-------------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1439px |
| Large Desktop | 1440px+ |

---

## 6. Technical Architecture (Frontend Only)

### 6.1 Frontend Stack

Use the latest stable versions of all libraries.

| Layer | Technology |
|-------|------------|
| Meta-Framework | TanStack Start |
| UI Library | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data Fetching | TanStack Query |
| Routing | TanStack Router |
| Component Library | Radix UI Primitives |
| Icons | Lucide React |
| Mock Data | Faker.js |
| Form Handling | Tanstack Hook Form + Zod |
| Animation | Framer Motion |

### 6.2 Project Structure

| Directory | Purpose |
|-----------|---------|
| src/app/routes/ | Page components (index, products, cart, checkout) |
| src/components/ui/ | Design system primitives (button, card, modal, etc.) |
| src/components/layout/ | Header, footer, nav-menu |
| src/components/product/ | Product-card, product-grid, product-modal, product-filters |
| src/components/carousel/ | Hero carousel components |
| src/components/deals/ | Deal cards and sections |
| src/mock/db.ts | In-memory mock database |
| src/mock/factories/ | Faker.js factories (product, vendor, category, user) |
| src/mock/seeds/ | Seed data generators |
| src/mock/services/ | Mock API services (product, cart, search) |
| src/hooks/ | Custom React hooks |
| src/lib/ | Utilities |
| src/types/ | TypeScript definitions |
| src/styles/ | globals.css (Tailwind base + CSS variables), themes.css |

---

## 7. Mock Data Management

### 7.1 Overview

All data is generated and managed client-side using **faker.js**. The mock data layer simulates a real backend with consistent, reproducible data using seeded random generation.

### 7.2 Core Principles

| Principle | Implementation |
|-----------|----------------|
| Single Source of Truth | All mock data lives in src/mock/db.ts |
| Seeded Generation | Use faker.seed(12345) for reproducible data |
| Realistic Data | South Asian names, BDT prices, local addresses |
| Lazy Loading | Generate data on-demand, cache in memory |
| Persistence | Use localStorage to persist cart/wishlist across sessions |

### 7.3 Product Factory Specification

The Product Factory generates realistic product data with the following fields:

| Field | Faker Method | Notes |
|-------|--------------|-------|
| id | faker.string.uuid() | Unique identifier |
| title | faker.commerce.productName() | Product name |
| slug | faker.helpers.slugify() | URL-friendly slug |
| description | faker.commerce.productDescription() | Product description |
| images | faker.image.urlPicsumPhotos() | 3-6 images per product |
| category | faker.helpers.arrayElement(CATEGORIES) | Random category |
| stock | faker.number.int(0-500) | Stock quantity |
| badges | faker.helpers.arrayElements() | 0-2 badges from: choice, top_seller, new, verified |
| createdAt | faker.date.recent(30) | Within last 30 days |

**Pricing Sub-factory:**

| Field | Generation Logic |
|-------|------------------|
| originalPrice | Random integer ৳200-50,000 |
| discountPercent | Random from: 0, 10, 15, 20, 25, 30, 40, 50, 60, 70 |
| currentPrice | originalPrice × (1 - discountPercent/100) |
| currency | "BDT" |
| currencySymbol | "৳" |

**Rating Sub-factory:**

| Field | Range |
|-------|-------|
| average | 2.5-5.0 (1 decimal) |
| count | 5-2000 reviews |

### 7.4 Vendor Factory Specification

| Field | Generation Logic |
|-------|------------------|
| id | faker.string.uuid() |
| name | faker.company.name() |
| slug | faker.helpers.slugify(name) |
| isVerified | 70% probability true |
| rating | 3.5-5.0 |
| productCount | 10-500 |
| location | Random from: Dhaka, Chittagong, Sylhet, Rajshahi, Khulna |

### 7.5 Category Seed Data

| ID | Name | Icon |
|----|------|------|
| electronics | Electronics | Smartphone |
| fashion | Fashion | Shirt |
| home | Home & Living | Home |
| beauty | Beauty & Health | Sparkles |
| books | Books & Stationery | BookOpen |
| sports | Sports & Outdoors | Dumbbell |
| grocery | Grocery | ShoppingBasket |
| baby | Baby & Kids | Baby |
| automotive | Automotive | Car |
| digital | Digital Products | Download |

### 7.6 Mock Database Class

The MockDatabase class provides these methods:

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| init() | none | Promise | Initialize with 500 products |
| getProducts() | filters?: ProductFilters | Product[] | Filtered, sorted, paginated products |
| getProductById() | id: string | Product or undefined | Single product lookup |
| getCategories() | none | Category[] | All categories |
| getTodayDeals() | none | Product[] | Products with 30%+ discount (max 12) |

**Filter Support:**

| Filter | Type | Description |
|--------|------|-------------|
| category | string | Filter by category ID |
| minPrice | number | Minimum price |
| maxPrice | number | Maximum price |
| minRating | number | Minimum rating |
| search | string | Text search in title/description |
| sort | string | price_asc, price_desc, rating_desc, created_desc |
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |

### 7.7 Mock Service Layer

All services include simulated network delay (200-500ms) for realistic UX.

| Service | Method | Description |
|---------|--------|-------------|
| productService | getProducts(filters) | Get filtered product list |
| productService | getProductById(id) | Get single product |
| productService | getTodayDeals() | Get deal products |
| productService | searchProducts(query) | Search products (limit 10) |

### 7.8 TanStack Query Hooks

| Hook | Query Key | Description |
|------|-----------|-------------|
| useProducts(filters) | ['products', filters] | Fetch filtered products |
| useInfiniteProducts(filters) | ['products', 'infinite', filters] | Infinite scroll pagination |
| useProduct(id) | ['product', id] | Fetch single product |
| useTodayDeals() | ['deals', 'today'] | Fetch today's deals |

---

## 8. Design System & Theming

### 8.1 Theme Architecture

The design system uses **CSS custom properties (variables)** with Tailwind CSS for seamless dark/light theme switching. Theme is toggled via `.dark` class on the `<html>` element.

### 8.2 Tailwind Configuration

**Color Token Mapping:**

| Tailwind Token | CSS Variable | Description |
|----------------|--------------|-------------|
| background | --background | Page background |
| foreground | --foreground | Primary text |
| card / card-foreground | --card, --card-foreground | Card surfaces |
| popover / popover-foreground | --popover, --popover-foreground | Dropdown/modal surfaces |
| primary / primary-foreground | --primary, --primary-foreground | Primary actions |
| secondary / secondary-foreground | --secondary, --secondary-foreground | Secondary actions |
| accent / accent-foreground | --accent, --accent-foreground | Highlights, deals |
| muted / muted-foreground | --muted, --muted-foreground | Subtle backgrounds/text |
| destructive / destructive-foreground | --destructive, --destructive-foreground | Delete, errors |
| success / success-foreground | --success, --success-foreground | Success states |
| warning / warning-foreground | --warning, --warning-foreground | Warning states |
| border | --border | Border color |
| input | --input | Input borders |
| ring | --ring | Focus rings |
| brand-green | --brand-green | Brand primary |
| brand-gold | --brand-gold | Premium/highlights |
| brand-orange | --brand-orange | Prices/deals |

**Additional Tokens:**

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| radius (lg/md/sm) | --radius | Border radius scale |
| shadow-card | --shadow-card | Card shadow |
| shadow-card-hover | --shadow-card-hover | Card hover shadow |
| shadow-modal | --shadow-modal | Modal shadow |

### 8.3 CSS Variable Values

**Light Theme (Default):**

| Variable | HSL Value | Hex Equivalent |
|----------|-----------|----------------|
| --background | 0 0% 98% | #FAFAFA |
| --foreground | 0 0% 13% | #212121 |
| --card | 0 0% 100% | #FFFFFF |
| --primary | 123 38% 23% | #1B5E20 |
| --secondary | 45 100% 51% | #FFC107 |
| --accent | 14 100% 57% | #FF5722 |
| --muted | 0 0% 96% | #F5F5F5 |
| --muted-foreground | 0 0% 45% | #737373 |
| --border | 0 0% 90% | #E5E5E5 |
| --destructive | 0 72% 51% | #D32F2F |
| --success | 123 43% 39% | #388E3C |

**Dark Theme:**

| Variable | HSL Value | Hex Equivalent |
|----------|-----------|----------------|
| --background | 0 0% 9% | #171717 |
| --foreground | 0 0% 95% | #F5F5F5 |
| --card | 0 0% 12% | #1F1F1F |
| --primary | 123 38% 35% | #2E7D32 |
| --secondary | 45 100% 51% | #FFC107 |
| --accent | 14 100% 60% | #FF7043 |
| --muted | 0 0% 15% | #262626 |
| --muted-foreground | 0 0% 65% | #A3A3A3 |
| --border | 0 0% 20% | #333333 |
| --destructive | 0 62% 45% | #B71C1C |
| --success | 123 43% 35% | #2E7D32 |

### 8.4 Theme Store Specification

| Property | Type | Description |
|----------|------|-------------|
| theme | 'light' / 'dark' / 'system' | User preference |
| resolvedTheme | 'light' / 'dark' | Actual applied theme |
| setTheme(theme) | function | Update theme and apply |

**Behavior:**
- Persists to localStorage under key "Zynex-theme"
- On 'system' selection, reads prefers-color-scheme media query
- Adds/removes 'dark' class on document.documentElement
- Rehydrates theme on page load

### 8.5 Theme Toggle Component

| Element | Description |
|---------|-------------|
| Container | Rounded pill with muted background |
| Light Button | Sun icon, highlights when theme='light' |
| Dark Button | Moon icon, highlights when theme='dark' |
| System Button | Monitor icon, highlights when theme='system' |

### 8.6 Component Token Usage Guidelines

| Component Type | Background | Text | Border |
|----------------|------------|------|--------|
| Page | bg-background | text-foreground | — |
| Card | bg-card | text-card-foreground | border-border |
| Primary Button | bg-primary | text-primary-foreground | — |
| Secondary Button | bg-secondary | text-secondary-foreground | — |
| Destructive Button | bg-destructive | text-destructive-foreground | — |
| Muted Text | — | text-muted-foreground | — |
| Price (Current) | — | text-brand-orange | — |
| Price (Original) | — | text-muted-foreground + line-through | — |
| Discount Badge | bg-accent | text-accent-foreground | — |
| Success Message | bg-success | text-success-foreground | — |

---

## 9. User Flows (Frontend)

### 9.1 Add to Cart Flow

| Step | Action |
|------|--------|
| 1 | User sees product card |
| 2 | Clicks "Add to Cart" button |
| 3 | cartStore.addItem(product_id, quantity) executes |
| 4 | Button shows "Added ✓", cart icon badge updates |
| 5 | localStorage persists cart state |
| 6 | Toast notification: "Added to cart" |

### 9.2 Product Quick View Flow

| Step | Action |
|------|--------|
| 1 | User clicks product image |
| 2 | Modal opens with loading skeleton |
| 3 | useProduct(id) hook fetches from mockDb |
| 4 | Simulated delay (200-500ms) for realistic UX |
| 5 | Modal populated with product data |
| 6 | User selects variant (local state) |
| 7 | User clicks "Add to Cart" or "Buy Now" |
| 8 | Modal closes, cart updates / navigate to checkout |

### 9.3 Filter Products Flow

| Step | Action |
|------|--------|
| 1 | User clicks filter option |
| 2 | filterStore.setFilter(key, value) executes |
| 3 | URL updates via TanStack Router (shareable) |
| 4 | useProducts(filters) refetches with new params |
| 5 | Product grid shows loading skeleton |
| 6 | mockDb.getProducts(filters) returns filtered results |
| 7 | Products replaced with filtered results |

### 9.4 Theme Switch Flow

| Step | Action |
|------|--------|
| 1 | User clicks theme toggle button |
| 2 | themeStore.setTheme('dark' / 'light' / 'system') executes |
| 3 | html element class updated to 'dark' or 'light' |
| 4 | CSS variables automatically switch |
| 5 | localStorage persists preference |
| 6 | All components re-render with new theme |

---

## 10. Wireframe Reference

### 10.1 Desktop Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]  [Search Bar.........................] [Cart] [User]     │
├─────────────────────────────────────────────────────────────────┤
│ All Categories | Flash Deals | New Arrivals | Top Vendors | More │
├─────────────────────────────────────────────────────────────────┤
│                    ┌───────────────────────┐                    │
│   [<]              │   HERO CAROUSEL       │              [>]   │
│                    │   [Shop Now]          │                    │
│                    └───────────────────────┘                    │
│                         ● ○ ○ ○ ○                               │
├─────────────────────────────────────────────────────────────────┤
│ TODAY'S DEALS                              Ends in: 18:36:00    │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐     [→]        │
│ │Title│ │Title│ │Title│ │Title│ │Title│ │Title│                │
│ │৳299 │ │৳599 │ │৳199 │ │৳899 │ │৳149 │ │৳399 │                │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                │
├─────────────────────────────────────────────────────────────────┤
│ CATEGORIES                                                      │
│ [📱] [👕] [🏠] [💄] [📚] [⚽] [🛒] [👶]                         │
├──────────┬──────────────────────────────────────────────────────┤
│ FILTERS  │ Sort: [Relevance ▼]              Showing 1-20 of 500 │
│ Category │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│ Price    │ │ ♡   │ │ ♡   │ │ ♡   │ │ ♡   │ │ ♡   │             │
│ Rating   │ │Title│ │Title│ │Title│ │Title│ │Title│             │
│ Shipping │ │★★★★ │ │★★★  │ │★★★★★│ │★★★★ │ │★★★  │             │
│          │ │৳299 │ │৳599 │ │৳199 │ │৳899 │ │৳149 │             │
│          │ │[Buy][Cart]│ ... │                                  │
├──────────┴──────────────────────────────────────────────────────┤
│ FOOTER: Newsletter | Trust Badges | Links | Social | Copyright  │
└─────────────────────────────────────────────────────────────────┘
```

### 10.2 Product Card Wireframe

```
┌─────────────────────┐
│ -25%           [♡]  │  ← Discount badge + Favorite
│      [PRODUCT]      │
│      [ IMAGE ]      │  ← Click opens modal
├─────────────────────┤
│ Zynex Choice    │  ← Vendor/Trust badge
├─────────────────────┤
│ Product Title Goes  │
│ Here Max Two Lines  │  ← Product title
├─────────────────────┤
│ ★★★★☆ (128)        │  ← Rating + review count
├─────────────────────┤
│ ৳299  ~~৳399~~     │  ← Price block
├─────────────────────┤
│ Free Shipping       │  ← Shipping info
├─────────────────────┤
│ [Buy Now] [🛒 Add]  │  ← Action buttons
└─────────────────────┘
```

### 10.3 Product Modal Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│                                                            [X]  │
├────────────────────────────┬────────────────────────────────────┤
│     ┌──────────────────┐   │ Product Title Full Name            │
│     │                  │   │ Sold by: VendorName [Verified ✓]   │
│     │   MAIN IMAGE     │   │ ★★★★☆ (128 reviews)               │
│     │                  │   │ ৳299  ~~৳399~~  -25% OFF          │
│     └──────────────────┘   │ Color: [Red ▼]  Size: [M ▼]        │
│  [img1] [img2] [img3] ...  │ Quantity: [-] 1 [+]                │
│                            │ ✓ In Stock                         │
│                            │ [♡] [Add to Cart] [Buy Now]        │
│                            │ 🚚 Delivery: 3-5 days              │
│                            │ • Key Feature One                  │
│                            │ • Key Feature Two                  │
│                            │ [View Full Details →]              │
└────────────────────────────┴────────────────────────────────────┘
```

---

## 11. Implementation Subtasks

### Phase 1: Project Setup

- Initialize TanStack Start project with TypeScript
- Configure Tailwind CSS with design tokens & CSS variables
- Configure TanStack Query provider
- Set up faker.js mock data layer structure
- Create base TypeScript types/interfaces
- Implement theme toggle with localStorage persistence

### Phase 2: Mock Data Layer

- Create Product factory with faker.js
- Create Vendor factory
- Create Category seed data
- Build MockDatabase class with filtering/sorting
- Create mock service layer with simulated delays
- Build TanStack Query hooks for data fetching
- Generate 500+ seeded products for demo

### Phase 3: Design System & UI Primitives

- Build Button component with variants
- Build Input/Select form components
- Build Modal/Dialog component (Radix based)
- Build Card component
- Build Badge component
- Build Skeleton loader components
- Build Toast notification system

### Phase 4: Header & Navigation

- Build Header layout component
- Implement Search Bar with mock autocomplete
- Create Currency selector dropdown
- Build User Account dropdown (mock auth state)
- Create Mega Menu for categories
- Add theme toggle to header

### Phase 5: Hero Carousel

- Build Carousel component with auto-rotation
- Implement navigation arrows and pagination
- Add touch/swipe support for mobile
- Create mock carousel slide data
- Implement lazy loading for slide images

### Phase 6: Deals Section

- Build Deal Card component
- Implement countdown timer hook
- Create horizontal scrollable container
- Build "Today's Deals" section layout
- Add deal badge variations (Flash, Daily, etc.)

### Phase 7: Categories Section

- Build Category icon grid component
- Create useCategories hook
- Implement category navigation links
- Add hover effects and animations

### Phase 8: Product Card & Grid

- Build ProductCard component with all states
- Implement Favorite button with wishlistStore
- Create Add to Cart with cartStore integration
- Build Buy Now flow (navigate to checkout)
- Implement Product Grid with responsive layout
- Add loading skeletons for grid
- Implement infinite scroll with useInfiniteQuery

### Phase 9: Filter & Sort

- Build Filter sidebar component
- Implement price range slider
- Create multi-select filter checkboxes
- Build Sort dropdown
- Implement filterStore state management
- Add URL sync with TanStack Router
- Create mobile filter bottom sheet

### Phase 10: Product Modal

- Build Modal container with Radix Dialog
- Create Image Gallery with thumbnail nav
- Implement image zoom on hover
- Build Variant Selector (color/size)
- Build Quantity Selector
- Add modal actions integration
- Implement modal animations (Framer Motion)
- Add keyboard navigation (ESC close, arrow keys)

### Phase 11: Footer

- Build Newsletter signup component (mock)
- Create Trust badges row
- Build multi-column link sections
- Add social media icons
- Create payment method icons
- Implement mobile footer accordion

### Phase 12: Polish & Testing

- Dark mode visual QA across all components
- Light mode visual QA across all components
- Performance optimization (bundle size, lazy loading)
- Accessibility audit and fixes (WCAG AA)
- Cross-browser testing
- Mobile responsiveness QA
- Write component unit tests

---

## 12. Success Metrics (Frontend Prototype)

| Metric | Target | Measurement Tool |
|--------|--------|------------------|
| Lighthouse Performance | > 90 | Chrome DevTools |
| Lighthouse Accessibility | > 95 | Chrome DevTools |
| First Contentful Paint (FCP) | < 1.2s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.0s | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Time to Interactive (TTI) | < 3.0s | Lighthouse |
| Bundle Size (gzipped) | < 150KB initial | Vite build stats |
| Component Coverage | 100% of PRD specs | Manual QA checklist |
| Theme Consistency | Pass both modes | Visual regression tests |

---

## 13. Risk Assessment (Frontend)

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Mock data doesn't reflect real-world complexity | Medium | Medium | Extensive faker.js seeding, review with stakeholders |
| Theme inconsistencies between light/dark modes | Medium | Low | Design token audit, visual regression tests |
| Performance degradation with large product lists | Medium | Medium | Virtualized lists, pagination, memoization |
| Bundle size bloat from dependencies | Low | Medium | Tree-shaking, code splitting, bundle analysis |
| Accessibility issues with custom components | Medium | High | Use Radix primitives, WCAG AA audit |
| Cross-browser CSS variable support | Low | Low | PostCSS fallbacks, browser testing |

---

## 14. Appendix

### A. Design Token Quick Reference

**Semantic Colors (use these in components):**

| Token Class | Light | Dark | Usage |
|-------------|-------|------|-------|
| bg-background | #FAFAFA | #171717 | Page background |
| text-foreground | #212121 | #F5F5F5 | Primary text |
| bg-card | #FFFFFF | #1F1F1F | Cards, modals |
| bg-muted | #F5F5F5 | #262626 | Subtle backgrounds |
| text-muted-foreground | #737373 | #A3A3A3 | Secondary text |
| bg-primary | #1B5E20 | #2E7D32 | Primary buttons |
| text-primary | #1B5E20 | #2E7D32 | Links, highlights |
| bg-secondary | #FFC107 | #FFC107 | Secondary buttons |
| bg-accent | #FF5722 | #FF7043 | Deal badges, CTAs |
| border-border | #E5E5E5 | #333333 | All borders |
| bg-destructive | #D32F2F | #B71C1C | Delete, errors |
| bg-success | #388E3C | #2E7D32 | Success states |

**Brand Colors:**

| Token | Value | Usage |
|-------|-------|-------|
| text-brand-green | #1B5E20 | Logo, trust indicators |
| text-brand-gold | #FFC107 | Premium badges |
| text-brand-orange | #FF5722 | Prices, discounts |

### B. Typography Scale

| Class | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| text-4xl | 36px | 40px | Bold | Page titles |
| text-2xl | 24px | 32px | Bold | Section headers |
| text-xl | 20px | 28px | Semi-bold | Card titles |
| text-base | 16px | 24px | Regular | Body text |
| text-sm | 14px | 20px | Regular | Product titles |
| text-xs | 12px | 16px | Regular | Captions, badges |

**Font Stack:** Inter, system-ui, sans-serif

### C. Spacing Scale

| Class | Value | Usage |
|-------|-------|-------|
| gap-1 / p-1 | 4px | Tight spacing |
| gap-2 / p-2 | 8px | Icon gaps |
| gap-3 / p-3 | 12px | Button padding |
| gap-4 / p-4 | 16px | Card padding |
| gap-6 / p-6 | 24px | Section gaps |
| gap-8 / p-8 | 32px | Large sections |

### D. Breakpoints

| Name | Min Width | Tailwind Prefix |
|------|-----------|-----------------|
| Mobile | 0px | (default) |
| sm | 640px | sm: |
| md | 768px | md: |
| lg | 1024px | lg: |
| xl | 1280px | xl: |
| 2xl | 1536px | 2xl: |

### E. Animation Tokens

| Token | Duration | Usage |
|-------|----------|-------|
| transition-colors | 150ms | Color changes |
| transition-shadow | 150ms | Shadow changes |
| transition-transform | 150ms | Transform changes |
| transition-all | 150ms | All properties |
| duration-200 | 200ms | Modal open/close |
| duration-300 | 300ms | Page transitions |
| duration-500 | 500ms | Carousel slides |

### F. Icon Reference

Using **Lucide React** icons:

| Icon | Component Name | Usage |
|------|----------------|-------|
| Heart | Heart | Wishlist/Favorite |
| ShoppingCart | ShoppingCart | Cart |
| Search | Search | Search bar |
| User | User | Account |
| Sun | Sun | Light theme |
| Moon | Moon | Dark theme |
| ChevronLeft/Right | ChevronLeft, ChevronRight | Carousel nav |
| Star | Star | Ratings |
| Truck | Truck | Shipping |
| RotateCcw | RotateCcw | Returns |
| Shield | Shield | Secure payment |
| X | X | Close/dismiss |

### G. Dependencies

Use the latest stable versions of all packages.

**Production Dependencies:**

| Package | Purpose |
|---------|---------|
| @faker-js/faker | Mock data generation |
| @radix-ui/react-dialog | Modal component |
| @radix-ui/react-dropdown-menu | Dropdown menus |
| @radix-ui/react-select | Select inputs |
| @radix-ui/react-slider | Price range slider |
| @radix-ui/react-tabs | Tab components |
| @tanstack/react-query | Data fetching |
| @tanstack/react-router | Routing |
| @tanstack/start | Meta-framework |
| framer-motion | Animations |
| lucide-react | Icons |
| react | UI library |
| react-dom | React DOM |
| @tanstack/react-form | Form handling |
| zod | Schema validation |

**Dev Dependencies:**

| Package | Purpose |
|---------|---------|
| @types/react | TypeScript types |
| autoprefixer | CSS prefixing |
| postcss | CSS processing |
| tailwindcss | Styling |
| tailwindcss-animate | Animation utilities |
| typescript | Type checking |
| vite | Build tool |

---

*End of Document*