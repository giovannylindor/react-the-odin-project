import { useState } from "react"

                                //backgroundColor was removed since compononent owns its own state 
                                // instead of reciveing from parent
export default function Button({text, color="black", cursor="pointer"}){

    const colors = ['white', 'blue', 'green', 'red', 'purple', 'yellow', 'pink'];
    
    //useState (compoment that renders NEEDS the state)
    //Hooks only work inside component bodies not in helper functions

    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    //function that calc the next colors index 
    function handleClick(){
        const currentIndex = colors.indexOf(backgroundColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        //rerenders a new color
        setBackgroundColor(colors[nextIndex]);
    }   


    return (<button style={{
        backgroundColor: backgroundColor, 
        padding: "1.5rem", 
            width:"300px", 
            margin:"auto", 
            borderRadius: "1.5rem",
            border:"none", 
            color: color, 
            fontSize:"1.5rem", 
            cursor:cursor}} 
            onClick={handleClick}>
        {text}
        </button>
    );   
}

