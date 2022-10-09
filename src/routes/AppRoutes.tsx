import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Home from "../pages/home/Home"


const StylePageNotFound = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000a3;

    h1{
        font-size: 4rem;
        color: #fff;
    }

`


const AppRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}></Route>
                <Route path="*" element = {<StylePageNotFound><h1>PÁGINA NÃO ENCONTRADA! </h1> </StylePageNotFound>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;