export interface NavItemData {
  text: string;
  route: string;
}

export const navItemsData: NavItemData[] = [
  { text: 'Home', route: '' },
  { text: 'About', route: 'about' },
  { text: 'Blog', route: 'blog' },
  { text: 'Portfolio', route: 'portfolio' },
];
