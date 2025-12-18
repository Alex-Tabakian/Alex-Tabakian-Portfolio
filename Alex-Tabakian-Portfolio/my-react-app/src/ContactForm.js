import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_9cmdydi",
      "template_4epm9z5",
      formRef.current,
      "5rQn7e-df0acobkf8"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      formRef.current.reset();
    })
    .catch(() => setStatus("Error sending message. Try again later."));
  }

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input name="name" type="text" placeholder="Your Name" required />

        <input name="email" type="email" placeholder="Your Email" required />

        <textarea name="message" rows="4" placeholder="Your Message" required />

        <button type="submit">Send Message</button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </div>
  );
}
