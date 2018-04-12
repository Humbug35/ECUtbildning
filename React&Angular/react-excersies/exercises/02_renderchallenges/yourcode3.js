
// Render challenges part 3

let Greeter = props => { // copy me from part 2, but add default name functionality!
	return <p>Hello <strong>{props.greet}</strong></p>;
};

let Tester = props => {
	return <div>
		<Greeter greet={"participant"}/>
		<Greeter greet={"whoever you are"}/>
	</div>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

