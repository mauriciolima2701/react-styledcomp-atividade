import HeaderFooter from "../../components/header-footer/HeaderFooter";

import Footer from "../../components/footer/Footer";
import CardOne from "../../components/cads/Card1";
import CardTwo from "../../components/cads/Card2";
import CardThree from "../../components/cads/Card3";
import IconSection, { IconStyle } from "../../components/iconSection/IconSection";
import { ClassNames } from "@emotion/react";



const Home: React.FC = () =>{
    return(
        <>  
            <HeaderFooter texto="Minha primeira página em React" imagem="https://img.freepik.com/premium-photo/beautiful-sky-blue-sea-sea-beach_196038-298.jpg?w=996"/>
            <IconStyle>
                <IconSection titulo="Somente para desktop" texto="Vamos aprender, como utilizar um framework." icone={<i className="far fa-desktop" />} />
                <IconSection titulo="Criando componentes" texto="Utilizamos o Styled Components." icone={<i className="far fa-layer-group" />} />
                <IconSection titulo="Fácil aproveitamento" texto="Estamos no caminho." icone={<i className="far fa-check-circle" />} />
            </IconStyle>
            <CardOne />
            <CardTwo />
            <CardThree />
            <HeaderFooter texto="Conteúdo" imagem="https://img.freepik.com/premium-photo/beautiful-sky-blue-sea-sea-beach_196038-298.jpg?w=996"/>
            <Footer />
        </>
        
    )
}

export default Home;