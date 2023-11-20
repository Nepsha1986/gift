import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "./Form.tsx";

const queryClient = new QueryClient();

const ContactForm: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Form />
  </QueryClientProvider>
);

export default ContactForm;
