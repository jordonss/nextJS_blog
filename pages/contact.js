import { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Send messages"></meta>
			</Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
