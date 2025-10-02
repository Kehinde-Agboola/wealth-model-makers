"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.22, 1, 0.36, 1);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    msg?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Simple validation
  const validate = () => {
    const next: typeof errors = {};
    if (!formData.name.trim()) next.name = "Name is required.";
    if (!formData.email.trim()) next.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      next.email = "Enter a valid email.";
    if (!formData.msg.trim()) next.msg = "Message cannot be empty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.id]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate async send (replace with your API call)
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", msg: "" });
    }, 700);
  };

  // focus the close button when modal opens (accessibility)
  useEffect(() => {
    if (showSuccess) {
      const id = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [showSuccess]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12">
      <div className="w-full max-w-xl text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease } }}
        >
          Contact
        </motion.h1>

        <motion.p
          className="mt-2 text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1, ease },
          }}
        >
          We’ll get back to you shortly.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.15, ease },
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full h-11 rounded-xl border px-4 outline-none transition ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary/30"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-err" : undefined}
            />
            {errors.name && (
              <p id="name-err" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-11 rounded-xl border px-4 outline-none transition ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary/30"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-err" : undefined}
            />
            {errors.email && (
              <p id="email-err" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              rows={5}
              value={formData.msg}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                errors.msg
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary/30"
              }`}
              aria-invalid={!!errors.msg}
              aria-describedby={errors.msg ? "msg-err" : undefined}
            />
            {errors.msg && (
              <p id="msg-err" className="text-red-500 text-sm mt-1">
                {errors.msg}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            className="w-[30%] inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
            whileHover={{
              scale: submitting ? 1 : 1.01,
              y: submitting ? 0 : -1,
            }}
            whileTap={{ scale: submitting ? 1 : 0.99 }}
          >
            {submitting ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.25, ease } }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease } }}
              onClick={() => setShowSuccess(false)}
            />
            {/* Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-title"
              className="fixed inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.25, ease } }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease } }}
            >
              <motion.div
                className="w-[40%] max-w-md rounded-2xl bg-white shadow-xl p-6 text-center"
                initial={{ y: 24, scale: 0.98, opacity: 0 }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.35, ease },
                }}
                exit={{
                  y: 10,
                  scale: 0.98,
                  opacity: 0,
                  transition: { duration: 0.2, ease },
                }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.05, duration: 0.3, ease },
                  }}
                >
                  {/* Check icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-green-600"
                  >
                    <path
                      fill="currentColor"
                      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                    />
                  </svg>
                </motion.div>

                <h3 id="success-title" className="text-xl font-semibold">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Thanks for reaching out. We’ll get back to you shortly.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                  <motion.button
                    ref={closeBtnRef}
                    className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
