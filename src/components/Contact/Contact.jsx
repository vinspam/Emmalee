import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendData({ ...sendData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mo7co5i", // Replace with your EmailJS service ID
        "template_wbnogmd", // Replace with your EmailJS template ID
        {
          from_name: sendData.name,
          from_email: sendData.email,
          subject: sendData.subject,
          message: sendData.msg,
        },
        "5niLp1xx6KVzFInIO" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Email sent successfully");
        },
        (error) => {
          alert("Error sending email: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form
              action=""
              method="POST"
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  placeholder="Your Subject"
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="msg"
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                onClick={sendEmail}
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link>emmaleebonderud@gmail.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+1 (740) 481 1821</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>Amherstview, Ontario, Canada</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
