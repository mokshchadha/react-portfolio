import React from "react";
import "./contact.css";

import ContactOption from "./ContactOption";
import EmailForm from "./EmailForm";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="hidden">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            icon={<MdOutlineEmail className="contact__option-icon" />}
            title={"Email"}
            subTitle={"chadhamoksh@gmail.com"}
            link={"mailto:chadhamoksh@gmail.com"}
            linkTitle={"Send an email"}
          />
          <ContactOption
            icon={<FaLinkedinIn className="contact__option-icon" />}
            title={"Linkedin"}
            subTitle={"@mokshchadha"}
            link={"https://www.linkedin.com/in/mokshchadha"}
            linkTitle={"Connect on Linkedin"}
          />
          <ContactOption
            icon={<FaWhatsapp className="contact__option-icon" />}
            title={"Whatsapp"}
            subTitle={""}
            link={"https://api.whatsapp.com/send/?phone=919459845615"}
            linkTitle={"Send a message"}
          />
        </div>
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;
