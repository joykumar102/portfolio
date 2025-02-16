import React, { useRef } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
import contactImg from "../../../src/assets/projects/Email_Examples.png"
import { motion } from "motion/react"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // service: service_4t1xm5s
    // template: template_3cf34me
    // public: -Ia15wNqQuHq_q6Ep

    emailjs
      .sendForm(
        "service_4t1xm5s",
        "template_3cf34me",
        form.current,
        "-Ia15wNqQuHq_q6Ep"
        // import.meta.env.VITE_SERVICE_ID, 
        // import.meta.env.VITE_TEMPLATE_ID,
        // form.current,
        // import.meta.env.VITE_PUBLIC_KEY 
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully Sent");

          // Reset the form after success
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send. Please try again.");
        }
      );
  };


    // iconverient
    const iconVsrients = (duration) => ({
      initial: {y: -10}, 
      animate: {
          y: [10, -10],
          transition: {
              duration: duration,
              case: "linear",
              repeat: Infinity,
              repeatType: "reverse"
          }
      }
  })


  return (

    <div
      id="contact"
      className="min-h-screen bg-[#1f242d] flex items-center justify-center"
    >
      <section className="p-5  max-w-5xl w-full grid md:grid-cols-2 items-center space-y-5">
        {/* left Section - Form */}
        <div>

          <motion.div initial="initial"
         animate="animate"
          variants={iconVsrients(3)}>
            <img className='w-md rounded-4xl' src={contactImg} alt="" />
          </motion.div>
          <div className="mt-8 space-y-6 ">
            <div className="flex items-center space-x-4">
              <div className="text-white rounded-full ">
                <FiPhoneCall className='text-2xl ' />
              </div>
              <p className=" text-gray-300 text-2xl hover:text-accent font-semibold">
                Phone: +8801736179397
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-gray-300 rounded-full text-2xl">
                <MdEmail />
              </div>
              <p className="text-gray-300 text-2xl hover:text-accent font-semibold">
                Email: njrksb@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-gray-300 rounded-full text-2xl">
                <IoLocationSharp />
              </div>
              <p className="text-gray-300 text-2xl hover:text-accent font-semibold">
                Address: Dhaka, Bangladesh
              </p>
            </div>

          </div>
        </div>

        <div className='lg:w-xl'>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-gray-900 text-white p-10 rounded-2xl"
          >
            <div>
             
            <h2 className="text-4xl mb-5 font-bold text-accent">
              Let’s work together!
            </h2>
            <p>Feel free to reach out if you'd like to collabarate you are just a few clicks away!</p>
            </div>

            <div className="gap-4">
              <input
                type="text"
                required
                name="from_name"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-accent"
              />
            </div>
            <div>
              <input
                type="email"
                required
                name="email"
                placeholder="Email address"
                className="w-full p-3 rounded-lg border border-accent"
              />
             
            </div>
            <textarea
              rows="4"
              placeholder="Message"
              name="message"
              className="w-full p-3 rounded-lg border border-accent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-black"
            >
              Send Email
            </button>
          </form>
        </div>
        {/*  Section */}
      </section>
    </div>
  );
};

export default Contact;