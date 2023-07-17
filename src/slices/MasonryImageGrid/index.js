import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/**
 * @typedef {import("@prismicio/client").Content.MasonryImageGridSlice} MasonryImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MasonryImageGridSlice>} MasonryImageGridProps
 * @param {MasonryImageGridProps}
 */


const MasonryImageGrid = ({ slice }) => {
/* const imageRefs = useRef([]);
const [animation, setAnimation] = useState(null)

console.log(imageRefs)

 useEffect(() => {
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       const imgIndex = imageRefs.current.findIndex(
         (img) => img === entry.target
       );

       if (entry.isIntersecting) {
         setAnimation(imgIndex);
         imageRefs.current[imgIndex].classList.add("animation-class");
        }  else {
          imageRefs.current[imgIndex].classList.remove("animation-class");
        } 
      });
    });
    
    imageRefs.current.forEach((img, index) => {
      observer.observe(img);
    });
    
    // Cleanup
    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((img, index) => {
          observer.unobserve(img);
        });
      }
    };
  }, []); */
  
  
  console.log(animation)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-[4vw]"
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.2rem">
          {slice.items.map((item, index) => (
            <figure key={index + 14} /* ref={el => imageRefs.current[index] = el} */ className={` duration-300` }>
                
              <PrismicNextImage field={item.image} className="" alt={""} />
            </figure>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default MasonryImageGrid;
