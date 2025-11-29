import { useState } from "react";
import GalleryImagePlaceholder from "@/components/GalleryImagePlaceholder";
import Lightbox from "@/components/Lightbox";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Placeholder for actual gallery images - would be populated with real photos
  const categories = [
    {
      title: "Arte & Decoração",
      description: "Murais insanos e graffiti que cobrem cada canto do bar",
      images: 9,
      color: "border-primary",
    },
    {
      title: "Drinks & Comidas",
      description: "Os pratos e bebidas mais loucos que você já viu",
      images: 9,
      color: "border-secondary",
    },
    {
      title: "Eventos & Festas",
      description: "A galera se divertindo até o amanhecer",
      images: 9,
      color: "border-accent",
    },
  ];

  // Generate all images for lightbox
  const allImages = categories.flatMap((category, catIndex) =>
    Array.from({ length: category.images }).map((_, index) => ({
      src: "/placeholder.svg",
      alt: `${category.title} - Foto ${index + 1}`,
      categoryIndex: catIndex,
      imageIndex: index,
    }))
  );

  const handleImageClick = (catIndex: number, imgIndex: number) => {
    // Calculate the global index for this image
    const globalIndex = categories
      .slice(0, catIndex)
      .reduce((sum, cat) => sum + cat.images, 0) + imgIndex;
    
    setCurrentCategory(catIndex);
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev < allImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            GALERIA
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            Um tour visual pelo bar mais maluco de Vitória, ES. 
            <br />
            <span className="text-secondary">Cada foto conta uma história épica!</span>
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <section key={category.title} className="animate-spray-paint" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              <div className={`border-l-4 ${category.color} pl-6 mb-8`}>
                <h2 className="font-display text-5xl text-primary mb-3">{category.title}</h2>
                <p className="font-body text-lg text-muted-foreground">{category.description}</p>
              </div>

              {/* Masonry-style Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: category.images }).map((_, index) => (
                  <div 
                    key={index}
                    onClick={() => handleImageClick(catIndex, index)}
                    className={`
                      ${category.color} border-4 rounded-lg graffiti-border bg-muted 
                      hover:scale-105 transition-transform cursor-pointer overflow-hidden
                      ${index % 3 === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}
                    `}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleImageClick(catIndex, index);
                      }
                    }}
                    aria-label={`Ver ${category.title} - Foto ${index + 1} em tela cheia`}
                  >
                    <GalleryImagePlaceholder text={`Foto ${index + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center p-10 border-4 border-secondary rounded-lg graffiti-border bg-card">
          <h3 className="font-display text-4xl text-secondary mb-4">
            Quer Ver Mais?
          </h3>
          <p className="font-body text-lg text-foreground mb-6 max-w-2xl mx-auto">
            Nosso Instagram está lotado de fotos e vídeos insanos! 
            <br />
            Tag suas fotos com <span className="text-primary font-bold">#SimpsonsNaLama</span> – 
            adoramos ver vocês se divertindo! 
          </p>
          <a 
            href="https://www.instagram.com/simpsonsnalama/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-display text-xl bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/90 hover:scale-105 transition-all"
          >
            Seguir no Instagram
          </a>
        </div>

        {/* Upload CTA */}
        <div className="mt-12 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            <span className="text-accent font-bold">Dica do Homer:</span> Tire mil fotos! 
            Quanto mais absurda, melhor. Mmm... fotografia... 📸
          </p>
        </div>

        {/* Lightbox */}
        <Lightbox
          images={allImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
};

export default Gallery;