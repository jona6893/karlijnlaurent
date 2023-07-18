import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  const components = {
    heading2: ({ children }) => (
      <h2 className="max-md:text-h3 md:text-h3md mb-[6%] font-normal leading-pageTitle font-serif">
        {children}
      </h2>
    ),
    paragraph: ({ children }) => (
      <p className="max-md:text-pMobile md:text-p mb-[1rem]">{children}</p>
    ),
  };


  return (
    <>
      {slice.variation === "imageLeft" ? (
        <section className="bg-white py-[6.6vmax] px-[4vw] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 max-md:w-[70%] mx-auto">
            <div>
              {prismic.isFilled.image(image) && (
                <div className="bg-gray-100">
                  <PrismicNextImage
                    field={image}
                    sizes="100vw"
                    className="w-full"
                  />
                </div>
              )}
            </div>
            <div>
              <PrismicRichText
                field={slice.primary.text}
                components={components}
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-[6.6vmax] px-[4vw] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <PrismicRichText
                field={slice.primary.text}
                components={components}
              />
            </div>
            <div>
              {prismic.isFilled.image(image) && (
                <div className="bg-gray-100">
                  <PrismicNextImage
                    field={image}
                    sizes="100vw"
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TextWithImage;
