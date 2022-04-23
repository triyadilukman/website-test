import AboutComponent from "components/About";

function About({ page }) {
	return (
		<>
			<h1 className="home-title">This is {page} Page</h1>
			<AboutComponent />
		</>
	);
}

export default About;
