import SectionHeader from "./SectionHeader";
import { BsChatLeftQuote } from "react-icons/bs";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="mb-[5rem]">
      <div>
        <SectionHeader
          title="Let's Connect"
          subtitle="I'd love to hear from you"
        />
      </div>

      <div className="px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 border rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="col-span-5 flex flex-col gap-4 p-[2rem] border-b md:border-b-0 md:border-r justify-center">
            <div className="flex justify-between items-center">
              <span className="text-3xl text-accent font-inconsolata uppercase">
                Feedback Loop
              </span>
              <BsChatLeftQuote className="text-3xl text-accent" />
            </div>

            <p className="text-[1.1rem] font-figtree text-tertiary">
              I genuinely love feedback, especially the kind that helps me get
              better. If something here didn't work the way you expected, felt
              off, or you just have thoughts to share, I'd really appreciate
              hearing them.
            </p>

            <p className="text-[1.1rem] font-figtree text-tertiary">
              I'm open to new opportunities and collaborations. If you'd like to work together or have an opportunity to discuss, feel free to reach out!
            </p>
          </div>

          {/* Right Side */}
          <div className="col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
