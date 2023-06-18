import Head from "../../components/layout/Head";
import MainHeading from "../../components/layout/headings/MainHeading";
import ContactForm from "./functions/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head title="Contact" />

      <div className="container">
        <MainHeading title="Contact" />
        <ContactForm />
      </div>
    </>
  );
}
