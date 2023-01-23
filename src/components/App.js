import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Cards from "./Cards";


function App() {
	return (
		<div className="App">
			<Nav />
			<br />
			<br />
			<br />
			<Cards hogs={hogs}/>
		</div>
	);
}

export default App;
