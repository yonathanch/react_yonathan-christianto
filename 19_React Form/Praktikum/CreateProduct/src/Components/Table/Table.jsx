const Table = ({data}) => {
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
                        { data?.map((item, key) => (
                        <tr>
                            <td>{key}</td>
                            <td>{item.productName}</td>
                            <td>{item.productCategory}</td>
                            <td>{item.imageofProduct}</td>
                            <td>{item.productFreshness}</td>
                            <td>{item.addDescription}</td>
                            <td>{item.productPrice}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
            {/* <input
            type="text"
            placeholder="Search by Product Name"
            style={{ height: 30, width: "25%" }} />
            <br />
            <button
                type="button"
                className="btn btn-success btn-sm"
                onclick="deletetable()">Deletion</button>
            <button type="button" className="btn btn-outline-success btn-sm">Search</button> */}

</div>

    )
}

export default Table