

const Textarea = (props) => {
    return(
        <textarea 
        className={props.classArea}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id="additional" 
        style={{ height: 150 }} />

    )
}

export default Textarea