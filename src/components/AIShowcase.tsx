import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Target, Shuffle } from "lucide-react";
import aiImage from "@/assets/ai-matching.jpg";

export const AIShowcase = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={aiImage} 
                alt="AI Content Matching" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -top-6 -right-6 p-4 bg-card/90 backdrop-blur-sm border-primary/20 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">98% Match</div>
                  <div className="text-xs text-muted-foreground">For your taste</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-6 -left-6 p-4 bg-card/90 backdrop-blur-sm border-secondary/20 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Sparkles className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">5 New Picks</div>
                  <div className="text-xs text-muted-foreground">Just for you</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI Technology</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Content That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Understands You</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Our AI doesn't just recommend content—it learns what moves you. Every like, 
              skip, and share helps us understand your unique taste and surface hidden gems 
              you'll love.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-primary/20 rounded-lg h-fit">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalized Discovery</h4>
                  <p className="text-sm text-muted-foreground">
                    Get recommendations tailored to your mood, interests, and viewing history
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-secondary/20 rounded-lg h-fit">
                  <Shuffle className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Mixing</h4>
                  <p className="text-sm text-muted-foreground">
                    Blend familiar favorites with exciting new discoveries from diverse creators
                  </p>
                </div>
              </div>
            </div>

            <Button variant="glow" size="lg" className="mt-4">
              <Sparkles className="h-5 w-5" />
              Experience AI Matching
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
