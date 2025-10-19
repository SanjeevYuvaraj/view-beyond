import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload as UploadIcon, Video, LogOut } from "lucide-react";
import type { User } from "@supabase/supabase-js";

const Upload = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [region, setRegion] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate("/auth");
      }
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoFile) {
      toast.error("Please select a video file");
      return;
    }

    if (!user) {
      toast.error("You must be logged in to upload");
      return;
    }

    setUploading(true);

    try {
      // Upload video file to storage
      const fileExt = videoFile.name.split('.').pop();
      const filePath = `${user.id}/${crypto.randomUUID()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('movies')
        .upload(filePath, videoFile);

      if (uploadError) throw uploadError;

      // Create movie record in database
      const { error: dbError } = await supabase
        .from('movies')
        .insert({
          title,
          description,
          file_path: filePath,
          genre,
          region,
          user_id: user.id
        });

      if (dbError) throw dbError;

      toast.success("Video uploaded successfully!");
      
      // Reset form
      setTitle("");
      setDescription("");
      setGenre("");
      setRegion("");
      setVideoFile(null);
      
    } catch (error: any) {
      toast.error(error.message || "Failed to upload video");
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/30 py-12 px-4">
      <div className="container max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Upload Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Content</span>
            </h1>
            <p className="text-muted-foreground">Share your stories with the world</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Video File Upload */}
            <div className="space-y-2">
              <Label htmlFor="video">Video File</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <input
                  id="video"
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <label htmlFor="video" className="cursor-pointer">
                  {videoFile ? (
                    <div className="flex items-center justify-center gap-2">
                      <Video className="h-6 w-6 text-primary" />
                      <span className="font-medium">{videoFile.name}</span>
                    </div>
                  ) : (
                    <div>
                      <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="font-medium mb-1">Click to upload video</p>
                      <p className="text-sm text-muted-foreground">MP4, MOV, AVI up to 100MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter your video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell viewers about your content..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            {/* Genre and Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indie-films">Indie Films</SelectItem>
                    <SelectItem value="music">Global Music</SelectItem>
                    <SelectItem value="comedy">Comedy Shorts</SelectItem>
                    <SelectItem value="culture">Cultural Stories</SelectItem>
                    <SelectItem value="sports">Street Sports</SelectItem>
                    <SelectItem value="talent">Local Talent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Input
                  id="region"
                  placeholder="e.g., Southeast Asia"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full" 
              disabled={uploading || !videoFile}
            >
              {uploading ? "Uploading..." : "Upload Video"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Upload;
