import { useState } from "react";
import "./styles.css";

const PhoneNumber = ({ className = "", onSubmit }) => {
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");

	const handleChange = (event) => {
		setError("");
		const value = event.target.value;
		const format = value.toLowerCase().replace(/[^\d]/g, "");

		if (format.length < 11) {
			setPhone(format);
		} else {
			const formatNumber =
				value.length < 5
					? value
					: `${value.slice(0, 3)}-${value.slice(3, value.length)}`;

			setPhone(formatNumber);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (phone.length < 10) setError("11 Numbers length minimum !");
		else onSubmit(phone);
	};

	return (
		<form
			name="no-telp-update"
			className={`pn ${className}`}
			onSubmit={handleSubmit}
		>
			<label>No Telp</label>
			<hr className="u-hr-none" />

			<input
				onChange={handleChange}
				name="phone"
				value={phone}
				type="text"
				maxLength={11}
			/>
			{error ? <small style={{ color: "red" }}>{error}</small> : null}

			<hr className="u-hr-none" />

			<div className="u-flex u-center">
				<button type="submit" className="pn-btn">
					Go
				</button>
			</div>
		</form>
	);
};

export default PhoneNumber;
