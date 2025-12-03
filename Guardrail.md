# Project Guardrails & Best Practices

This document outlines the engineering standards, architectural patterns, and best practices for developing this TypeScript plugin using Vite. Adhering to these guardrails ensures code quality, maintainability, and scalability.

## 1. Technology Stack

-   **Core**: React 18+, TypeScript 5+
-   **Build Tool**: Vite (Library Mode)
-   **Styling**: Tailwind CSS
-   **State Management**: React Context / Hooks
-   **Testing**: Vitest, React Testing Library
-   **Linting/Formatting**: ESLint, Prettier

## 2. Project Structure

Maintain a clean separation of concerns.

```
src/
├── components/        # Reusable UI components
│   ├── common/        # Generic components (Buttons, Inputs)
│   └── [Feature]/     # Feature-specific components
├── hooks/             # Custom React hooks
├── utils/             # Pure utility functions (date formatting, math)
├── types/             # Shared TypeScript interfaces and types
├── context/           # React Context definitions
├── styles/            # Global styles and Tailwind directives
└── index.ts           # Public API export (Entry point)
```

## 3. TypeScript Guidelines

### Strict Typing
-   **No `any`**: Avoid `any` at all costs. Use `unknown` if the type is truly not known yet, or generic types.
-   **Explicit Return Types**: Define return types for functions, especially exported ones.
-   **Interfaces over Types**: Use `interface` for object definitions (extensible) and `type` for unions/intersections.

### Props
-   Define component props as interfaces named `[ComponentName]Props`.
-   Use optional properties `?` for non-required props.
-   Document complex props with JSDoc comments.

```typescript
interface ButtonProps {
    /** The text to display inside the button */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}
```

## 4. Component Patterns

### Functional Components
-   Use functional components with hooks.
-   **Co-location**: Keep related styles, tests, and sub-components close to the main component if they are not reused elsewhere.

### Composition
-   Prefer component composition (passing `children`) over prop drilling or massive configuration objects.
-   Use **Render Props** for highly customizable slots (e.g., `renderHeader`, `renderSidebar`).

### Hooks
-   Extract complex logic into custom hooks (`useCalendarLogic`, `useEventHandlers`).
-   Hooks should be pure logic and return data/handlers, not JSX.

## 5. Styling (Tailwind CSS)

-   **Utility-First**: Use Tailwind utility classes for layout and spacing.
-   **Class Merging**: Use `clsx` or `tailwind-merge` to conditionally apply classes and allow user overrides.
-   **Prefixing**: Since this is a plugin, ensure Tailwind classes don't conflict with the host application. (Consider using a prefix in `tailwind.config.js` if necessary, or rely on specific scoping).

```tsx
// Good
<div className={clsx("p-4 bg-white", className)}>...</div>
```

## 6. State Management

-   **Local State**: Use `useState` for component-specific state (e.g., isDrawerOpen).
-   **Global State**: Use React Context for state shared across the plugin (e.g., `CalendarContext` for current view, selected date).
-   **Avoid External Stores**: Minimize dependencies on external state libraries (Redux, Zustand) unless absolutely necessary to keep the plugin lightweight.

## 7. Performance

-   **Memoization**: Use `useMemo` for expensive calculations and `useCallback` for functions passed as props to memoized children.
-   **Bundle Size**: Import only what you need.
    -   *Bad*: `import * as dateFns from 'date-fns'`
    -   *Good*: `import { format, addDays } from 'date-fns'`
-   **Code Splitting**: If the plugin has heavy sub-components (e.g., a rich text editor), use `React.lazy` and `Suspense`.

## 8. Build & Deployment (Vite)

### Library Mode
Configure Vite to build in **Library Mode**. This ensures the output is a consumable package (ESM/CJS) rather than a standalone app.

-   **Externalize Dependencies**: React and ReactDOM should be `peerDependencies`, not bundled into the build.

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyCalendarPlugin',
      fileName: 'my-calendar-plugin',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

## 9. Testing

-   **Unit Tests**: Test utility functions and complex hooks using Vitest.
-   **Component Tests**: Test UI components using React Testing Library. Focus on user interactions (clicks, inputs) rather than implementation details.
-   **Coverage**: Aim for high coverage on core logic (e.g., date navigation, event filtering).

## 10. Git Workflow

-   **Conventional Commits**: Use conventional commit messages (e.g., `feat: add scheduled view`, `fix: navigation bug`).
-   **Branching**: Feature branches (`feat/name`), Bug fix branches (`fix/issue`).
-   **PR Reviews**: All code must be reviewed before merging to `main`.

## 11. Documentation

-   **README**: Keep the README updated with installation instructions, prop definitions, and usage examples.
-   **Comments**: Use JSDoc for public APIs (exported components and functions).
-   **Storybook** (Recommended): Use Storybook to develop and document components in isolation.
