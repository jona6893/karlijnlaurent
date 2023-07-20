import { PrismicRichText } from "@/components/PrismicRichText";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.FormSlice} FormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormSlice>} FormProps
 * @param {FormProps}
 */

const title = {
  heading2: ({ children }) => (
    <h2 className="md:text-form max-md:text-formMobile font-serif font-normal mb-8">
      {children}
    </h2>
  ),

  heading3: ({ children }) => (
    <h3 className="md:text-h3 max-md:text-h3md font-serif font-normal">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="md:text-nextPage text-md:nextPage font-poppins font-normal">
      {children}
    </h4>
  ),
};

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_HEROTOFU_ENDPOINT;


const Form = ({ slice }) => {

const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  const inputs = e.target.elements;
  const data = {};

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name) {
      data[inputs[i].name] = inputs[i].value;
    }
  }


  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Form response was not ok");
      }

      setSubmitted(true);
    })
    .catch((err) => {
      // Submit the form manually
      e.target.submit();
    });
};


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1400px] mx-auto py-[4vmax] md:px-[12vw] max-md:px-[4vw] font-poppins font-light"
    >
      {submitted ? (
        <div className="grid justify-center text-center">
          <PrismicRichText field={slice.primary.submit_thank_you_text} components={title} />
          <PrismicRichText field={slice.primary.submit_thank_you_text_2} components={title} />
        </div>
      ) : (
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          className="grid gap-6 max-w-4xl mx-auto"
        >
          <PrismicRichText field={slice.primary.title} components={title} />
          <span>Name (required)</span>
          <div className="mb-3 pt-0 flex gap-4">
            <label htmlFor="" className="grid w-full">
              <span className="mb-1">First Name</span>
              <input
                type="text"
                placeholder=""
                name="FirstName"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray-50 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                required
              />
            </label>
            <label htmlFor="" className="grid w-full">
              <span className="mb-1">Last Name</span>
              <input
                type="text"
                placeholder=""
                name="LastName"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray-50 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                required
              />
            </label>
          </div>
          <div className="mb-3 pt-0">
            <label htmlFor="" className="grid">
              <span className="mb-4">E-Mail (required)</span>
              <input
                type="email"
                placeholder=""
                name="Email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray-50 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                required
              />
            </label>
          </div>
          <div className="mb-3 pt-0">
            <label htmlFor="" className="grid">
              <span className="mb-4">Subject (required)</span>
              <input
                type="text"
                placeholder=""
                name="Subject"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray-50 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                required
              />
            </label>
          </div>
          <div className="mb-3 pt-0">
            <label htmlFor="" className="grid">
              <span className="mb-4">Message (required)</span>
              <textarea
                placeholder=""
                name="Message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray-50 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                required
              />
            </label>
          </div>
          <div className="mb-3 pt-0">
            <button
              className="duration-300 bg-black text-white border border-black hover:bg-white hover:text-black active:bg-blue-600 font-semibold uppercase text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              {slice.primary.submit_button}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Form;
