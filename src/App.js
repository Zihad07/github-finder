import React, { Component } from "react";
import "./App.css";

class App extends Component {
	method = () => {
		return "Mymethod test";
	};
	render() {
		const name = "John Doe";
		const loading = false;
		const foo = () => "foo...";
		if (loading) {
			return <h1>Loading...</h1>;
		}
		return (
			<div className='App'>
				<h1 className='text-center'>
					{" "}
					{name} {foo()}
				</h1>
				<p className='text-center'> {this.method().toUpperCase()}</p>
				{/* <button className='btn btn-primary'>Button</button> */}
			</div>
		);
	}
}

export default App;
