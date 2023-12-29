function Greeting(props) {
    let name = "World"

    if (props.name) {
        name = props.name
    }

    return (
        <div>
            <h1>Hello {name}!</h1>
            {props.children}
        </div>
    )
};

export default Greeting;