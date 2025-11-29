import { MapPin, Phone, Mail, Clock, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const address = "Av. Anísio Fernandes Coelho, 1730, Loja 03 – Jardim da Penha, Vitória – ES, 29060-670 – Brasil";
  const phoneHref = t.contact.phoneValue.replace(/[^+\d]/g, "");
  // IMPORTANT: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key.
  // It is recommended to use an environment variable for this (e.g., import.meta.env.VITE_GOOGLE_MAPS_API_KEY).
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            {t.contact.heroTitle}
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            {t.contact.heroSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-4 border-primary rounded-lg graffiti-border bg-card p-8 hover-float">
              <h2 className="font-display text-4xl text-primary mb-6">{t.contact.whereTitle}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">{t.contact.addressTitle ?? t.contact.addressLabel}</h3>
                    <p className="font-body text-foreground whitespace-pre-line">{t.contact.addressLabel}</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">{t.contact.addressNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">{t.contact.hoursTitle}</h3>
                    <p className="font-body text-foreground whitespace-pre-line">{t.contact.hoursValue}</p>
                    <span className="text-sm text-muted-foreground">{t.contact.hoursNote}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">{t.contact.phoneTitle}</h3>
                    <a href={`tel:${phoneHref}`} className="font-body text-foreground hover:text-accent transition-colors">
                      {t.contact.phoneValue}
                    </a>
                    <p className="font-body text-sm text-muted-foreground mt-1">{t.contact.phoneNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2">{t.contact.emailTitle}</h3>
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="font-body text-foreground hover:text-accent transition-colors"
                    >
                      {t.contact.emailValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="border-4 border-secondary rounded-lg graffiti-border bg-card p-8 hover-float">
              <h2 className="font-display text-4xl text-secondary mb-6">{t.contact.socialsTitle}</h2>

              <div className="space-y-4">
                {t.contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-secondary/20 transition-colors group"
                  >
                    {social.label.toLowerCase().includes("x") ? (
                      <X className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    ) : (
                      <Instagram className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                    )}
                    <div>
                      <h3 className="font-display text-xl text-foreground">{social.label}</h3>
                      <p className="font-body text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-4 border-accent rounded-lg graffiti-border bg-card p-8">
            <h2 className="font-display text-4xl text-accent mb-6">{t.contact.formTitle}</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="font-display text-xl text-foreground block mb-2">
                  {t.contact.formName}
                </label>
                <Input id="name" type="text" placeholder={t.contact.formNamePlaceholder} className="border-2 border-muted focus:border-primary" />
              </div>

              <div>
                <label htmlFor="email" className="font-display text-xl text-foreground block mb-2">
                  {t.contact.formEmail}
                </label>
                <Input id="email" type="email" placeholder={t.contact.formEmailPlaceholder} className="border-2 border-muted focus:border-primary" />
              </div>

              <div>
                <label htmlFor="phone" className="font-display text-xl text-foreground block mb-2">
                  {t.contact.formPhone}
                </label>
                <Input id="phone" type="tel" placeholder={t.contact.formPhonePlaceholder} className="border-2 border-muted focus:border-primary" />
              </div>

              <div>
                <label htmlFor="message" className="font-display text-xl text-foreground block mb-2">
                  {t.contact.formMessage}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.formMessagePlaceholder}
                  rows={5}
                  className="border-2 border-muted focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-display text-2xl bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
              >
                {t.contact.formSubmit}
              </Button>
            </form>

            <p className="font-body text-sm text-muted-foreground mt-6 text-center">
              {t.contact.formResponse}
            </p>
          </div>
        </div>

        {/* Google Map Integration */}
        <div className="border-4 border-primary rounded-lg graffiti-border bg-muted overflow-hidden h-96">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t.contact.mapTitle}
            aria-label={t.contact.mapAria}
          ></iframe>
        </div>
        <p className="font-body text-sm text-muted-foreground mt-4 text-center">
          {t.contact.mapNotice}
        </p>
      </div>
    </div>
  );
};

export default Contact;