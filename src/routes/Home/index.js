import { useState } from "react";
import AboutComponent from "components/About";
import ContactComponent from "components/Contact";
import PhoneNumberComponent from "components/PhoneNumber";

import "./styles.css";

const Home = ({ page = "" }) => {
	const [phoneNumber, setPhone] = useState('');

	const handleSubmitPhone = (value) => {
		setPhone(value);
		localStorage.setItem("alami-test-phone", value);
	};

	return (
		<>
			<h1 className="home-title">This is {page} Page</h1>
			<AboutComponent />
			<div className="u-flex home-bottom">
				<PhoneNumberComponent
					className="u-mt-32 u-mr-32"
					onSubmit={handleSubmitPhone}
				/>
				<ContactComponent className="home-bottom--contact u-mt-32" phoneNumber={phoneNumber} />
			</div>
		</>
	);
};

export default Home;
