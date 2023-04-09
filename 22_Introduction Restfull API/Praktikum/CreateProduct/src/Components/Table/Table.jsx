import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from "../redux/productreducerSlice";


const Table = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();


    return(
        
        <div className="col-12 text-center">
            <h3>List Product</h3>
                <table className="table table-striped-columns" id="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Image of Product</th>
                            <th scope="col">Product Freshness</th>
                            <th scope="col">Additional Description</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products?.map((item, key) => (
                        <tr key={item.id}>
                            <td>{key}</td>
                            <td>{item.productName}</td>
                            <td>{item.productCategory}</td>
                            <td>{item.imageofProduct}</td>
                            <td>{item.productFreshness}</td>
                            <td>{item.addDescription}</td>
                            <td>{item.productPrice}</td>
                            <td>
                            <button 
                                className="btn btn-danger m-1" 
                                onClick={() => dispatch(deleteProduct(item.id))}>Delete</button>
                            <br />
                            <button
                                type="button"
                                className="btn btn-success btn-sm">Edit</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br />
                <input
                    type="text"
                    placeholder="Search by Product Name"
                    style={{ height: 30, width: "25%" }} />
                     <br />
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    >Deletion</button>
                <button type="button" className="btn btn-outline-success btn-sm">Search</button>        
        </div>

    )
}

export default Table