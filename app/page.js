import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import Shows from "./components/Shows/Shows";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-white">
				<h1 className="sr-only">Welcome to the jungle</h1>
				<Intro/>
				<About/>
				<Listen/>
				<Shows/>
				<ContactUs/>
				<PhotoGallery/>
			</main>
		</>
	);
}
