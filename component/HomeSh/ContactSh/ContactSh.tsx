import React from "react";

// import ContactForm from "@/component/Home/Contact/ContactForm";
// import ContactInfo from "@/component/Home/Contact/ContactInfo";
import ContactFormSh from "./ContactFormSh";
import ContactInfoSh from "./ContactInfoSh";

const ContactSh = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        <div>
          <ContactFormSh />
        </div>
        <div className="xl:mx-auto">
          <ContactInfoSh />
        </div>
      </div>
    </div>
  );
};

export default ContactSh;
