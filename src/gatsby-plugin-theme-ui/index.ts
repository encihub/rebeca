import { merge } from 'theme-ui';
import tailwind from '@theme-ui/preset-tailwind';

const config = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: tailwind.colors.pink[7],
    secondary: tailwind.colors.indigo[6],
    modes: {
      dark: {
        text: tailwind.colors.black,
        primary: tailwind.colors.pink[6],
        background: tailwind.colors.white,
        textMuted: tailwind.colors.gray[7],
      },
    },
  },
  layout: {
    footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    header: {
      px: [3, 4],
      py: [2, 3],
      fontSize: 22,
      display: `flex`,
      alignItems: `center`,
      flexWrap: `wrap`,
    },
    main: {
      position: `relative`,
    },
    container: {
      maxWidth: `5xl`,
      padding: 22,
    },
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      WebkitTextSizeAdjust: `100%`,
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `2em`,
      },
      a: {
        transition: `all 0.3s ease-in-out`,
      },
    },
    p: {
      fontSize: 22,
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
    },
    h1: {
      fontSize: 52,
      mt: 2,
    },
    h2: {
      fontSize: 26,
      mt: 2,
    },
    h3: {
      fontSize: 22,
      mt: 3,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 22,
    },
    h6: {
      fontSize: 22,
      mb: 2,
    },
    li: {
      fontSize: 22,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
});

export default config;
