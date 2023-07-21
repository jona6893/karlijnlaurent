import { PrismicRichText } from "@/components/PrismicRichText";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
/**
 * @typedef {import("@prismicio/client").Content.PricesSlice} PricesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricesSlice>} PricesProps
 * @param {PricesProps}
 */
const Prices = ({ slice }) => {

const components = {
  heading2: ({ children }) => (
    <h2 className="max-md:text-h3 md:text-h3md mb-[3.3vw] font-normal leading-pageTitle font-serif text-center">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="md:text-h3prices max-md:text-h3pricesMobile mb-[0.5rem] font-normal leading-pageTitle font-serif text-center">
      {children}
    </h3>
  ),
  heading6: ({ children }) => (
    <span className="md:text-h3prices max-md:text-h3pricesMobile my-[1rem] font-normal leading-pageTitle font-serif text-center">
      {children}
    </span>
  ),
  paragraph: ({ children }) => (
    <p className="max-md:text-pMobile md:text-p py-2 break-words">{children}</p>
  ),
};
const title = {
  heading2: ({ children }) => (
    <h2 className="max-md:text-pricesTitleMobile md:text-pricesTitle mb-[3.3vw] font-normal leading-pageTitle font-serif text-center">
      {children}
    </h2>
  ),
};


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1400px] mx-auto py-[6.6vmax]"
    >
      <PrismicRichText field={slice.primary.title} components={title} />

      <Tabs className={"grid gap-4 justify-items-center max-md:px-[1rem]"}>
        <TabList
          className={
            "border-0 mb-[2rem] text-large font-poppins text-center flex flex-wrap items-center"
          }
        >
          {slice.items.map((item, index) => (
            
              <Tab key={index * 20}>
                <PrismicRichText
                  field={item.tabtitle}
                  components={components}
                />
              </Tab>
            
          ))}
        </TabList>

        {slice.items.map((item, index) => (
          
            <TabPanel key={index * 21}>
              {/* <PrismicRichText field={item.tabtitle} components={components} /> */}
              <div className="grid justify-items-center text-center">
                <PrismicRichText field={item.text} components={components} />
              </div>
            </TabPanel>
          
        ))}
      </Tabs>
    </section>
  );
};

export default Prices;
