function Message() {   
    
    const name = "Fox";
    if (name === "Fox") {
        return (
            <div>
                <h1>Hello, {name}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
}

export default Message;
