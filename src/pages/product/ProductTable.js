import React from 'react';
import _ from 'lodash';
import {ProductRow} from "./ProductRow";
import {ProductCategoryRow} from "./ProductCategoryRow";

export const ProductTable = (props) => {

    const category = _.groupBy(props.products, 'category');
    console.log(category);

    const categoryList = []; // 8개의 React Element를 저장.

    for (let key in category) {
        // 8개의 컴포넌트를 만든다.
        // 1개의 productCategoryRow 컴포넌트와 n개의 productRow 컴포넌트를 만든다.
        categoryList.push(<ProductCategoryRow category={key} key={key} />);
        category[key].forEach(item => {
            categoryList.push(<ProductRow name={item.name} pricd={item.price} stocked={item.stocked} />);
        })
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>

                {categoryList}

                {/*<tr colspan="2">*/}
                {/*    <th>Sporting Goods</th>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>Football</td>*/}
                {/*    <td>$49.99</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>Baseball</td>*/}
                {/*    <td>$9.99</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td style={{'color': 'red'}}>Basketball</td>*/}
                {/*    <td>$29.99</td>*/}
                {/*</tr>*/}
                {/*<tr colspan="2">*/}
                {/*    <th>Eletronics</th>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>iPot Touch</td>*/}
                {/*    <td>$99.99</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td style={{'color': 'red'}}>iPhone 5</td>*/}
                {/*    <td>$399.99</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>Nuxus 7</td>*/}
                {/*    <td>$199.99</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </>
    );
}