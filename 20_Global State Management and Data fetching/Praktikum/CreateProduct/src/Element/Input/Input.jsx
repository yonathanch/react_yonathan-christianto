const Input = (props) => {
  
    return (
        <>
            <label 
                htmlFor="" 
                className={props.classLabel}>
                {props.label}
            </label>
            <input 
                name={props.name}
                type={props.type} 
                className={props.classInput} 
                placeholder={props.placeholder}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}

                id="productName"       
            />
        </>
        
       
    )
}

export default Input



