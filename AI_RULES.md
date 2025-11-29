# AI Rules for Simpsons na Lama Project

This document outlines the core technologies used in this project and provides guidelines for using specific libraries to maintain consistency and best practices.

## Tech Stack

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
*   **React Router**: For declarative routing in your React application.
*   **Tanstack Query (React Query)**: For server-state management, data fetching, caching, and synchronization.
*   **Lucide React**: A library for beautiful and consistent open-source icons.
*   **Sonner**: A modern toast component for React.
*   **React Hook Form & Zod**: For efficient form management and schema-based validation.

## Library Usage Guidelines

To ensure consistency and maintainability, please adhere to the following rules when developing:

*   **UI Components**:
    *   Always prioritize `shadcn/ui` components for building the user interface.
    *   If a specific `shadcn/ui` component is not available or requires significant deviation from its default behavior, create a new component in `src/components/` and style it using Tailwind CSS.
    *   **Do not modify `shadcn/ui` component files directly.**
*   **Styling**:
    *   All styling must be done using **Tailwind CSS** classes.
    *   Custom animations and utility classes should be defined in `src/index.css` and `tailwind.config.ts`.
*   **Routing**:
    *   Use `react-router-dom` for all client-side navigation and route management. Routes are defined in `src/App.tsx`.
*   **Data Fetching & State Management**:
    *   For managing server state, data fetching, caching, and synchronization, use **Tanstack Query**.
    *   For simple, local component state, `useState` and `useReducer` are appropriate.
*   **Icons**:
    *   All icons used in the application should come from the **`lucide-react`** library.
*   **Forms**:
    *   Use **`react-hook-form`** for managing form state, validation, and submission.
    *   For schema validation, integrate **`zod`** with `react-hook-form` using `@hookform/resolvers`.
*   **Notifications**:
    *   For displaying toast notifications to the user, use the **`sonner`** library.
*   **Utility Functions**:
    *   For conditionally applying Tailwind CSS classes, use the `cn` utility function from `src/lib/utils.ts` (which leverages `clsx` and `tailwind-merge`).
*   **File Structure**:
    *   New components should be placed in `src/components/`.
    *   New pages should be placed in `src/pages/`.
    *   Utility functions should be placed in `src/lib/` or `src/utils/`.
    *   Hooks should be placed in `src/hooks/`.