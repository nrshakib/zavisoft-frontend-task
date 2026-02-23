# Kicks – Modern E-commerce Front-end

A premium, responsive e-commerce front-end application built for the Zavisoft front-end task. This project focuses on a high-end user experience, smooth animations, and robust data handling.

## 🚀 Live Demo
[View Live Site](https://zavisoft-frontend-task.vercel.app/)

## 📖 Overview
Kicks is a modern sneaker store front-end that provides a seamless shopping experience. Key features include:
- **Landing Page**: Dynamic hero sections, new drops, and category sliders.
- **Product Explorer**: Full product listings and filtered categories.
- **Product Details**: Comprehensive view with size/color selection and related suggestions.
- **Cart Management**: Real-time cart updates, quantity management, and subtotal calculations.
- **Custom 404 Page**: A brand-aligned error page for better user retention.
- **API Fallbacks**: Skeleton loaders and graceful error handling for all data-fetching components.

## 🛠️ Tech Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for API handling.
- **Components**: [MUI (Material UI)](https://mui.com/)
- **Animations**: [Motion (framer-motion)](https://motion.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Carousel**: [React Slick](https://react-slick.neostack.com/)

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/nrshakib/zavisoft-frontend-task.git
cd zavisoft-frontend-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory (one is already provided in the repository for this task):
```env
NEXT_PUBLIC_BASE_URL="https://api.escuelajs.co/api/v1"
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Implementation Notes
- **Design Consistency**: All components follow the brand's typography (Rubik/Open Sans) and color palette.
- **Performance**: Skeletons are used to prevent layout shifts during data loading.
- **Error Handling**: Reusable `ErrorFallback` components allow users to retry failed API requests effortlessly.
- **Responsiveness**: The site is fully optimized for Mobile, Tablet, and Desktop views.

## TBN, The .env file is pushed to the github intentionally
