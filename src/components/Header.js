import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { useState } from "react";

export function Header({ navigation, settings }) {
  
const [fade, setFade] = useState("opacity-0");




setTimeout(() => {
  setFade("opacity-1");
}, 300);


  return (
    <header className={`z-[10] top-0 left-0 right-0 ${fade}`}>
      <div className="relative py-[2.5vw] px-[4vw] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase text-black"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-black"
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
}
