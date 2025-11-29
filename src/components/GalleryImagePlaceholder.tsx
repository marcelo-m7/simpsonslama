import React from 'react';
import { cn } from '@/lib/utils';

interface GalleryImagePlaceholderProps {
  className?: string;
  text?: string;
}

const GalleryImagePlaceholder: React.FC<GalleryImagePlaceholderProps> = ({ className, text = "Imagem" }) => {
  return (
    <div className={cn(
      "relative w-full h-full flex items-center justify-center bg-muted overflow-hidden",
      className
    )}>
      <img 
        src="/placeholder.svg" 
        alt="Placeholder Image" 
        className="absolute inset-0 w-full h-full object-cover opacity-20" 
        aria-hidden="true"
      />
      <p className="font-display text-2xl text-primary opacity-70 z-10">
        {text}
      </p>
    </div>
  );
};

export default GalleryImagePlaceholder;