
export interface ParallaxLayerProps {
  depth: number;
  children: React.ReactNode;
  className?: string;
}

export interface LoreMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}
