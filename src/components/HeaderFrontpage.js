import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ReactSVG } from "react-svg";
import { Bounded } from "./Bounded";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export function HeaderFrontpage({ navigation, settings }) {
const [fade, setFade] = useState("opacity-0");
const [toggleMenu, setToggleMenu] = useState(false)

setTimeout(() => {
  setFade("opacity-1");
}, 300);




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
            <ul className="flex flex-wrap items-center">
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
              {navigation.data?.icons.map((item,index) => (
                <li
                  key={index+14}
                  className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-white"
                >
                  <PrismicNextLink
                    field={item.link}
                    className="w-[22px] h-[22px]"
                  >
                    <ReactSVG
                      src={item.icon.url}
                      beforeInjection={(svg) => {
                        svg.classList.add("headerIcon");
                      }}
                      className="fill-white"
                    />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MobileHeader
        navigation={navigation}
        settings={settings}
        frontpage={true}
        bgColor={"white"}
        textColor={"black"}
        position={"absolute"}
      />
    </>
  );
}
