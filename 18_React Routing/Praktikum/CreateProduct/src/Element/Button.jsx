const Button = () => {
    return (
        <div className="container text-center">
            <button type="submit" className="btn btn-primary text-center" data-bs-target="#modalContent" style={{ width: 500 }}
            id="submit" onclick="table()">Submit</button>
        </div>
    )
}

export default Button