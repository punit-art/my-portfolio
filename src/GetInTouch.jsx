import React, { useState } from "react";
import "./GetInTouch.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) setSubmitError("");
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitError("");
    setSent(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("http://localhost:5001/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      
      // Reset message after 3 seconds in our UI
      setTimeout(() => {
        setSent(false);
      }, 3000);
      
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "Server se connect nahi ho paya ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact_to_me">
      <div className="contact-card">
        <div>
          <div className="title">
            <span className="dot" />
            Contact Me
          </div>
          <div className="subtitle">
            Have a question or a project? Send a message and I'll reply soon.
          </div>
        </div>
        <form method="POST" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="field">
            <input
              className={`input ${errors.name ? "error" : ""}`}
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
            />
            <label htmlFor="name" className="label">
              Full Name
            </label>
            <div className="hint">e.g., John Doe</div>
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          {/* Email */}
          <div className="field">
            <input
              className={`input ${errors.email ? "error" : ""}`}
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="hint">Make sure it's reachable</div>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          {/* Subject */}
          <div className="field row-span-2">
            <input
              className={`input ${errors.subject ? "error" : ""}`}
              type="text"
              id="subject"
              name="subject"
              placeholder=" "
              value={form.subject}
              onChange={handleChange}
              required
              minLength={3}
            />
            <label htmlFor="subject" className="label">
              Subject
            </label>
            {errors.subject && (
              <div className="error-message">{errors.subject}</div>
            )}
          </div>

          {/* Message */}
          <div className="field textarea row-span-2">
            <textarea
              className={`textarea ${errors.message ? "error" : ""}`}
              id="message"
              name="message"
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
            />
            <label htmlFor="message" className="label">
              Description
            </label>
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>

          {submitError && <div className="submit-error">{submitError}</div>}

          <div className="actions row-span-2">
            <button
              type="button"
              className="btn"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {sent && (
              <span className="sent">
                <span className="success-check">✓</span> Sent successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}