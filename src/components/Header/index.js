import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = (props) => {
	const [showMenu, setMenu] = useState(false);

	const handleShowMenu = () => {
		setMenu(!showMenu);
	};

	return (
		<div className="header-wp">
			<div className="header">
				<div>Website Test</div>
				<div className="menu">
					<Link className="menu-item" to="/">
						Home
					</Link>
					<Link className="menu-item" to="/about">
						About
					</Link>
					<Link className="menu-item" to="/contact">
						Contact
					</Link>
				</div>
				<div className="menu-mobile">
					<div onClick={handleShowMenu}>
						Menu{" "}
						{showMenu ? (
							<span>&#x25B2;</span>
						) : (
							<span>&#x25BC;</span>
						)}
					</div>
				</div>
			</div>
			{showMenu ? (
				<div className="menu-mobile--dropdown">
					<Link to="/" onClick={handleShowMenu}>Home</Link>
					<Link to="/about" onClick={handleShowMenu}>About</Link>
					<Link to="/contact" onClick={handleShowMenu}>Contact</Link>
				</div>
			) : null}
		</div>
	);
};

export default Header;
