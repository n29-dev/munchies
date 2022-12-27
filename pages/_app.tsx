import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ style: "normal", weight: ["400", "500", "600", "700", "800"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                        --font-poppins: ${poppins.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </>
    );
}