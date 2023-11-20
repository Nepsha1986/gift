import React, { useState } from "react";
import Button from "@reactComponents/Button";
import Input from "@reactComponents/Input";
import TextArea from "@reactComponents/TextArea";

import styles from "./styles.module.scss";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (): void => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name,
        email,
        message,
        "form-name": "contact",
      }).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <input type="hidden" name="contact" value="name" />

      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="message" />
      </form>

      <form className={styles.contactForm} name="contact" data-netlify="true">
        <Input name="name" label="Name" value={name} onChange={setName} />
        <Input name="email" label="Email" value={email} onChange={setEmail} />

        <TextArea
          name="message"
          value={message}
          onChange={setMessage}
          label="Message"
        />

        <Button
          style={{ marginTop: "2rem" }}
          color="primary"
          onClick={handleSend}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
