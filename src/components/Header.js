import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
import { useRouter } from "next/router";
import Image from "next/image";

export function Header({ navigation, settings }) {
  
const [fade, setFade] = useState("opacity-0");

const router = useRouter();
const query = router.query;
let paths = [];
const nav = navigation.data.links;
navigation.data.links.forEach((e, i) => {
  paths.push(e.link.url);
}); 

let headerProps = {};

if(router.asPath === "/") {
  headerProps = {
    navigation: navigation,
    settings: settings,
    bgColor: "white",
    textColor: "black",
    position: "absolute",
  };
} else{
  headerProps = {
    navigation: navigation,
    settings: settings,
    bgColor: "black",
    textColor: "white",
    position: "relative",
  };
}

setTimeout(() => {
  setFade("opacity-1");
}, 300);


  return (
    <>
      <header
        className={`${
          router?.asPath === "/" && "absolute"
        } max-md:hidden z-[10] top-0 left-0 right-0 ${fade}`}
      >
        <div className="relative py-[2.5vw] px-[4vw] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className={`tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase ${
              router?.asPath === "/" ? "text-white" : "text-black"
            }`}
          >
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
          <nav>
            <ul className="flex flex-wrap items-center">
              {navigation.data?.links.map((item, index) => (
                <li
                  key={prismic.asText(item.label)}
                  className={`tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light ${
                    router?.asPath === "/" ? "text-white" : "text-black"
                  }`}
                >
                  <PrismicNextLink
                    field={item.link}
                    className={`${
                      router?.asPath === paths[index] && "underline"
                    }  underline-offset-[10px]`}
                  >
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
              {navigation.data?.icons.map((item, index) => (
                <li
                  key={index + 15}
                  className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-white"
                >
                  <PrismicNextLink
                    field={item.link}
                    className="w-[22px] h-[22px]"
                  >
                    <Image
                      src={item.icon.url}
                      width={item.icon.dimensions.width}
                      height={item.icon.dimensions.height}
                      alt="SoMe icon"
                      className={`w-[22px] h-[22px] ${
                        router?.asPath === "/" ? "invert" : "invert-0"
                      }`}
                    />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MobileHeader {...headerProps} />
    </>
  );
}
