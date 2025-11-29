import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            CONTATO
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            Vem pro Springfield brasileiro! 
            <br />
            <span className="text-secondary">Estamos te esperando com um Duff gelado. 🍺</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-4 border-primary rounded-lg graffiti-border bg-card p-8 hover-float">
              <h2 className="font-display text-4xl text-primary mb-6">Onde Estamos</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">Endereço</h3>
                    <p className="font-body text-foreground">
                      Rua Springfield, 742
                      <br />
                      Jardim da Penha - Curitiba, PR
                      <br />
                      CEP: 80000-000
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      (Procure pelo prédio coberto de graffiti dos Simpsons - impossível errar!)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">Horário</h3>
                    <p className="font-body text-foreground">
                      Segunda a Domingo: 18h - 6h
                      <br />
                      <span className="text-sm text-muted-foreground">
                        (Sim, ficamos abertos até o sol nascer!)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">Telefone</h3>
                    <a 
                      href="tel:+5541999999999" 
                      className="font-body text-foreground hover:text-accent transition-colors"
                    >
                      (41) 99999-9999
                    </a>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      WhatsApp disponível!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">Email</h3>
                    <a 
                      href="mailto:contato@simpsonsnalama.com.br"
                      className="font-body text-foreground hover:text-accent transition-colors"
                    >
                      contato@simpsonsnalama.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="border-4 border-secondary rounded-lg graffiti-border bg-card p-8 hover-float">
              <h2 className="font-display text-4xl text-secondary mb-6">Redes Sociais</h2>
              
              <div className="space-y-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-secondary/20 transition-colors group"
                >
                  <Instagram className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-display text-xl text-foreground">Instagram</h3>
                    <p className="font-body text-muted-foreground">@simpsonsnalama</p>
                  </div>
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent/20 transition-colors group"
                >
                  <Facebook className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-display text-xl text-foreground">Facebook</h3>
                    <p className="font-body text-muted-foreground">Simpsons na Lama</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-4 border-accent rounded-lg graffiti-border bg-card p-8">
            <h2 className="font-display text-4xl text-accent mb-6">Manda uma Mensagem!</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="font-display text-xl text-foreground block mb-2">
                  Nome
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Homer Simpson"
                  className="border-2 border-muted focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-display text-xl text-foreground block mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="homer@simpson.com"
                  className="border-2 border-muted focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-display text-xl text-foreground block mb-2">
                  Telefone
                </label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="(41) 99999-9999"
                  className="border-2 border-muted focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-display text-xl text-foreground block mb-2">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  placeholder="Conta pra gente: quer reservar uma mesa? Fazer um evento? Só dizer oi?"
                  rows={5}
                  className="border-2 border-muted focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full font-display text-2xl bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
              >
                Enviar Mensagem
              </Button>
            </form>

            <p className="font-body text-sm text-muted-foreground mt-6 text-center">
              Respondemos em até 24h. Ou no tempo que o Homer leva pra comer um donut. 🍩
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="border-4 border-primary rounded-lg graffiti-border bg-muted overflow-hidden h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="font-display text-3xl text-primary">Mapa do Google aqui</p>
            <p className="font-body text-muted-foreground mt-2">
              Rua Springfield, 742 - Jardim da Penha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
