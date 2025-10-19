import { Card } from "@/components/ui/card";
import { Brain, Globe, Zap, Heart, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Smart algorithms learn your preferences and surface content you'll love",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Global Stories",
    description: "Discover voices from underserved regions and underrepresented genres",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized streaming for smooth playback even on slower connections",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Curated Quality",
    description: "Every piece of content is hand-picked by our team of culture enthusiasts",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Fresh Content Daily",
    description: "New videos added every day from indie creators and licensed partners",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Ad-Supported & Free",
    description: "Enjoy unlimited streaming at no cost with minimal, respectful ads",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StreamMatch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streaming platform built for discovery, diversity, and delight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-background ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
