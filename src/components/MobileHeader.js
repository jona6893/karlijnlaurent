import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function MobileHeader({ navigation, settings, bgColor, textColor }) {
  const [fade, setFade] = useState("opacity-0");
  const [toggleMenu, setToggleMenu] = useState(false);
const [parent] = useAutoAnimate({ duration: 200 });

  setTimeout(() => {
    setFade("opacity-1");
  }, 300);

  return (
    <header
      ref={parent}
      className={`md:hidden absolute z-[10] top-0 left-0 right-0 ${fade}`}
    >
      <div className="relative p-[6vw] flex items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className={`z-[2] duration-300 tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase text-${
            toggleMenu === true ? textColor : bgColor
          }`}
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`z-[2] duration-100  w-[35px] flex flex-col relative ${
            toggleMenu === true ? "h-[0px]" : "h-[11px]"
          }`}
        >
          <div
            className={`duration-100  ${
              toggleMenu === true ? "rotate-45" : "rotate-0"
            } w-full h-[1px]  bg-${
              toggleMenu === true ? textColor : bgColor
            } absolute top-full`}
          />

          <div
            className={`duration-100  ${
              toggleMenu === true ? "rotate-[-45deg]" : "rotate-0"
            } w-full h-[1px] bg-${
              toggleMenu === true ? textColor : bgColor
            }  absolute top-0`}
          />
        </button>
        <div ref={parent} className={` absolute inset-0`}>
          {toggleMenu === true && (
            <nav
              className={` absolute inset-0 w-screen h-screen bg-${bgColor}`}
            >
              <ul className="flex flex-wrap">
                {navigation.data?.links.map((item) => (
                  <li
                    key={prismic.asText(item.label)}
                    className={`tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-${textColor}`}
                  >
                    <PrismicNextLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
