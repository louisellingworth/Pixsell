// Common type for section ref registration function
export interface SectionProps {
  registerSectionRef: (section: string) => (ref: HTMLDivElement | null) => void
}

// ComparisonTable types
export type ComparisonStatus = 'best' | 'neutral' | 'bad';

export interface ComparisonFeature {
  label: string;
  value: string;
  status: ComparisonStatus;
  detail: string;
}

export interface ComparisonOption {
  name: string;
  subtitle: string;
  icon: string;
  features: ComparisonFeature[];
  highlight: boolean;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
} 