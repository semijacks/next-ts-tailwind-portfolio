import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Container from '@/layouts/Container';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
