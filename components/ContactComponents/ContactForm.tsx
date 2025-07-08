"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast.success("Message sent successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-4 py-12 m-auto">
      <Toaster position="top-center" />
      
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center gap-5 text-right">
        <div className="text-5xl font-bold text-white">
          Fit<span className="text-red-600">Zone</span>
        </div>
        <h1 className="text-white text-4xl lg:text-8xl font-black">Contact</h1>
        <p className="w-80 text-white text-2xl font-black">Send us your questions.</p>
      </div>

      {/* Right Column - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-6 bg-neutral-900 rounded-2xl flex flex-col justify-center items-center gap-6"
      >
        <h2 className="text-white text-3xl lg:text-4xl font-black text-center">
          Get in touch and ask your questions
        </h2>

        {/* Name */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-white text-xl font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-14 px-4  border-2 border-white text-white rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-white text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-14 px-4 border-2 border-white text-white rounded-md"
            required
          />
        </div>

        {/* Message */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="message" className="text-white text-xl font-bold">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-white text-white rounded-md  resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-white text-black text-xl font-extrabold rounded-md hover:bg-red-600 hover:text-white transition-all"
        >
          Submit
        </button>

        {/* FAQ Link */}
        <Link href={"/plans/#faq"}>
            <p className="text-red-600/80 text-sm font-semibold underline cursor-pointer">
              See frequently asked questions
            </p>
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
