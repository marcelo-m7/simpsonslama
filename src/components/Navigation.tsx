import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, setLocale } = useTranslation();
  const navItems = t.navigation.items;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-primary bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="font-display text-3xl md:text-4xl text-primary animate-neon-pulse group-hover:scale-110 transition-transform">
              {t.navigation.brand}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="font-display text-xl text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:transition-all hover:after:w-full"
                activeClassName="text-primary after:w-full after:bg-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setLocale()}
              aria-label={t.navigation.ariaToggle}
            >
              {t.navigation.toggleLabel}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-spray-paint">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block font-display text-2xl text-foreground hover:text-primary transition-colors py-2 border-b-2 border-muted hover:border-primary"
                activeClassName="text-primary border-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setLocale()}
              aria-label={t.navigation.ariaToggle}
            >
              {t.navigation.toggleLabel}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
