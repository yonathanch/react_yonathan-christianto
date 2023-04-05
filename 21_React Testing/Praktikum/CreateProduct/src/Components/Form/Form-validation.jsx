import React, { useState } from 'react';
import './Form.css'
import Table from '../Table/Table';
import Input from '../../Element/Input/Input';
import Textarea from '../../Element/Textarea/Textarea';
import Label from '../../Element/Label/Label';

import { useDispatch } from 'react-redux';
import { addProduct} from '../redux/productreducerSlice';
import { v4 as uuidv4 } from "uuid";



const Form = () => {
        const [productName, setProductName] = useState('');
        const [productCategory, setproductCategory] = useState('');
        const [imageofProduct, setimageofProduct] = useState('');
        const [productFreshness, setproductFreshness] = useState('');
        const [addDescription, setaddDescription] = useState('');
        const [productPrice, setproductPrice] = useState('');
        const [formErrors, setFormErrors] = useState({});
        // const [data, setData] = useState([]);
        const [isPriceValid, setIsPriceValid] = useState(true); 
        const dispatch = useDispatch();

        const onSubmit = (e) => {
            e.preventDefault();
            const product = {
            id: uuidv4(),
            productName,
            productCategory,
            productFreshness,
            productPrice,
            imageofProduct,
            addDescription,
            };
            dispatch(addProduct(product));
            setProductName("");
            setproductCategory("");
            setimageofProduct("");
            setproductFreshness("");
            setproductPrice("");
            setaddDescription("");
        };


        // const onSubmit = () => {
        //     const objData = {
        //         productName: productName,
        //         productCategory: productCategory,
        //         imageofProduct: imageofProduct,
        //         productFreshness: productFreshness,
        //         addDescription: addDescription,
        //         productPrice: productPrice
        //     }

        //     setData([...data, objData])
        // }

        // const handleDelete = (index) => {
        //     const newData = [...data];
        //     newData.splice(index, 1);
        //     setData(newData);
        //   };
   
        
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

        const handleFreshness = (event) => {
            setproductFreshness(event.target.value);
          };
        

       
    
                
    return(        
        <form className="col-md-6 mx-auto needs-validation" noValidate="" id="Myform" onSubmit={handleSubmit}>
            <h2>Detail Product</h2> 
            <div className="col-12 mb-3">
                <Input
                    classLabel={'form-label'}
                    label={'Product Name'}
                    type={'text'}
                    classInput={'form-control'}
                    value={productName}
                    dataTestId={'inputproductName'}
                    onChange={(e) => {
                        const regex = /^[a-zA-Z0-9\s]*$/;
                        const inputValue = e.target.value;
                    
                        if (!regex.test(inputValue)) {
                          alert("Product Name must not contain symbols");
                        } else if (inputValue.length > 10) {
                          alert("Product Name must not exceed 10 characters.");
                        } else {
                          setProductName(inputValue);
                        }
                      }}
                />
                {formErrors.ProductName && (
                <span className="error-message">The Product Name field must be filled in</span>
                )}
            </div>


            <div className="col-12 mb-3">
                <label htmlFor="nationality" className="form-label">Product Category</label>
                <select className="form-select" aria-label="" id="Pcategory" required="" 
                   value={productCategory}
                //    data-testid={'select-option'}
                   onChange={(e) =>  {
                        const value = e.target.value;
                        const regex = /^[a-zA-Z0-9\s]*$/;
                    
                        if (!regex.test(value)) {
                          alert('Product category not valid!');
                        } else {
                          alert('Input valid');
                        }
                    
                        setproductCategory(value);
                      }}
                    >
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
                <Input
                    classLabel={'form-label'}
                    label={'Image of Product'}
                    type={'file'}
                    classInput={'form-control text-primary border-primary'}
                    value={imageofProduct}
                    onChange={(e) => {
                        const file = e.target.files[0];
                        const fileType = file.type;
                        if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
                          alert('invalid file type');
                          return;
                        }
                        setimageofProduct(e.target.value)
                  
                      }}
                  
                />
                    {formErrors.imageofProduct && (
                    <span className="error-message">The Image of Product field must be filled in</span>
                    )}
            </div>


            <div className="col-12 mb-3 custom-file-button">
                <Label 
                    classLabel={'form-label'}
                    label={'Product Freshness'}
                />
                <div className="form-check">
                    <Input
                        classLabel={'form-check-label'}
                        label={'Brand New'}
                        type={'radio'}
                        classInput={'form-check-input'}
                        name={'exampleRadios'}
                        value={'Brand New'}
                        checked={productFreshness === 'Brand New'}
                        onChange={handleFreshness}
                    />
                </div>
                <div className="form-check">
                    <Input
                        classLabel={'form-check-label'}
                        label={'Second Hand'}
                        type={'radio'}
                        classInput={'form-check-input'}
                        name={'exampleRadios'}
                        value={'Second Hand'}
                        checked={productFreshness === 'Second Hand'}
                        onChange={handleFreshness}
                    />
                </div>
                <div className="form-check">
                    <Input
                        classLabel={'form-check-label'}
                        label={'Refufbished'}
                        type={'radio'}
                        classInput={'form-check-input'}
                        name={'exampleRadios'}
                        value={'Refufbished'}
                        checked={productFreshness === 'Refufbished'}
                        onChange={handleFreshness}
                    />
                </div>
            </div>

            <div className="col-12 mb-3 custom-file-button">
                <Label 
                    classLabel={'form-label'}
                    label={'Additional Description'}
                />
                <div className="form-floating">
                     <Textarea
                        classArea= {'form-control'}
                        placeholder= {'Leave a comment here'}  
                        value={addDescription}
                        textareaTestId={'textareaLabel'}
                        onChange={(e) => setaddDescription(e.target.value)}
                     />
                     {formErrors.addDescription && (
                     <span className="error-message">The Additional Description field must be filled in</span>
                     )}        
                </div>
            </div>


            <div className="col-12 mb-3">
                <Input
                    classLabel={'form-label'}
                    label={'Product Price'}
                    type={'text'}
                    classInput={'form-control'}
                    placeholder={'$ 100'}
                    value={productPrice}
                    onChange={(e) =>  {
                        const { value } = e.target;
                        setproductPrice(value);
                        setIsPriceValid(/^\d+(\.\d{1,2})?$/.test(value));

                        e.preventDefault();
                        if (isPriceValid) {
                            console.log(`${productPrice}`);
                        } else {
                          alert('Invalid product price!');
                        }
                      }}
                     />

                {formErrors.productPrice && (
                <span className="error-message">Please enter a valid Prouct price.</span>
                )}
            </div>

            <div className="container text-center">
            <button type="submit" className="btn btn-primary text-center" data-bs-target="#modalContent" style={{ width: 500 }}
            id="submit" onClick={onSubmit}>Submit</button>
            </div>
            <br /><br />

            <Table />   
      </form>
      
        
    )
}

export default Form