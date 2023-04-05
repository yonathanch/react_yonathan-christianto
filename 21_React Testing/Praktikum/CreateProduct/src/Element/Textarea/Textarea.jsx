

const Textarea = (props) => {
    return(
        <textarea 
        className={props.classArea}
        placeholder={props.placeholder}
        onChange={props.onChange}
        data-testid={props.textareaTestId}
        id="additional" 
        style={{ height: 150 }} />


    )
}

export default Textarea