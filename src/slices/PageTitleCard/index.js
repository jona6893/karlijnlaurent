import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.PageTitleCardSlice} PageTitleCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageTitleCardSlice>} PageTitleCardProps
 * @param {PageTitleCardProps}
 */
const PageTitleCard = ({ slice }) => {


const components = {
  heading1: ({ children }) => (
    <h1 className="max-md:text-pageTitleMobile text-pageTitle leading-pageTitle font-serif text-center">
      {children}
    </h1>
  ),
};

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[3.3vmax]"
    >
      <div>
        <PrismicRichText
          field={slice.primary.page_title}
          components={components}
        />
      </div>
    </section>
  );
};

export default PageTitleCard;
