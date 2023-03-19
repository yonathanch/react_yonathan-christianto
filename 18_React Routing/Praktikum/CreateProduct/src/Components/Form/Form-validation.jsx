import React, { useState } from 'react';
import './Form.css'

const Form = () => {
        const [productName, setProductName] = useState('');
        const [productCategory, setproductCategory] = useState('');
        const [imageofProduct, setimageofProduct] = useState('');
        const [addDescription, setaddDescription] = useState('');
        const [productPrice, setproductPrice] = useState('');
        const [formErrors, setFormErrors] = useState({});

      
        const handleProductName = (event) => {
          const inputValue = event.target.value;
          
        
          if (inputValue.length > 10) {
            alert('Product Name cannot be more than 10 characters.');
            setProductName(inputValue.substring(0, 10));
          } else {
            setProductName(inputValue);
          }
          };

        const handleProductCategory = (event) => {
            setproductCategory(event.target.value);
        }
        
        
        const handleimageofProduct = (event) => {
            setimageofProduct(event.target.value);
        }
       
        const handleproductFreshnes = (event) => {
            setproductFreshnes(event.target.value);
        }

        const handleaddDescription = (event) => {
            setaddDescription(event.target.value);
        }
         

        const handleproductPrice = (event) => {
            setproductPrice(event.target.value);
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            const errors = {};
            if (!productName) {
            errors.productName = true;
            }
            if (!productCategory) {
            errors.productCategory = true;
            }
            if (!imageofProduct) {
            errors.imageofProduct = true;
            }
            if (!addDescription) {
            errors.addDescription = true;
            }
            if (!productPrice) {
            errors.productPrice = true;
            }
            setFormErrors(errors);
        };
    
                
    return(        
        <form className="col-md-6 mx-auto needs-validation" noValidate="" id="Myform" onSubmit={handleSubmit}>
            <h2>Detail Product</h2>
            <div className="col-12 mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" id="productName" className="form-control" required=""
                 value={productName}
                 onChange={handleProductName}/>
                {/* <div class="valid-feedback">
                        Good
                    </div> */}
                {formErrors.productName && (
                <span className="error-message">The Product Name field must be filled in</span>
                )}
            </div>


            <div className="col-12 mb-3">
                <label htmlFor="nationality" className="form-label">Product Category</label>
                <select className="form-select" aria-label="nationality" id="Pcategory" required="" 
                    value={productCategory}
                    onChange={handleProductCategory}>
                        <option selected="" disabled="" value="">Choose...</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>              
                </select>
                {formErrors.productCategory && (
                <span className="error-message">The Product Category field must be filled in</span>
                )}
            </div>


            <div className="col-12 mb-3 custom-file-button">
                <label htmlFor="productImage" className="form-label">Image of Product</label>
                <input className="form-control text-primary border-primary" type="file" id="productImage" required=""
                    value={imageofProduct}
                    onChange={handleimageofProduct} />
                    {formErrors.imageofProduct && (
                    <span className="error-message">The Image of Product field must be filled in</span>
                    )}
            </div>


            <div className="col-12 mb-3 custom-file-button">
                <label htmlFor="productImage" className="form-label">Product Freshnes</label>
                <div className="form-check">
                    <input className="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios" defaultValue="Brand New" />
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
                    required="" defaultValue={""}     
                    value={addDescription}
                    onChange={handleaddDescription}
                     />
                     {formErrors.addDescription && (
                     <span className="error-message">The Additional Description field must be filled in</span>
                     )}
                    <label htmlFor="floatingTextarea2" />
                </div>
            </div>


            <div className="col-12 mb-3">
                <label htmlFor="productName" className="form-label">Product Price</label>
                <input type="text" id="productPrice" className="form-control" placeholder="$ 100" required=""
                value={productPrice}
                onChange={handleproductPrice} />
                {formErrors.productPrice && (
                <span className="error-message">Please enter a valid Prouct price.</span>
                )}
            </div>

            <div className="container text-center">
            <button type="submit" className="btn btn-primary text-center" data-bs-target="#modalContent" style={{ width: 500 }}
            id="submit" onClick="table()">Submit</button>
            </div>
      </form>
       

        
    )
}

export default Form