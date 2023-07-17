import { PrismicNextImage } from "@prismicio/next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/**
 * @typedef {import("@prismicio/client").Content.MasonryImageGridSlice} MasonryImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MasonryImageGridSlice>} MasonryImageGridProps
 * @param {MasonryImageGridProps}
 */
const MasonryImageGrid = ({ slice }) => {

  console.log(slice)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-[4vw]"
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {slice.items.map((item) => (
            <>
              <PrismicNextImage field={item.image} className="p-2" />
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default MasonryImageGrid;
