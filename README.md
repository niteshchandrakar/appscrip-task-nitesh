# 🛍️ APPSCRIP

This project is a _responsive e-commerce website UI_ , built using _React_ and _CSS Modules_. It contains all the essential components of an e-commerce experience – from a dynamic header, product listings with filtering/sorting, to a responsive footer designed to adapt across all screen sizes.

---

## 🚀 Key Features

- 🔄 Fully responsive layout (Desktop + Mobile)
- 📦 Clean architecture using _React + TypeScript + CSS Modules_
- 🧩 Modular and reusable components
- 🔍 Working _filters and sorting_ using `fakestoreapi.com`
- 🧾 Category filtering with checkbox selection
- 📱 Footer dropdowns only visible in _mobile view_

---

## 🧱 Component Breakdown

### 🔝 Header

- Displays brand logo and navigation
- Contains wishlist icon that toggles red on click
- Responsive hamburger for mobile

### 🛒 Product Page

- Fetches data from `https://fakestoreapi.com/products`
- Grid layout using CSS modules
- Filters by category (checkbox)
- Sort by price (asc/desc) or rating
- Controlled with `useState`, `useEffect`

### 🧾 Sidebar Filter UI

- Filter by category and rating
- Section headers are collapsible (accordion)
- Controlled via toggle state

### 💡 Wishlist Icon

- heart icon that turns red on click

---

## ✅ Tech Stack

- _React_ (with functional components + hooks)
- _CSS Modules_ (no external CSS libs)
- _Responsive Web Design_
- _Dynamic filtering/sorting_
- _Public API (fakestoreapi)_

---

### Desktop View

- Header with nav icons and wishlist
- Filter sidebar always visible
- Grid of products
- Full footer with multi-column layout

### Mobile View

- Collapsible filter sidebar
- Hamburger nav
- Footer with dropdown sections

Developed by: Nitesh Chandrakar
