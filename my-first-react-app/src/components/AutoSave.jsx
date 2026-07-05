import {useState, useEffect } from 'react'

const textAreaStyles = {
    padding: '6rem',
    width: '25rem',
    height: '5rem',
    margin: 'auto',
}; 

const buttonStyles = {
    padding: '3rem',
    margin: 'auto',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '2rem',
    cursor: 'pointer'
};


export default function AutoSave(){
    const[text, setText] = useState('');
    const[typing, setTyping] = useState(false); 
    const[autoSave, setAutoSave] = useState(true);

    const changeText = (e) => {
        setTyping(true);
        setText(e.target.value);
    }

useEffect(() => {
    if(!autoSave) return;
    const time = setTimeout(() => {
        console.log("Saved: ", text); 
        setTyping(false);
    }, 2000)


    return () => {
        clearInterval(time);
    }
}, [text, autoSave]);


    return(
        <>
            <h2>Auto Save</h2>
            {typing ? <p>Unsaved Changes</p> : <h2>Saved!</h2>}
            <textarea name="" id="" style={textAreaStyles}
            placeholder='Enter Text...' onChange={changeText}
            value={text}
            ></textarea>
            <button style={buttonStyles} onClick={(e) => setAutoSave((p) => !p)}>
                {autoSave ? 'ON' : 'OFF'}
            </button>
        </>
    )
}