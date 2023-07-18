import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";


/**
 * @typedef {import("@prismicio/client").Content.FrontpageSlice} FrontpageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FrontpageSlice>} FrontpageProps
 * @param {FrontpageProps}
 */
const Frontpage = ({ slice }) => {
const [fade, setFade] = useState("opacity-0")

  setTimeout(() => {
    setFade("opacity-1")
  }, 300);


const title = {
  paragraph: ({ children }) => <h1 className="font-mono">{children}</h1>,
};


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      className="bg-cover bg-frontpageBG h-screen"
      
    >
      <div className="h-full bg-black/[0.15] flex items-center justify-center px-[4vw] pb-[4vw] pt-[8%]">
        <div
          className={`flex flex-wrap w-full justify-center p-[5vw] duration-300 ${fade}`}
        >
          {slice.items.map((item, index) => {
            return (
              <PrismicNextLink
                field={item.link}
                key={index + 34}
                className="max-md:text-h1md md:text-h1 uppercase text-white text-center py-6 mx-6 font-serif"
              >
                <PrismicRichText field={item.title} components={title} />
              </PrismicNextLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
