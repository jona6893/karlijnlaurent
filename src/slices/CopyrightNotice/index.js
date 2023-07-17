import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.CopyrightNoticeSlice} CopyrightNoticeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CopyrightNoticeSlice>} CopyrightNoticeProps
 * @param {CopyrightNoticeProps}
 */
const CopyrightNotice = ({ slice }) => {

  const text = {
    paragraph: ({ children }) => (
      <p className="font-poppins font-light max-md:text-copyMobile md:text-copy break-words px-4 text-center">
        {children}
      </p>
    ),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex justify-center py-copy mb-4">
        <PrismicRichText field={slice.primary.copyright} components={text} />
      </div>
    </section>
  );
};

export default CopyrightNotice;
