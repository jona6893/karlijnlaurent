import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export function HeaderFrontpage({ navigation, settings }) {
const [fade, setFade] = useState("opacity-0");
const [toggleMenu, setToggleMenu] = useState(false)

setTimeout(() => {
  setFade("opacity-1");
}, 300);

/* const MobileHeader = () => {
  return (
    <header
      className={`md:hidden absolute z-[10] top-0 left-0 right-0 ${fade}`}
    >
      <div className="relative p-[6vw] flex items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase text-white"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`animationSetup h-[11px] w-[35px] flex flex-col relative ${
            toggleMenu === true && "mobileMenuIcon"
          }`}
        >
          <div
            className={`duration-300  ${
              toggleMenu === true ? "rotate-45" : ""
            } w-full h-[1px] rotate-0 bg-black absolute top-full`}
          />

          <div className="w-full h-[1px] bg-black rotate-[0deg] absolute top-0" />
        </button>

         <nav>
            <ul className="flex flex-wrap">
              {navigation.data?.links.map((item) => (
                <li
                  key={prismic.asText(item.label)}
                  className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-white"
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav> 
      </div>
    </header>
  );
} */



  return (
    <>
      <header
        className={`max-md:hidden absolute z-[10] top-0 left-0 right-0 ${fade}`}
      >
        <div className="relative py-[2.5vw] px-[4vw] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className="tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase text-white"
          >
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
          <nav>
            <ul className="flex flex-wrap">
              {navigation.data?.links.map((item) => (
                <li
                  key={prismic.asText(item.label)}
                  className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-white"
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MobileHeader navigation={navigation} settings={settings} bgColor={"white"} textColor={"black"} />
    </>
  );
}
