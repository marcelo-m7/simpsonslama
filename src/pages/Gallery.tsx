import { useState } from "react";
import GalleryImagePlaceholder from "@/components/GalleryImagePlaceholder";
import Lightbox from "@/components/Lightbox"; // Added this import
import { useTranslation } from "@/hooks/useTranslation"; // Ensure useTranslation is imported

const Gallery = () => {
  const { t } = useTranslation();
  const categories = t.gallery.categories;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0); // This state is not used in the current logic for allImages, but might be for other purposes.

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
            {t.gallery.heroTitle}
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            {t.gallery.heroSubtitle}
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <section key={category.title} className="animate-spray-paint" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              <div className={`border-l-4 ${catIndex === 0 ? "border-primary" : catIndex === 1 ? "border-secondary" : "border-accent"} pl-6 mb-8`}>
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
          <h3 className="font-display text-4xl text-secondary mb-4">{t.gallery.moreTitle}</h3>
          <p className="font-body text-lg text-foreground mb-6 max-w-2xl mx-auto">
            {t.gallery.moreDescription}
          </p>
          <a
            href="https://www.instagram.com/simpsonsnalama/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-xl bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/90 hover:scale-105 transition-all"
          >
            {t.gallery.moreButton}
          </a>
        </div>

        {/* Upload CTA */}
        <div className="mt-12 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            {t.gallery.homerTip}
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