const Label = (props) => {

    return(
            <label 
                htmlFor="" 
                className={props.classLabel}>
                {props.label}
            </label>
    )
}

export default Label