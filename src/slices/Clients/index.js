import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param {ClientsProps}
 */
const Clients = ({ slice }) => {

  const components = {
    heading3: ({ children }) => (
      <h2 className="max-md:text-headerTitleMobile md:text-h3md font-normal leading-pageTitle font-serif text-center py-[1.2vw] mb-[2rem]">
        {children}
      </h2>
    ),
    paragraph: ({ children }) => (
      <p className="max-md:text-pMobile md:text-p mb-[1rem]">{children}</p>
    ),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1400px] mx-auto py-[3.3vmax] grid"
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <div className="md:flex max-md:grid gap-6 flex-wrap items-center justify-around w-full">
        {slice.items.map((item) => (
          <>
            <PrismicNextImage field={item.client} className="max-w-xs h-fit px-[2rem]" />
          </>
        ))}
      </div>
    </section>
  );
};

export default Clients;
