import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "./Form.tsx";
import type { SupportedLanguages } from "@i18n/ui.ts";

const queryClient = new QueryClient();

interface Props {
  lang: SupportedLanguages;
}

const ContactForm: React.FC<Props> = ({ lang }) => (
  <QueryClientProvider client={queryClient}>
    <Form lang={lang} />
  </QueryClientProvider>
);

export default ContactForm;
