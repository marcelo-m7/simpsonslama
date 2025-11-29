import { Beer, Flame, Sparkles, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Menu = () => {
  const { t } = useTranslation();
  const drinkIcons = [Flame, Beer, Sparkles, Zap, Sparkles, Beer];
  const drinkColors = ["text-neon-yellow", "text-primary", "text-brasil-blue", "text-accent", "text-secondary", "text-accent"];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            {t.menu.heroTitle}
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            {t.menu.heroSubtitle}
          </p>
        </div>

        {/* Drinks Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Beer className="h-12 w-12 text-secondary" />
            <h2 className="font-display text-5xl text-secondary">{t.menu.drinksTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.menu.drinkItems.map((drink, index) => {
              const Icon = drinkIcons[index];
              const color = drinkColors[index];

              return (
                <div
                  key={drink.name}
                  className="p-6 border-4 border-primary rounded-lg graffiti-border bg-card hover-float animate-spray-paint"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`h-10 w-10 ${color} ${index === 0 ? "text-shadow-yellow" : ""}`} /> {/* Added text-shadow-yellow conditionally */}
                    <span className="font-display text-2xl text-accent">{drink.price}</span>
                  </div>
                  <h3 className="font-display text-3xl text-primary text-shadow-yellow mb-3">{drink.name}</h3> {/* Added text-shadow-yellow */}
                  <p className="font-body text-muted-foreground">{drink.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Food Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Zap className="h-12 w-12 text-accent" />
            <h2 className="font-display text-5xl text-accent">{t.menu.foodTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.menu.foodItems.map((item, index) => (
              <div
                key={item.name}
                className="p-6 border-4 border-secondary rounded-lg graffiti-border bg-card hover-float animate-spray-paint"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-2xl text-accent">{item.price}</span>
                </div>
                <h3 className="font-display text-3xl text-secondary mb-3">{item.name}</h3>
                <p className="font-body text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            {t.menu.moeNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;