import "../styles.css";
import { NextUIProvider } from "@nextui-org/react";
import 'react-toastify/dist/ReactToastify.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}
