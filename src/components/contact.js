import { useState } from "react";
export default function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-white">
      <div id="Contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="mt-4 text-xl text-center text-gray-600 font-semibold pb-2">
          Let's connect and explore
        </p>
      </div>
      {/*Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg  ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-5"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handlechange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-3"
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-5"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="------------@gmail.com"
              value={formData.email}
              onChange={handlechange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-3"
            ></input>
          </div>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-5"
            >
              Message:
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="message"
              rows="4"
              value={formData.message}
              onChange={handlechange}
              required
              className="mt-1 block w-full border border-gray-300 rounded p-3"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
