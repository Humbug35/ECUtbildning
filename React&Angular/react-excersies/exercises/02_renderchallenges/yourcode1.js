// Render challenges part 1

let Component = props => {
    return (
        <div>
            <h3>Shopping List</h3>
            <ul>
                <li>Milk</li>
                <li>Egg</li>
                <li>Patience</li>
            </ul>
        </div>
    );
};

ReactDOM.render(
    <Component/>, document.getElementById("target")
);

