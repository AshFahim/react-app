import ListGroup from "./Components/ListGroup";

function App() {
	let listItems = [
		"An item",
		"A second item",
		"A third item",
		"A fourth item",
		"And a fifth one",
	  ];
	return (
		<div>
			<h1><ListGroup listItems={listItems} heading="Cities"/></h1>
		</div>
	)
}

export default App;