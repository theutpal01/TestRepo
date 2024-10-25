import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import VideoSection from "./pages/VideoSection/VideoSection";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/course/:name" element={<VideoSection />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
