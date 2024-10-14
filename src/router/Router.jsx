import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/Home";
import { Details } from "../Pages/Details/Details";
import { NotFound } from "../Pages/NotFoundPage/NotFound";


export function Router(){
    return(
        <BrowserRouter basename="/React-Movie">
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path="/details" element = {<Details/>}/>
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}