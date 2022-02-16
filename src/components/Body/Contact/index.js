import Social from "../../common/socials";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Get in touch? Contact me on any of the platform</p>
          <Social />
        </div>
        <div className="contact-right">
          <a download href={require("../../../assets/Don.Usbal.Software.Engineer.16feb2022.resume.pdf")}>
            <i className="fi-rr-cloud-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
