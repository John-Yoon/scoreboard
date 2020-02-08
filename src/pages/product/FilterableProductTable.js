import React, {useState} from 'react';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

// STEP1. 정적인 디자인 적용.
// STEP2. props, state, hooks

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export const FilterableProductTable = (props) => {
    const [keyword, setKeyword] = useState(''); // input box's status
    const [stockChecked, setStockChecked] = useState(false); // check box status

    return (
        <div>
            {/*<SearchBar/>*/}
            {/*<ProductTable>*/}
            {/*    <ProductCategoryRow>*/}
            {/*        <ProductRow/>*/}
            {/*    </ProductCategoryRow>*/}
            {/*</ProductTable>*/}
            <SearchBar keyword={keyword} setKeyword={setKeyword}
                       stockChecked={stockChecked} setStockChecked={setStockChecked}/>
            <ProductTable
                products={products.filter(item => item.name.indexOf(keyword) >= 0).filter(item =>stockChecked ? item.stocked : true)}/>
        </div>
    );
}