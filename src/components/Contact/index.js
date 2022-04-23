const Contact = ({ className = "", phoneNumber = "" }) => {
	const phone = phoneNumber || localStorage.getItem("alami-test-phone");

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
