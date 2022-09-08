import '../styles/app.module.scss';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../styles/globals.css';

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: '#121212',
            primaryLight: '#fff',
            primaryLightHover: '#fff',
            primaryLightActive: '#fff',
            primaryLightContrast: '#fff',
            primary: '#ffffff',
            secondary: '#2a333e',
            primaryBorder: '#fff',
            primaryBorderHover: '#fff',
            primarySolidHover: '#ccc',
            primarySolidContrast: '$white',
            primaryShadow: '$blue500',
            link: '#ccc',
            linkHover: '#fff',
            text: '#fff',
            myDarkColor: '#ff4ecd',
            grey: '#2a333e'
        },
        space: {},
        fonts: {}
    }
});

const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            background: '#dddfec',
            primary: '$black',
            primaryHover: '#222',
            primaryLight: '#000',
            primaryLightHover: '#000000',
            primaryLightActive: '#000000',
            primaryLightContrast: '#000000',
            secondary: '#000',
            primaryBorder: '#000000',
            primaryBorderHover: '#000000',
            primarySolidHover: '#151515',
            primarySolidContrast: '$white',
            primaryShadow: '#d1d1d1',
            link: '#111111',
            linkHover: '#000000',
            text: '#000000',
            myDarkColor: '#ff4ecd',
            grey: '#2a333e',
            accents2: '#000'
        }
    }
});

function MyApp({ Component, pageProps }) {
    return (
        <NextThemesProvider
            defaultTheme={darkTheme}
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
