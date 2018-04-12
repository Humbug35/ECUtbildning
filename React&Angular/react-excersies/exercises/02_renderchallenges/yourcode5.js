
// Render challenges part 5

let List = props => {
	let variable = props.items.map((chores, x)=> <li key={x}>{chores}</li>
	);
	// As you see in `Tester`, I expect an array of strings in the prop `items`
	return(
	<div>
		<h4>My chores</h4>
		<ul>{variable}</ul>
	</div>
	)
};

let Item = props => {
    return <List items={["take out trash","do the dishes"]}/>;
	// I would like to be given a string in the prop `text`.
};

let Tester = props => { // Don't touch me, I'm just here to show that it works
	return <List items={["take out trash","do the dishes"]}/>;
};

ReactDOM.render(<Item/>, document.getElementById("target"));

