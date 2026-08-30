import { useState } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 3000,
  ripple: true,
  position: { x: "center", y: "top" },
  types: [
    { type: "success", background: "#22c55e", icon: false },
    { type: "error", background: "#ef4444", icon: false },
  ],
});

const ContactForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      notyf.error("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      notyf.error("Please provide a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        notyf.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const error = await res.json();
        notyf.error(`${error.error || "Failed to send message."}`);
      }
    } catch (error) {
      notyf.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-[2rem]">
      <div className="flex flex-col mb-5">
        <label className="text-xl text-secondary font-jakarta font-bold mb-2">
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          className="bg-primary border border-tertiary/30 rounded-md p-3 font-figtree"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <span className="text-tertiary font-figtree">
          Please provide your name.
        </span>
      </div>

      <div className="flex flex-col mb-5">
        <label className="text-xl text-secondary font-jakarta font-bold mb-2">
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="bg-primary border border-tertiary/30 rounded-md p-3 font-figtree"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <span className="text-tertiary font-figtree">
          Please provide your email address.
        </span>
      </div>

      <div className="flex flex-col mb-5">
        <label className="text-xl text-secondary font-jakarta font-bold mb-2">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          className="bg-primary border border-tertiary/30 rounded-md p-3 font-figtree"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <span className="text-tertiary font-figtree">
          Please provide a message.
        </span>
      </div>

      <button type="submit" disabled={isLoading} className="button w-full bg-accent">
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
