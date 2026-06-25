"use client";

import { Send } from "lucide-react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) next.name = "Please share your name.";
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) next.email = "A valid email helps me reply.";
    if (!values.subject.trim()) next.subject = "A subject keeps the conversation focused.";
    if (values.message.trim().length < 20) next.message = "Please add a little more detail about your project.";

    return next;
  }, [values]);

  const handleChange = (field: keyof FormState, value: string) => {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <form className="glass-card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-intro">
        <span className="eyebrow">Start a build</span>
        <h3>Tell me what you want to ship.</h3>
        <p>
          Good fit: AI products, dashboards, internal tools, automations, and full stack systems that need both engineering depth and UX taste.
        </p>
      </div>

      <div className="contact-priority-row">
        <span className="chip">MVPs</span>
        <span className="chip">AI workflows</span>
        <span className="chip">Premium UI</span>
      </div>

      <div className="form-grid">
        <label>
          <span>Name</span>
          <input
            type="text"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="Your name"
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="you@company.com"
          />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>

        <label>
          <span>Subject</span>
          <input
            type="text"
            value={values.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            placeholder="AI product, web app, automation..."
          />
          {errors.subject ? <small>{errors.subject}</small> : null}
        </label>

        <label>
          <span>Message</span>
          <textarea
            rows={6}
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder="Tell me about the product, timeline, users, or the workflow that needs to improve."
          />
          {errors.message ? <small>{errors.message}</small> : null}
        </label>
      </div>

      <div className="form-footer">
        <button className="button" type="submit">
          Send Project Brief <Send size={18} />
        </button>
        <p>
          {submitted
            ? "Message captured. Hook this form to your email or CRM endpoint when you are ready."
            : "Validation is wired. Delivery can be connected to email, CRM, or an API route later without changing the UI."}
        </p>
      </div>
    </form>
  );
}
