import { useState } from "react";
import swal from "sweetalert";
import emailjs from "emailjs-com";

const Contact_From = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
    serviceCategory: "",
    service: "",
  });

  const services = {
    "Web App Development": [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
    ],
    "Website Development": [
      "Static Website",
      "Dynamic Website",
      "E-commerce Website",
    ],
    "Mobile Application Development": [
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
    ],
    "Graphic Designing": ["Logo Design", "Brochure Design", "Banner Design"],
    "Digital Marketing": ["SEO", "Social Media Marketing", "Content Marketing"],
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "serviceID_122114&&1214",
        "template_h5ojyej",
        e.target,
        "WZVDf5Ns83ubY5mrx"
      )
      .then(
        (result) => {
          console.log(result);
          swal(
            "Success",
            "Thank you for your message! We'll get in touch soon.",
            "success"
          );
          setInput({
            name: "",
            email: "",
            phone: "",
            companyName: "",
            message: "",
            serviceCategory: "",
            service: "",
          });
        },
        (error) => {
          console.log(error.text);
          swal("Error", "Something went wrong. Please try again.", "error");
        }
      );
    e.target.reset();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = [];
    if (input.name === "") {
      missingFields.push("Name");
    }
    if (input.email === "") {
      missingFields.push("Email");
    }
    if (input.phone === "") {
      missingFields.push("Phone number");
    }
    if (input.message === "") {
      missingFields.push("Message");
    }
    if (input.serviceCategory === "") {
      missingFields.push("Service category");
    }
    if (input.service === "") {
      missingFields.push("Service");
    }

    if (missingFields.length === 1) {
      swal(
        "Oops",
        `Please fill in the following field: ${missingFields[0]}`,
        "error"
      );
    } else if (missingFields.length > 1) {
      const missingFieldsText = missingFields.join(", ");
      swal(
        "Oops",
        `Please fill in the following fields: ${missingFieldsText}`,
        "error"
      );
    } else {
      sendEmail(e);
    }
  };

  return (
    <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-name"
              className="text-lg font-bold leading-[1.6]"
            >
              Enter your name <b className="text-colorOrangyRed">*</b>
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInput}
              id="contact-name"
              placeholder="Adam Smith"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
              required
            />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-email"
              className="text-lg font-bold leading-[1.6]"
            >
              Email address <b className="text-colorOrangyRed">*</b>
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInput}
              id="contact-email"
              placeholder="example@gmail.com"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-phone"
              className="text-lg font-bold leading-[1.6]"
            >
              Phone number <b className="text-colorOrangyRed">*</b>
            </label>
            <input
              type="tel"
              name="phone"
              value={input.phone}
              onChange={handleInput}
              id="contact-phone"
              placeholder="+880-1345-922210"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
              required
            />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-company"
              className="text-lg font-bold leading-[1.6]"
            >
              Company
            </label>
            <input
              type="text"
              name="companyName"
              value={input.companyName}
              onChange={handleInput}
              id="contact-company"
              placeholder="EX Facebook"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="service-category"
              className="text-lg font-bold leading-[1.6]"
            >
              Service Category <b className="text-colorOrangyRed">*</b>
            </label>
            <select
              name="serviceCategory"
              value={input.serviceCategory}
              onChange={handleInput}
              id="service-category"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
            >
              <option value="">Select a category</option>
              {Object.keys(services).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="service"
              className="text-lg font-bold leading-[1.6]"
            >
              Service <b className="text-colorOrangyRed">*</b>
            </label>
            <select
              name="service"
              value={input.service}
              onChange={handleInput}
              id="service"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
            >
              <option value="">Select a service</option>
              {input.serviceCategory &&
                services[input.serviceCategory].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-message"
              className="text-lg font-bold leading-[1.6]"
            >
              Message <b className="text-colorOrangyRed">*</b>
            </label>
            <textarea
              name="message"
              value={input.message}
              onChange={handleInput}
              id="contact-message"
              className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
              placeholder="Write your message here..."
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
          >
            Send your message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact_From;
