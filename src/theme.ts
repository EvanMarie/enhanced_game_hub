import { extendTheme, ThemeConfig } from "@chakra-ui/react"

/* info on Chakra Color Mode: https://chakra-ui.com/docs/styled-system/color-mode */

const config: ThemeConfig = {
    initialColorMode: "dark"
};

const theme = extendTheme({ config,
    // creating custom color palate with tools listed on Chakra site
colors: {
    gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111',

    }

} });

export default theme;