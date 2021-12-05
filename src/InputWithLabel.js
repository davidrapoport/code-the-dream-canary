import React, {useRef, useEffect} from "react";

function InputWithLabel(props) {
    const inputRef = useRef();
    useEffect(()=> {
        if (props.todoTitle === ""){
            inputRef.current.focus();
        }
    }, [props.todoTitle])
    return <>
        <label htmlFor="todoTitle">{props.children}</label>
        <input
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
        ></input>
    </>
}

export default InputWithLabel