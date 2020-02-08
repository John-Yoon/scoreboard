import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Heroes} from "./pages/heroes/Heroes";
import {Scoreboard} from "./pages/scoreboard/Scoreboard";
import {FilterableProductTable} from "./pages/product/FilterableProductTable";
import {Menu} from "./Menu";

export const Root = (props) => {
    return (
        <BrowserRouter>
            <Menu></Menu>
            <Route path="/" exact component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
            <Route path="/product" component={FilterableProductTable}></Route>
        </BrowserRouter>
    );
}