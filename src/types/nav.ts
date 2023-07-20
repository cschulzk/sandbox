export interface NavLink {
  // The display name of the screen
  name: string;
  // The url for the link
  path: string;
};

export interface NavGroup {
  name: string;
  links: NavLink[];
};