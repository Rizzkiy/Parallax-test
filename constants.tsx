
import { Character } from './types';

export const THEME_COLORS = {
  primary: '#22d3ee', // Cyan 400
  secondary: '#d946ef', // Fuchsia 500
  background: '#020617', // Slate 950
};

export const CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Kaelith Voidrunner',
    role: 'Cyber-Ronin',
    description: 'A master of light-speed blade arts surviving in the underbelly of Neo-Tokyo.',
    image: 'https://picsum.photos/seed/anime1/800/1200'
  },
  {
    id: '2',
    name: 'Seraphina Flux',
    role: 'Net-Caster',
    description: 'The premier data manipulator who sees the city as a living stream of code.',
    image: 'https://picsum.photos/seed/anime2/800/1200'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Characters', href: '#characters' },
  { name: 'Lore', href: '#lore' },
  { name: 'Contact', href: '#contact' }
];
