interface Navigate {
  title: string;
  to: string;
}

export const NAVIGATE: Navigate[] = [
  { title: 'Home', to: '/' },
  { title: 'Services', to: '/services' },
  { title: 'Products', to: '/products' },
];
