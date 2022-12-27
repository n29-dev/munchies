import { FC } from "react";
import Input from "./input";
import TextArea from "./textArea";

const ContactForm: FC = () => {
    return (
        <form>
            <div className="flex gap-2 mb-6">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
                <TextArea placeholder="Your message" />
            </div>
        </form>
    );
};

export default ContactForm;
