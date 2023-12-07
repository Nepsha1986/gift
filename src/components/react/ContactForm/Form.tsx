import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { Button, Input, Text, TextArea } from "@src/common";

import { type SupportedLanguages } from "@i18n/ui.ts";
import { useTranslations } from "@i18n/utils.ts";
import translations from "./translations.ts";

import styles from "./styles.module.scss";

/**
 * Form is done with a https://formspree.io/
 */
const formURL = import.meta.env.PUBLIC_FORM_SPREE_URL;

interface Props {
  lang: SupportedLanguages;
}

const Form: React.FC<Props> = ({ lang }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const t = useTranslations(lang as SupportedLanguages, translations);

  const clearForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const [state, setState] = useState<"success" | "error" | "default">();

  const { mutate: handleSend } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: async () => {
      return await axios.post(
        formURL,
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
      <form className={styles.contactForm} name="contact">
        <Input
          name="name"
          label={t("field.name")}
          value={name}
          onChange={setName}
        />
        <Input
          name="email"
          label={t("field.email")}
          value={email}
          onChange={setEmail}
        />

        <TextArea
          name="message"
          value={message}
          onChange={setMessage}
          label={t("field.message")}
        />

        {state === "success" && (
          <Text color="success">{t("success_message")}</Text>
        )}
        {state === "error" && <Text color="danger">{t("error_message")}</Text>}

        <Button
          style={{ marginTop: "2rem" }}
          color="primary"
          onClick={handleSend}
          disabled={!name || !email || !message}
        >
          {t("btn.text")}
        </Button>
      </form>
    </div>
  );
};

export default Form;
