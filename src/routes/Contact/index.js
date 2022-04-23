import ContactComponet from "components/Contact";
import "./styles.css";

const Contact = ({ page = "" }) => (
	<>
		<h1 className="home-title">This is {page} Page</h1>
		<ContactComponet className="contact" />
	</>
);

export default Contact;
