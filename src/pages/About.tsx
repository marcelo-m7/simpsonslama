import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils"; // Import cn utility

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16 transition-transform duration-300 ease-in-out hover:rotate-[-1deg] hover:scale-[0.98]"> {/* Aligned by default, misaligned on hover */}
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            {t.about.heroTitle}
          </h1>
          <p className="font-body text-xl text-secondary">
            {t.about.heroSubtitle}
          </p>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          {t.about.chapters.map((chapter, index) => (
            <div
              key={chapter.title}
              className={cn(
                `border-l-4 pl-6 transition-transform duration-300 ease-in-out hover:rotate-[-1deg] hover:translate-x-[-5px]`, // Aligned by default, misaligned on hover
                index % 3 === 0
                  ? "border-primary"
                  : index % 3 === 1
                    ? "border-secondary"
                    : "border-accent"
              )}
            >
              <h2
                className={`font-display text-4xl mb-4 ${
                  index % 3 === 0
                    ? "text-secondary"
                    : index % 3 === 1
                      ? "text-accent"
                      : "text-neon-yellow text-shadow-yellow"
                }`}
              >
                {chapter.title}
              </h2>
              <p className="font-body text-lg text-foreground leading-relaxed">{chapter.content}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 border-4 border-secondary rounded-lg graffiti-border bg-card transition-transform duration-300 ease-in-out hover:rotate-[-1deg]"> {/* Aligned by default, misaligned on hover */}
          <p className="font-display text-3xl text-primary text-shadow-yellow mb-4">"{t.about.quote}"</p>
          <p className="font-body text-lg text-muted-foreground">{t.about.quoteAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default About;