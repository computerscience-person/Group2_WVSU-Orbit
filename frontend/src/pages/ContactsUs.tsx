import React from "npm:react";
import Nav from "../components/Nav";
const ContactsUs = () => {
  return (
    <div className="bg-sunshine h-full flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center h-fit space-y-4 my-24 mx-">
        <h1 className="font-leader text-6xl">CONCERNS?</h1>
        <p className="font-content text-lg">
          If you have issues or concerns, feel free to reach us out!
        </p>
        <button className="bg-white font-content font-bold w-32 h-10 rounded-2xl">
          Answer Form
        </button>
      </div>

      {/* to be fixed */}
      <div className="bg-white flex justify-center items-center">
        {/* CONTACT FORM */}
        <div className="bg-sunshine w-fit py-6 px-8 h-auto justify-start rounded-3xl space-y-2 my-36">
          <div>
            <p className="font-leader">Name (Optional):</p>
            <input
              type="text"
              placeholder="e.g. Jeno Lee"
              className="mt-2 p-2 border rounded-lg w-80 "
            />
          </div>

          <div>
            <p className="font-leader">Email:</p>
            <input
              type="text"
              placeholder="e.g. john.doe@gmail.com"
              className="mt-2 p-2 border rounded-lg w-80 "
            />
          </div>

          <div>
            <p className="font-leader">Email:</p>
            <input
              type="text"
              placeholder="e.g. john.doe@gmail.com"
              className="mt-2 p-2 border rounded-lg w-80 "
            />
          </div>

          <div>
            <p className="font-leader">Subject:</p>
            <input
              type="text"
              placeholder="e.g. Recommendation"
              className="mt-2 p-2 border rounded-lg w-80 "
            />
          </div>

          <div>
            <p className="font-leader">Message:</p>
            <textarea
              className="mt-2 p-2 border rounded-lg w-80 h-40 resize-none"
              placeholder="Enter your message here"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-white font-content font-bold w-32 h-10 rounded-2xl">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
