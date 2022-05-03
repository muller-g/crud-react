function Button({type, onClick, id, text}){
    return(<button type={type} onClick={onClick} id={id}>{text}</button>)
}

export default Button