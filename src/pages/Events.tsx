import { Calendar, Mic, Palette, Trophy, Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Events = () => {
  const { t } = useTranslation();
  const regularIcons = [Mic, Palette, Trophy, Music];
  const regularColors = ["border-secondary", "border-primary", "border-accent", "border-neon-purple"];
  const regularAccent = ["text-secondary", "text-primary", "text-accent", "text-neon-purple"];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            {t.events.heroTitle}
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            {t.events.heroSubtitle}
          </p>
        </div>

        {/* Regular Events */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="h-12 w-12 text-accent" />
            <h2 className="font-display text-5xl text-accent">{t.events.regularTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.events.regular.map((event, index) => {
              const Icon = regularIcons[index];

              return (
                <div
                  key={event.title}
                  className={`p-8 border-4 ${regularColors[index]} rounded-lg graffiti-border bg-card hover-float animate-spray-paint`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-muted ${regularAccent[index]}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-3xl text-primary mb-2">{event.title}</h3>
                      <p className={`font-body text-lg ${regularAccent[index]} font-semibold`}>{event.date}</p>
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground text-lg">{event.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Special Events */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Sparkles className="h-12 w-12 text-secondary" />
            <h2 className="font-display text-5xl text-secondary">{t.events.specialTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.events.special.map((event, index) => (
              <div
                key={event.title}
                className="p-8 border-4 border-secondary rounded-lg graffiti-border bg-card hover-float animate-spray-paint"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted text-secondary">
                    <event.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-primary mb-2">{event.title}</h3>
                    <p className="font-body text-lg text-secondary font-semibold">{event.date}</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-lg">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Private Events CTA */}
        <section className="p-10 border-4 border-primary rounded-lg graffiti-border bg-gradient-to-r from-card to-muted text-center">
          <h2 className="font-display text-5xl text-primary mb-6">
            {t.events.privateTitle}
          </h2>
          <p className="font-body text-xl text-foreground mb-8 max-w-3xl mx-auto">
            {t.events.privateDescription}
          </p>
          <Button size="lg" className="font-display text-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all">
            {t.events.privateCta}
          </Button>
        </section>

        {/* Instagram Feed Suggestion */}
        <div className="mt-16 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            {t.events.instagramTip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;