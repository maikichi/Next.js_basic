import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DotGothic16 } from "next/font/google";

const Dot_gothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Dot_gothic16.className}>
      <Component {...pageProps} />
    </main>
  );
}
