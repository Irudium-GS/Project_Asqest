export interface NavItem {
  title: string;
  href: string;
  dropdownItems?: NavItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}