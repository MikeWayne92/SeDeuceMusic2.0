"use client";
import { cn } from "../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 dark:bg-zinc-950 text-white transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Aurora Effect */}
          <div
            className={cn(
              `
            [--aurora-primary:repeating-linear-gradient(100deg,var(--purple-500)_0%,var(--indigo-400)_15%,var(--blue-400)_30%,var(--purple-400)_45%,var(--indigo-500)_60%,var(--purple-600)_75%)]
            [background-image:var(--aurora-primary)]
            [background-size:400%_400%]
            [background-position:50%_50%]
            filter blur-[8px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora-primary)] 
            after:[background-size:200%_200%] 
            after:animate-aurora after:[background-attachment:fixed]
            pointer-events-none
            absolute -inset-[10px] opacity-100 will-change-transform animate-aurora-slow`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_40%,var(--transparent)_80%)]`
            )}
          />
          
          {/* Secondary Aurora Beams */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {/* Top left beam */}
            <div 
              className="absolute w-[50%] h-[500px] bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-blue-700/30 
                         rotate-[20deg] blur-[60px] -top-[60px] left-[20%] animate-beam-move"
            />
            
            {/* Center right beam */}
            <div 
              className="absolute w-[40%] h-[300px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-indigo-700/30 
                         -rotate-[15deg] blur-[70px] top-[30%] right-[10%] animate-beam-move-reverse"
            />
            
            {/* Bottom left beam */}
            <div 
              className="absolute w-[45%] h-[400px] bg-gradient-to-r from-blue-500/30 via-purple-400/20 to-indigo-600/30
                         rotate-[35deg] blur-[80px] bottom-[10%] left-[15%] animate-beam-move-slow"
            />
            
            {/* Additional beams for more motion */}
            <div 
              className="absolute w-[30%] h-[200px] bg-gradient-to-r from-purple-800/20 via-indigo-400/20 to-blue-500/20
                         rotate-[-25deg] blur-[50px] top-[20%] left-[10%] animate-aurora-reverse"
            />
            
            <div 
              className="absolute w-[35%] h-[250px] bg-gradient-to-r from-blue-600/20 via-purple-500/15 to-indigo-800/20
                         rotate-[15deg] blur-[60px] bottom-[30%] right-[15%] animate-aurora-slow"
            />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}; 