import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import { useAutoAnimate } from "@formkit/auto-animate/react";


export default function App({ Component, pageProps }) {
   const [parent] = useAutoAnimate({ easing: "ease-in-out" });
  return (
    <>
    
      <div ref={parent}>
        <Component {...pageProps} />
      </div>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
