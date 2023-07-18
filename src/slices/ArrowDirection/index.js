import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ArrowDirectionSlice} ArrowDirectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArrowDirectionSlice>} ArrowDirectionProps
 * @param {ArrowDirectionProps}
 */
const ArrowDirection = ({ slice }) => {


const title = {
  heading2: ({ children }) => (
    <h2 className="font-serif max-md:text-nextPageMobile md:text-nextPage m-0 uppercase break-words">
      {children}
    </h2>
  ),
};


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <div className="flex justify-between py-[4vw] px-[3vw]">
          <PrismicNextLink
            field={slice.primary.left_pagelink}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-8 md:h-8 max-md:w-6 max-md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <PrismicRichText
              field={slice.primary.left_pagetitle}
              components={title}
            />
          </PrismicNextLink>
          <PrismicNextLink
            field={slice.primary.right_pagelink}
            className="flex items-center gap-4"
          >
            <PrismicRichText
              field={slice.primary.right_pagetitle}
              components={title}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-8 md:h-8 max-md:w-6 max-md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </PrismicNextLink>
        </div>
      )}
      {slice.variation === "leftArrow" && (
        <div className="flex justify-start py-[4vw] px-[3vw]">
          <PrismicNextLink
            field={slice.primary.page_link}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-8 md:h-8 max-md:w-6 max-md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <PrismicRichText
              field={slice.primary.left_page}
              components={title}
            />
          </PrismicNextLink>
        </div>
      )}
      {slice.variation === "rightArrow" && (
        <div className="flex justify-end py-[4vw] px-[3vw]">
          <PrismicNextLink
            field={slice.primary.page_link}
            className="flex items-center gap-4"
          >
            <PrismicRichText
              field={slice.primary.right_page}
              components={title}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-8 md:h-8 max-md:w-6 max-md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </PrismicNextLink>
        </div>
      )}
    </section>
  );
};

export default ArrowDirection;
