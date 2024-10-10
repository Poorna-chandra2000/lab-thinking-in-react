import React from "react";

function ProductTable(props) {

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default ProductTable;