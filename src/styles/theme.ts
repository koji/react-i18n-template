export const theme = {
  colors: {
    primary: '#646cff',
    secondary: '#535bf2',
    background: '#242424',
    text: '#ffffff',
    textLight: '#888888'
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem'
  }
} as const;

export type Theme = typeof theme;