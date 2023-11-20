import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import Button from "@reactComponents/Button";
import Input from "@reactComponents/Input";
import TextArea from "@reactComponents/TextArea";
import Text from "@reactComponents/Text";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const [state, setState] = useState<"success" | "error" | "default">();

  // Form is done with Netlify Forms, that is why the code below does not follow best practices of this project
  const { mutate: handleSend } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: async () => {
      return await axios.post(
        "/en-us",
        new URLSearchParams({
          name,
          email,
          message,
          "form-name": "contact",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
    },
    onSuccess: () => {
      clearForm();
      setState("success");
    },
    onError: () => {
      setState("error");
    },
  });

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

        {state === "success" && (
          <Text color="success">
            Your message has been sent. We will contact you shortly
          </Text>
        )}
        {state === "error" && (
          <Text color="danger">
            Something went wrong, please try again later.
          </Text>
        )}

        <Button
          style={{ marginTop: "2rem" }}
          color="primary"
          onClick={handleSend}
          disabled={!name || !email || !message}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
