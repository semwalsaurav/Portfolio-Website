import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#066565] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/31bd9ab3-0a6e-4a3d-81c9-eca20ad8b9fd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8  md:mt-0 mt-[30%]">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or shoot me an email{" "}
            <a href="mailto:sauravsemwal8171@gmail.com">
              <span className="text-pink-400">sauravsemwal8171@gmail.com</span>
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-3"
          type="number"
          placeholder="Contact Number"
          name="number"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
