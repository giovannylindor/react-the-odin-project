//Practice w/ JSX, Objects and Curly Braces

const user = {
    name: 'Gio',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
        width: '500px',
        margin: 'auto'
    }
};

export default function Person(){
    return(
        <div style={user.theme}>
            <h1>{user.name} Says Hi!</h1>
            <h2 style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 'auto',
                width: '300px'
            }}>{user.name}</h2>
        </div>
    )
}