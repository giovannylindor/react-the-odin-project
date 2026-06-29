export default function Button({text, backgroundColor, color="black", cursor="pointer"}){
    return <button style={{backgroundColor: backgroundColor, padding: "1.5rem", 
            width:"300px", margin:"auto", borderRadius: "1.5rem",
            border:"none", color: color, fontSize:"1.5rem", cursor:cursor}}>
        {text}
        </button>   
}

