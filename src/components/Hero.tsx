import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-streaming.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Content Discovery</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Stream What Moves You
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover curated short-form content tailored to your taste. Free streaming powered by AI, 
            bringing underserved stories to your screen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = "/auth"}>
              <Play className="h-5 w-5" />
              Start Watching Free
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = "/upload"}>
              Upload Content
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Curated Videos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Genres & Regions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Free to Watch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};
