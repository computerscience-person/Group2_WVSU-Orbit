import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { postConcerns } from "../api/api";

const ContactsUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!formData.email.trim()) {
      setErrorMessage("Email is required.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Valid email is required.");
      return;
    }

    if (!formData.email.includes(".com")) {
      setErrorMessage("Valid email is required.");
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage("Subject is required.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Message is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const successMsg = await postConcerns(
        formData.name.trim(),
        formData.email.trim(),
        formData.subject.trim(),
        formData.message.trim()
      );
      setSuccessMessage(successMsg);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(
        "An error occurred while sending your message. Please try again later."
      );
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-sunshine h-full flex flex-col min-h-screen">
      <Nav />
      <div className="px-[8rem] text-center flex flex-col justify-center items-center space-y-4 my-16 sm:my-24 mx-4 sm:mx-8">
        <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
          CONCERNS?
        </h1>
        <p className="font-content text-base sm:text-lg md:text-xl">
          If you have any questions, issues, or feedback about WVSU Orbit,
          please fill out the form below, and we’ll resolve your concerns as
          soon as possible.
        </p>
      </div>

      <div className="bg-white flex justify-center w-full top-0 rounded-t-[20%] sm:rounded-t-[30%] lg:rounded-t-[400px]">
        <div className="bg-sunshine w-full sm:w-auto py-6 px-6 sm:px-8 h-auto justify-start rounded-[50px] space-y-4 sm:space-y-6 my-16 sm:my-36 sm:shadow-md md:shadow-lg">
          <div className="justify-center">
            <label htmlFor="name" className="font-leader text-sm sm:text-base ">
              Name (Optional):
            </label>
            <br />
            <div className="text-center">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Jeno Lee"
                className="mt-2 p-2 border rounded-lg w-full sm:w-80"
              />
            </div>
          </div>

          <div className="justify-center">
            <label htmlFor="email" className="font-leader text-sm sm:text-base">
              Email:
            </label>
            <br />
            <div className="text-center">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. john.doe@gmail.com"
                className="mt-2 p-2 border rounded-lg w-full sm:w-80"
                required
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="subject"
              className="font-leader text-sm sm:text-base"
            >
              Subject:
            </label>
            <br />
            <div className="text-center">
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="e.g. Recommendation"
                className="mt-2 p-2 border rounded-lg w-full sm:w-80"
                required
              />
            </div>
          </div>

          <div className="justify-center">
            <label
              htmlFor="message"
              className="font-leader text-sm sm:text-base"
            >
              Message:
            </label>
            <br />
            <div className="text-center">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 p-2 border rounded-lg w-full sm:w-80 h-32 sm:h-40 resize-none"
                placeholder="Enter your message here"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`bg-white font-content font-bold w-28 sm:w-32 h-10 rounded-2xl ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </div>
          <div className="">
            {successMessage && (
              <p className="text-green-600 text-center mt-4 font-content -mx-2">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 text-center mt-4 font-content -mx-2">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactsUs;
