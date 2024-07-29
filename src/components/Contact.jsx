import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "your-access-key-here");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="py-10 mx-auto w-full max-w-4xl shadow-md shadow-white border rounded-xl"
    >
      <form
        onSubmit={onSubmit}
        className="text-center text-white px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-2xl font-semibold">
          Contact <span className="text-[#00FF33]">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">FULL NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-2 rounded-xl bg-gray-600"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-2 rounded-xl bg-gray-600"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label className="mb-2 text-start">MESSAGE</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="p-2 rounded-xl bg-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-primary py-3 px-10 rounded-xl m-3 bg-[#00FF33] text-black hover:text-white hover:bg-transparent hover:scale-90 duration-200 ease-in-out"
        >
          Submit
        </button>
        <div className="text-gray-400 mt-3 p-2 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <a
            href="mailto:altafpathan9944@gmail.com"
            className="text-blue-500 flex gap-3 items-center"
          >
            <FiMail size={24} />
            <p>altafpathan9944@gmail.com</p>
          </a>
          <a
            href="https://wa.me/9326337850"
            className="text-green-500 flex gap-3 items-center"
          >
            <FaWhatsapp size={24} />
            <p>9326337850</p>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="text-blue-800 flex gap-3 items-center"
          >
            <FaLinkedin size={24} />
            <p>altafpathan9944</p>
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
