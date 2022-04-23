const Contact = ({ className = "", phoneNumber = "021-12345678" }) => {
	const phone = localStorage.getItem("alami-test-phone") || phoneNumber;

	return (
		<div className={className}>
			PT. ABC
			<hr className="u-hr-none" />
			JL. Setiabudi NO. 33
			<hr className="u-hr-none" />
			{phone}
		</div>
	);
};

export default Contact;
