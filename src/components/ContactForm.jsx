const ContactForm = () => {
  return (
    <form noValidate className="p-[2rem]">
      <div className="flex flex-col mb-5">
        <label className="text-xl text-secondary font-jakarta font-bold mb-2">
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          className="bg-primary border border-tertiary rounded-md p-3 font-figtree"
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
          className="bg-primary border border-tertiary rounded-md p-3 font-figtree"
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
          className="bg-primary border border-tertiary rounded-md p-3 font-figtree"
          rows="5"
          required
        />

        <span className="text-tertiary font-figtree">
          Please provide a message.
        </span>
      </div>

      <button type="submit" className="button w-full bg-accent">Send Message</button>
    </form>
  );
};

export default ContactForm;
