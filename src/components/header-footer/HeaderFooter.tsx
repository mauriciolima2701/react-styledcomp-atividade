import HeaderFooterStyle from "./HeaderFooterStyle";

interface HeaderFooter{
    texto: string;
    imagem: string;
    darkmode?: boolean; 
}



const HeaderFooter: React.FC<HeaderFooter> = ({texto, imagem}) =>{
    return(
        <HeaderFooterStyle>
            <img src={imagem} alt="Imagem do céu" />
            <h1> {texto} </h1>
        </HeaderFooterStyle>
    )

}

export default HeaderFooter;