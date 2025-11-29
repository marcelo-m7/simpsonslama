import { ArrowRight, Beer, Calendar, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBar from "@/assets/hero-bar.jpg";
import donutIcon from "@/assets/donut-icon.png";
import duffIcon from "@/assets/duff-icon.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBar})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="space-y-6 animate-spray-paint">
            <h1 className="font-display text-6xl md:text-8xl text-primary animate-neon-pulse">
              BEM-VINDO AO SPRINGFIELD DA VIDA REAL
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
              O bar mais caótico, divertido e Simpsons-obsessivo de Curitiba. 
              <br />
              <span className="text-secondary">Ay caramba!</span> Prepare-se para uma experiência inesquecível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/menu">
                <Button size="lg" className="font-display text-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform">
                  Ver o Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="font-display text-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-transform">
                  Próximos Eventos
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute bottom-20 left-10 w-20 h-20 animate-float hidden md:block">
            <img src={donutIcon} alt="Homer's donut" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-40 right-10 w-24 h-24 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
            <img src={duffIcon} alt="Duff beer" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 border-4 border-primary rounded-lg hover-float graffiti-border bg-background/50">
              <div className="flex justify-center">
                <Beer className="h-16 w-16 text-secondary" />
              </div>
              <h3 className="font-display text-3xl text-primary">Drinks Épicos</h3>
              <p className="font-body text-muted-foreground">
                Do Flaming Moe ao Duff Beer, drinks que fariam até o Barney chorar de alegria.
              </p>
              <Link to="/menu">
                <Button variant="link" className="text-accent font-display text-lg hover:text-accent/80">
                  Explorar Menu →
                </Button>
              </Link>
            </div>

            <div className="text-center space-y-4 p-6 border-4 border-secondary rounded-lg hover-float graffiti-border bg-background/50">
              <div className="flex justify-center">
                <Calendar className="h-16 w-16 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-secondary">Eventos Insanos</h3>
              <p className="font-body text-muted-foreground">
                Cosplay, karaokê, trivia nights e festas que duram até o sol nascer. Woo-hoo!
              </p>
              <Link to="/events">
                <Button variant="link" className="text-accent font-display text-lg hover:text-accent/80">
                  Ver Eventos →
                </Button>
              </Link>
            </div>

            <div className="text-center space-y-4 p-6 border-4 border-accent rounded-lg hover-float graffiti-border bg-background/50">
              <div className="flex justify-center">
                <Image className="h-16 w-16 text-neon-purple" />
              </div>
              <h3 className="font-display text-3xl text-accent">Arte de Rua</h3>
              <p className="font-body text-muted-foreground">
                Murais insanos, graffiti por todos os lados, o bar que é uma obra de arte viva.
              </p>
              <Link to="/gallery">
                <Button variant="link" className="text-accent font-display text-lg hover:text-accent/80">
                  Ver Galeria →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-neon-purple/20 to-accent/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-6 animate-neon-pulse">
            VENHA FAZER PARTE DA FAMÍLIA!
          </h2>
          <p className="font-body text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Seja springfieldiano por uma noite (ou madrugada). 
            <br />
            Garanta sua mesa no bar mais lendário de Curitiba.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-display text-2xl bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-110 transition-all px-8 py-6">
              Entre em Contato
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
