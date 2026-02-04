import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Problem:* ${formData.problem}`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="appointment"
      className="py-20 bg-gradient-to-br from-background to-[#EEF3F1]"
    >
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:flex-col lg:text-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.5rem] text-primary-dark mb-4">
              Book Your Appointment
            </h2>
            <p className="text-[1.1rem] text-[#555] mb-10">
              Start your journey towards holistic health today.
            </p>
            <div className="flex flex-col gap-5">
              <div className="text-left lg:text-center">
                <strong className="text-primary block mb-[5px] text-[1.1rem]">
                  Clinic Address:
                </strong>
                <p className="m-0 text-primary-dark">{contactInfo.address}</p>
              </div>
              <div className="text-left lg:text-center">
                <strong className="text-primary block mb-[5px] text-[1.1rem]">
                  Phone:
                </strong>
                <p className="m-0 text-primary-dark">+91 {contactInfo.phone}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-[500px] bg-white p-10 rounded-3xl shadow-xl lg:w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h3 className="mb-6 text-primary-dark text-center">
                Get in Touch
              </h3>
              <div className="mb-5 flex flex-col items-start lg:items-center w-full">
                <label className="block mb-2 font-medium text-[#444] text-[0.9rem]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full p-3 border border-[#ddd] rounded-lg font-inherit text-base transition-colors duration-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-5 flex flex-col items-start lg:items-center w-full">
                <label className="block mb-2 font-medium text-[#444] text-[0.9rem]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full p-3 border border-[#ddd] rounded-lg font-inherit text-base transition-colors duration-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-5 flex flex-col items-start lg:items-center w-full">
                <label className="block mb-2 font-medium text-[#444] text-[0.9rem]">
                  Health Issue
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Briefly describe your health concern"
                  rows="4"
                  required
                  className="w-full p-3 border border-[#ddd] rounded-lg font-inherit text-base transition-colors duration-300 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-[10px] hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp className="text-[1.2rem]" /> Book via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
