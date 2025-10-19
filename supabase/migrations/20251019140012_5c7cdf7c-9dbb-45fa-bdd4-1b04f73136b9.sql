-- Create storage bucket for movies
INSERT INTO storage.buckets (id, name, public)
VALUES ('movies', 'movies', true);

-- Create movies table
CREATE TABLE public.movies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  thumbnail_url TEXT,
  duration INTEGER, -- in seconds
  genre TEXT,
  region TEXT,
  views INTEGER DEFAULT 0,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

-- RLS Policies for movies table
CREATE POLICY "Anyone can view movies"
  ON public.movies
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can upload movies"
  ON public.movies
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own movies"
  ON public.movies
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own movies"
  ON public.movies
  FOR DELETE
  USING (auth.uid() = user_id);

-- Storage policies for movies bucket
CREATE POLICY "Anyone can view movie files"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'movies');

CREATE POLICY "Authenticated users can upload movie files"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'movies' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update their own movie files"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'movies' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete their own movie files"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'movies' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_movies_updated_at
  BEFORE UPDATE ON public.movies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();