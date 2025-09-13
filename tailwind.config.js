/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00BFFF',
          purple: '#8A2BE2', 
          green: '#00FF41',
          pink: '#FF1493',
          blue: '#0080FF'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float linear infinite'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(0, 191, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(138, 43, 226, 0.5), 0 0 40px rgba(138, 43, 226, 0.3)',
        'neon-green': '0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3)'
      }
    },
  },
  plugins: [],
};