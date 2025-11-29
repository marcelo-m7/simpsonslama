import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-spray-paint">
          <div className="space-y-4">
            <h1 className="font-display text-9xl text-primary animate-neon-pulse">
              404
            </h1>
            <h2 className="font-display text-5xl text-secondary">
              {t.notFound.title}
            </h2>
            <p className="font-body text-2xl text-foreground max-w-2xl mx-auto">
              {t.notFound.subtitle}
              <br />
              <span className="text-muted-foreground">{t.notFound.description}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/">
              <Button size="lg" className="font-display text-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform">
                <Home className="mr-2 h-5 w-5" />
                {t.notFound.backHome}
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="font-display text-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-transform"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t.notFound.goBack}
            </Button>
          </div>

          <div className="mt-12 p-6 border-4 border-accent rounded-lg graffiti-border bg-card max-w-2xl mx-auto">
            <p className="font-body text-lg text-foreground">
              <span className="text-accent font-bold">{t.notFound.hint}</span> {t.notFound.bartTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
