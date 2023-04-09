import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const GetProductList = gql`
    query MyQuery {
        Product {
            id
            Product_name
            Product_category
            Product_freshness
            Additional_information
            Price    
        }
    }
`

const ProductList = () => {
    const { data, loading, error } = useQuery(GetProductList)
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('loading: ', loading);
        console.log('data gql: ', data);
        console.log('error: ', error);

        //check if data is still fetching
        if(!loading && error !== undefined){

            setProducts(data.Product)
        }

    })


    return(
        <>
            {
                loading?
                    <p>wait,masih Loading </p>:
                    data?.Product.map(item => 
                        <div>
                            <p>{item.Product_name}</p>
                        </div>
                    )
            }
        </>
    )
}

export default ProductList