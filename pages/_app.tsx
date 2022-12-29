import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "@next/font/google";
import { store } from "../client/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ style: "normal", weight: ["400", "500", "600", "700", "800"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                        --font-poppins: ${poppins.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </Provider>
    );
}
