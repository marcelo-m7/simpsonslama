import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-primary bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-primary animate-neon-pulse">
              SIMPSONS NA LAMA
            </h3>
            <p className="text-muted-foreground font-body">
              O bar mais caótico e divertido de Curitiba. Ay caramba!
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-2xl text-secondary">Contato</h4>
            <div className="space-y-2 font-body">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>Jardim da Penha, Curitiba - PR</span>
              </a>
              <a 
                href="tel:+5541999999999"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(41) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@simpsonsnalama.com.br"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@simpsonsnalama.com.br</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display text-2xl text-secondary">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-secondary hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-accent hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-foreground" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              Tag suas fotos com <span className="text-primary">#SimpsonsNaLama</span> – amamos ver nossos humanos se divertindo!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-sm text-muted-foreground font-body">
            © 2025 Simpsons na Lama. Todos os direitos reservados. D'oh! 🍩
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
