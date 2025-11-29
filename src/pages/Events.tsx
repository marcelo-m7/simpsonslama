import { Calendar, Mic, Palette, Trophy, Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  // NOTE: This event data is currently hardcoded. In a real application,
  // this data would typically be fetched from a backend API or a content management system.
  const upcomingEvents = [
    {
      title: "Krustyland Karaokê Night",
      date: "Toda Sexta-feira, 21h",
      description: "Cante seus hits favoritos dos Simpsons (e outras músicas também). Krusty estaria orgulhoso!",
      icon: Mic,
      color: "border-secondary",
      accentColor: "text-secondary",
    },
    {
      title: "Cosplay Contest Mensal",
      date: "Primeiro Sábado do Mês, 22h",
      description: "Vista-se como seu personagem favorito! Prêmios para os melhores cosplays. Ay caramba!",
      icon: Palette,
      color: "border-primary",
      accentColor: "text-primary",
    },
    {
      title: "Springfield Trivia Night",
      date: "Toda Quarta-feira, 20h",
      description: "Teste seu conhecimento sobre os 34+ temporadas! Cerveja grátis pros vencedores.",
      icon: Trophy,
      color: "border-accent",
      accentColor: "text-accent",
    },
    {
      title: "Live Music Sundays",
      date: "Domingos, 19h",
      description: "Bandas cover de rock clássico e alternativo. Porque até Bart toca bateria!",
      icon: Music,
      color: "border-neon-purple",
      accentColor: "text-neon-purple",
    },
  ];

  const specialEvents = [
    {
      title: "Treehouse of Horror Party",
      date: "Outubro - Data a anunciar",
      description: "A festa mais assustadora do ano! Fantasias, drinks especiais e maratona de episódios de Halloween.",
      icon: Sparkles,
    },
    {
      title: "Homer's Birthday Bash",
      date: "12 de Maio",
      description: "Celebre o aniversário do pai amarelo mais amado do mundo com drinks especiais e muitos donuts!",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            EVENTOS
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            Prepare-se pra festas que vão até o amanhecer. 
            <br />
            <span className="text-secondary">Don't have a cow, man - junte-se à diversão!</span>
          </p>
        </div>

        {/* Regular Events */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="h-12 w-12 text-accent" />
            <h2 className="font-display text-5xl text-accent">Eventos Regulares</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.title}
                className={`p-8 border-4 ${event.color} rounded-lg graffiti-border bg-card hover-float animate-spray-paint`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${event.accentColor}`}>
                    <event.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-primary mb-2">{event.title}</h3>
                    <p className={`font-body text-lg ${event.accentColor} font-semibold`}>{event.date}</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-lg">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Special Events */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Sparkles className="h-12 w-12 text-secondary" />
            <h2 className="font-display text-5xl text-secondary">Eventos Especiais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialEvents.map((event, index) => (
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
            Eventos Privados
          </h2>
          <p className="font-body text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Quer fazer sua festa de aniversário, despedida de solteiro(a) ou evento corporativo 
            no bar mais insano de Curitiba? Woo-hoo! Entre em contato!
          </p>
          <Button size="lg" className="font-display text-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all">
            Solicitar Orçamento
          </Button>
        </section>

        {/* Instagram Feed Suggestion */}
        <div className="mt-16 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            <span className="text-accent font-bold">Dica do Bart:</span> Siga a gente no Instagram 
            <span className="text-primary"> @simpsonsnalama </span> 
            pra ver as melhores fotos dos eventos e ficar por dentro de tudo! 📸
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;