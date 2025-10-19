import { Button } from "@/components/ui/button";
import { Smartphone, Download, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Coming Soon to iOS & Android</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Discover Your Next{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Favorite Content?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of viewers exploring stories from underserved regions and genres. 
            100% free, AI-powered, and always entertaining.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Smartphone className="h-5 w-5" />
              Get Early Access
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Download className="h-5 w-5" />
              Download Press Kit
            </Button>
          </div>

          {/* App Store Badges Placeholder */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <div className="px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-muted-foreground">
              Available on iOS App Store
            </div>
            <div className="px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-muted-foreground">
              Available on Google Play
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
