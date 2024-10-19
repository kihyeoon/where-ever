export interface NavItem {
  title: string;
  href?: string;
  label?: string;
  disabled?: boolean;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
