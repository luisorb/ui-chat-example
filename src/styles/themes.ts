export type ThemeVariables = {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--text-primary': string;
  '--text-secondary': string;
  '--border-color': string;
  '--primary-color': string;
  '--primary-hover': string;
};

export type ThemeSet = {
  light: ThemeVariables;
  dark: ThemeVariables;
};

export const defaultTheme: ThemeSet = {
  light: {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f3f4f6',
    '--text-primary': '#111827',
    '--text-secondary': '#6b7280',
    '--border-color': '#e5e7eb',
    '--primary-color': '#3b82f6',
    '--primary-hover': '#2563eb'
  },
  dark: {
    '--bg-primary': '#1f2937',
    '--bg-secondary': '#111827',
    '--text-primary': '#f9fafb',
    '--text-secondary': '#d1d5db',
    '--border-color': '#374151',
    '--primary-color': '#3b82f6',
    '--primary-hover': '#2563eb'
  }
};

export const modernTheme: ThemeSet = {
  light: {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f5f3ff',
    '--text-primary': '#1e1b4b',
    '--text-secondary': '#6b7280',
    '--border-color': '#e9d5ff',
    '--primary-color': '#9333ea',
    '--primary-hover': '#7e22ce'
  },
  dark: {
    '--bg-primary': '#1e1b4b',
    '--bg-secondary': '#0f172a',
    '--text-primary': '#f5f3ff',
    '--text-secondary': '#c7d2fe',
    '--border-color': '#4c1d95',
    '--primary-color': '#9333ea',
    '--primary-hover': '#7e22ce'
  }
};

export const natureTheme: ThemeSet = {
  light: {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f0fdf4',
    '--text-primary': '#052e16',
    '--text-secondary': '#6b7280',
    '--border-color': '#bbf7d0',
    '--primary-color': '#16a34a',
    '--primary-hover': '#15803d'
  },
  dark: {
    '--bg-primary': '#052e16',
    '--bg-secondary': '#022c22',
    '--text-primary': '#f0fdf4',
    '--text-secondary': '#bbf7d0',
    '--border-color': '#166534',
    '--primary-color': '#16a34a',
    '--primary-hover': '#15803d'
  }
};