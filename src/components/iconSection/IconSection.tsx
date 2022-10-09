import styled from "styled-components";

interface IconSection {
    icone: React.ReactElement;
    titulo: string;
    texto: string;
}



export const IconStyle = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* background-color: #f0f0f0; */
    
    div{
        text-align: center;
        line-height: .8rem;
        margin-bottom: 1.5rem;
    }

    i{
        margin-top: 3rem;
        font-size: 90px;
        color: #0698e1;
    }
`




const IconSection: React.FC<IconSection> = ({icone, titulo, texto}) =>{

    return(
        <>
        <div>    
            {icone}
            <h3> {titulo} </h3>
            <p> {texto} </p>
        </div>
        </>
    )
}


export default IconSection;