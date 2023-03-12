const Form = () => {
    return(
        <form className="col-md-6 mx-auto needs-validation" noValidate="" id="Myform">
            <h2>Detail Product</h2>
            <div className="col-12 mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" id="productName" className="form-control" required="" />
                {/* <div class="valid-feedback">
                        Good
                    </div> */}
                <div className="invalid-feedback">Lengkapi form!</div>
            </div>

            <div className="col-12 mb-3">
                <label htmlFor="nationality" className="form-label">Product Category</label>
                <select className="form-select" aria-label="nationality" id="Pcategory" required="">
                        <option selected="" disabled="" value="">Choose...</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                </select>
            </div>

            <div className="col-12 mb-3 custom-file-button">
                <label htmlFor="productImage" className="form-label">Image of Product</label>
                <input className="form-control text-primary border-primary" type="file" id="productImage" required=""/>
            </div>

            <div className="col-12 mb-3 custom-file-button">
                <label htmlFor="productImage" className="form-label">Product Freshnes</label>
                <div className="form-check">
                    <input className="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios" defaultValue="Brand New"/>
                    <label className="form-check-label" htmlFor="exampleRadios1"> Brand New</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" defaultValue="Second Hand"/>
                    <label className="form-check-label" htmlFor="exampleRadios2">Second Hand</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" defaultValue="Refufbished"/>
                    <label className="form-check-label" htmlFor="exampleRadios3">Refufbished</label>
                </div>
            </div>

            <div className="col-12 mb-3 custom-file-button">
            <label htmlFor="productImage" className="form-label">Additional Description</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="additional" style={{ height: 150 }} 
                    required="" defaultValue={""}/>
                    <label htmlFor="floatingTextarea2" />
                    <div className="invalid-feedback">Lengkapi form!</div>
                </div>
            </div>

            <div className="col-12 mb-3">
                <label htmlFor="productName" className="form-label">Product Price</label>
                <input type="text" id="productPrice" className="form-control" placeholder="$ 100" required=""/>
            <div className="invalid-feedback">Lengkapi form!</div>
            </div>

           
      </form>
      

        
    )
}

export default Form