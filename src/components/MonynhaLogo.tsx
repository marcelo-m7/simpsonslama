"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MonynhaLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://monynha.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site crafted by Monynha Softwares"
          className={cn(
            "relative block w-12 h-12 rounded-full overflow-hidden",
            "bg-gradient-to-br from-neon-purple to-accent", // Using existing theme colors for gradient
            "flex items-center justify-center",
            "transition-all duration-300 ease-in-out",
            "group",
            isHovered ? "scale-110 shadow-lg shadow-neon-purple/50" : ""
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Placeholder SVG for Monynha Logo - simple circle for now */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "h-8 w-8 text-white", // White color for the icon itself
              "transition-transform duration-300 ease-in-out",
              isHovered ? "animate-jelly-bounce" : ""
            )}
            role="img"
            aria-hidden="true"
          >
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z" />
          </svg>
          {isHovered && (
            <span className="absolute inset-0 rounded-full bg-neon-purple/50 animate-pulse-light"></span>
          )}
        </a>
      </TooltipTrigger>
      <TooltipContent className="font-body text-sm bg-card text-foreground border border-primary">
        Site crafted by Monynha Softwares
      </TooltipContent>
    </Tooltip>
  );
};

export default MonynhaLogo;