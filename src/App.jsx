import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./routes/index";

function App() {
	return (
		<div>
			<Router>
				<Index />
			</Router>
		</div>
	);
}

export default App;