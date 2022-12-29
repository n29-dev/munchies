import { FC } from "react";
import ContactForm from "./contactForm";
import ContactThumb from "@public/images/contact-thumb.png";
import Image from "next/image";

const ContactSection: FC = () => {
    return (
        <section className="bg-[#F7F8FA] py-[100px]">
            <div className="container flex justify-between">
                <div>
                    <h2 className="heading mb-[5px]">
                        Do you have a question <br /> or want to become a seller?
                    </h2>
                    <p className="text-[12px] leading-[20px] mb-8">
                        Fill this form and our manager will contact you next 48 hours.
                    </p>
                    <ContactForm />
                </div>
                <div>
                    {/* thumb */}
                    <Image className="block w-full" src={ContactThumb} alt="Dilevery Panda" />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
