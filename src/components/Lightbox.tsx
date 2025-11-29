import React, { useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrevious, onClose]);

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-4 border-primary">
        {/* Close Button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-primary/20 hover:bg-primary/40 text-primary border-2 border-primary"
          size="icon"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-50 bg-black/70 px-4 py-2 rounded-lg border-2 border-secondary">
          <p className="font-display text-lg text-secondary">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* Previous Button */}
        <Button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-50",
            "bg-secondary/20 hover:bg-secondary/40 text-secondary border-2 border-secondary",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
          size="icon"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        {/* Next Button */}
        <Button
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-50",
            "bg-secondary/20 hover:bg-secondary/40 text-secondary border-2 border-secondary",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
          size="icon"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center p-16">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Image Caption */}
        {currentImage.alt && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/70 px-6 py-3 rounded-lg border-2 border-accent max-w-2xl">
            <p className="font-body text-lg text-foreground text-center">
              {currentImage.alt}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
