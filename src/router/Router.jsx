import {  HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/Home";
import { Details } from "../Pages/Details/Details";
import { NotFound } from "../Pages/NotFoundPage/NotFound";


export function Router(){
    return(
        <HashRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path="/details/" element = {<Details/>}/>
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
        </HashRouter>
    )
}