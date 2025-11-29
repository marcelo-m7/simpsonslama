import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./components/ThemeProvider.tsx"; // Import ThemeProvider

createRoot(document.getElementById("root")!).render(
  <I18nProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> {/* Added ThemeProvider */}
      <App />
    </ThemeProvider>
  </I18nProvider>,
);