import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, TrendingUp } from "lucide-react";
import contentImage from "@/assets/content-grid.jpg";

const genres = [
  { name: "Indie Films", count: "2.3K", color: "bg-primary/20 text-primary" },
  { name: "Global Music", count: "1.8K", color: "bg-secondary/20 text-secondary" },
  { name: "Comedy Shorts", count: "3.1K", color: "bg-accent/20 text-accent" },
  { name: "Cultural Stories", count: "1.5K", color: "bg-primary/20 text-primary" },
  { name: "Street Sports", count: "890", color: "bg-secondary/20 text-secondary" },
  { name: "Local Talent", count: "2.7K", color: "bg-accent/20 text-accent" },
];

const mockContent = [
  { title: "Urban Beats", duration: "2:45", views: "45K", trending: true },
  { title: "Street Art Stories", duration: "3:20", views: "32K", trending: false },
  { title: "Local Legends", duration: "4:15", views: "28K", trending: true },
  { title: "Global Grooves", duration: "2:30", views: "51K", trending: false },
];

export const ContentGrid = () => {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Endless Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local legends to global phenomena, discover stories that mainstream platforms miss
          </p>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {genres.map((genre, index) => (
            <Badge 
              key={index}
              className={`${genre.color} px-4 py-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity`}
            >
              {genre.name} <span className="ml-2 opacity-70">{genre.count}</span>
            </Badge>
          ))}
        </div>

        {/* Featured Content Preview */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-[var(--shadow-card)]">
          <img 
            src={contentImage} 
            alt="Content Preview" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 backdrop-blur-sm rounded-full p-6 cursor-pointer hover:scale-110 transition-transform shadow-[var(--shadow-glow)]">
              <Play className="h-12 w-12 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockContent.map((content, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/80">
                  <Play className="h-10 w-10 text-primary" fill="currentColor" />
                </div>
                {content.trending && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent/90 text-accent-foreground">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {content.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {content.duration}
                  </div>
                  <div>{content.views} views</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
