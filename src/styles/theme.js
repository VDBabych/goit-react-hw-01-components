export const theme = Object.freeze({
  colors: {
    dark: ' #000000',
    light: ' #ffffff',
    darkGrey: ' #787878',
    lightGrey: ' #e0e0e0',
    accentDark: ' #141f61',
    accentLight: ' #94e1ff',
    random: function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
  },
  space: [0, ' 2px', ' 4px', ' 8px', ' 16px', ' 32px', ' 64px', ' 128px'],
  fonts: {
    main: 'Courier New, monospace',
    accent: 'Verdana, sans-serif',
  },
  fontSizes: {
    xs: ' 12px',
    s: ' 14px',
    m: ' 16px',
    l: ' 24px',
    xl: ' 32px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  radii: {
    round: ' 50%',
    eazy: ' 4px',
    normal: ' 8px',
    none: ' none',
  },
  shadows: {
    s: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    m: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    l: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
  },
  media: {
    mob: value => `
        @media screen and (min-width: 480px) {
            ${value}
        }
        `,
    tab: value => `
        @media screen and (min-width: 768px) {
            ${value}
        }
        `,
    desk: value => `
        @media screen and (min-width: 1200px) {
            ${value}
        }
        `,
  },
  borders: {
    s: '1px solid',
    m: '2px solid',
    l: '4px solid',
  },
  transition: {
    main: '400ms cubic-bezier(.47,.13,.4,.92)',
  },
});
