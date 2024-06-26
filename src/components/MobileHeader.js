import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

function MobileHeader({ navigation, settings, frontpage, bgColor, textColor, position }) {
  const [fade, setFade] = useState("opacity-0");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [parent] = useAutoAnimate({ duration: 100 });
    
 const router = useRouter();
  const query = router.query;

  let colors = {}

  if(frontpage === true) {
    colors = { text: 'text-black', bg: 'bg-white'};
  } else{
    colors = { text: 'text-white', bg: 'bg-black' };
  }


 let paths = []
 const nav = navigation.data.links;
  navigation.data.links.forEach((e,i) =>{
   paths.push(e.link.url);
 }) 


  setTimeout(() => {
    setFade("opacity-1");
  }, 300);

   useEffect(() => {
     if (toggleMenu) {
       document.body.classList.add("disable-scroll");
     } else {
       document.body.classList.remove("disable-scroll");
     }
   }, [toggleMenu]);

  return (
    <header
      ref={parent}
      className={`md:hidden ${position} z-[10] top-0 left-0 right-0 ${fade}`}
    >
      <div className="relative p-[6vw] flex items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className={`z-[2] duration-300 tracking-normal max-md:text-headerTitleMobile md:text-headerTitle font-serif font-normal leading-[2.8rem] uppercase text-${
            toggleMenu === true ? textColor : bgColor
          }`}
          onClick={() => setToggleMenu(false)}
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`z-[2] duration-100  w-[35px] flex flex-col relative ${
            toggleMenu === true ? "h-[35px]" : "h-[35px]"
          }`}
        >
          <div
            className={`duration-100 absolute top-[10px] ${
              toggleMenu === true ? "rotate-45 top-[17.5px]" : "rotate-0"
            } w-full h-[1px]  bg-${
              toggleMenu === true ? textColor : bgColor
            } absolute `}
          />

          <div
            className={`duration-100 absolute bottom-[10px] ${
              toggleMenu === true ? "rotate-[-45deg] top-[17.5px]" : "rotate-0"
            } w-full h-[1px] bg-${toggleMenu === true ? textColor : bgColor}  `}
          />
        </button>

        <div ref={parent} className={` absolute inset-0`}>
          <AnimatePresence>
            {toggleMenu === true && (
              <motion.nav
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: toggleMenu ? 1 : 0,
                  y: toggleMenu ? 0 : 0,
                }}
                transition={{ duration: 0.1 }}
                style={{ visibility: toggleMenu ? "visible" : "hidden" }}
                className={`grid justify-items-center items-center inset-0 w-screen h-screen bg-${bgColor}`}
              >
                <motion.ul
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 200 }}
                  transition={{ duration: 0.2 }}
                  id="MobileText"
                  className={`flex flex-col h-full relative items-center`}
                >
                  <div
                    className={`flex flex-col h-full items-center justify-center`}
                  >
                    {navigation.data?.links.map((item, index) => (
                      <li
                        key={prismic.asText(item.label)}
                        className={`tracking-normal text-slate-800 font-poppins font-light text-${textColor} text-mobileMenuOptions text-center my-[3vw] mx-[6vw]`}
                      >
                        <PrismicNextLink
                          field={item.link}
                          onClick={() => setToggleMenu(!toggleMenu)}
                          className={`${
                            router?.asPath === paths[index] && "underline"
                          } decoration-2 underline-offset-[10px] decoration-${textColor}`}
                        >
                          <PrismicText field={item.label} />
                        </PrismicNextLink>
                      </li>
                    ))}
                  </div>
                  <div className="mb-[6vw] mx-[20px] flex justify-center gap-2 absolute bottom-[15%]">
                    {navigation.data?.icons.map((item, index) => (
                      <li
                        key={index + 12}
                        className="tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-white"
                      >
                        <PrismicNextLink
                          field={item.link}
                          className="w-[25px] h-[25px]"
                        >
                          <Image
                            src={item.icon.url}
                            width={item.icon.dimensions.width}
                            height={item.icon.dimensions.height}
                            alt="SoMe icon"
                            className={`w-[25px] h-[25px] ${
                              router?.asPath === "/" ? "invert-0" : "invert"
                            }`}
                          />
                        </PrismicNextLink>
                      </li>
                    ))}
                  </div>
                </motion.ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;



{/* <div ref={parent} className={` absolute inset-0`}>
  {toggleMenu === true && (
    <nav
      className={`grid justify-items-center items-center inset-0 w-screen h-screen bg-${bgColor}`}
    >
      <ul id="MobileText" className={`flex flex-col`}>
        {navigation.data?.links.map((item) => (
          <li
            key={prismic.asText(item.label)}
            className={`tracking-normal text-slate-800 ml-[1.3vw] font-poppins font-light text-${textColor} text-mobileMenuOptions text-center my-[3vw] mx-[5vw]`}
          >
            <PrismicNextLink field={item.link} className="">
              <PrismicText field={item.label} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  )}
</div>; */}