import styled from "styled-components";


const CardTwoStyle = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    
    img{
        width: 100%;
    }

    .image-card{
        width: 53vw;       
    }

    .text-card{
        text-align: justify;
        padding: 50px;
        flex-basis: 47%;
    }

    @media (max-width: 768px){
        flex-wrap: wrap;
        justify-content: center;

        .image-card{
           margin-top: 35px;
           width: 80vw;       
    }

    .text-card{
        padding: 20px;
        flex-basis: 90%;
        text-align: justify;
    }
       
    }

`

const CardTwo = () =>{

    return(

        <CardTwoStyle>
            <div className="image-card">
                <img src="https://img.freepik.com/fotos-premium/codigo-de-programacao-na-tela-do-computador-desenvolvimento-de-software-escrever-o-codigo-do-programa-no-computador_372999-5803.jpg" alt="" />
            </div>

            <div className="text-card">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti aliquid voluptates sed tempore nihil nisi commodi!
                    Pariatur corporis suscipit deserunt totam error consectetur,
                    laceat facere necessitatibus tempore nobis, ad optio!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti aliquid voluptates sed tempore nihil nisi commodi!
                    Pariatur corporis suscipit deserunt totam error consectetur,
                    laceat facere necessitatibus tempore nobis, ad optio!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti aliquid voluptates sed tempore nihil nisi commodi!
                    Pariatur corporis suscipit deserunt totam error consectetur,
                    laceat facere necessitatibus tempore nobis, ad optio!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti aliquid voluptates sed tempore nihil nisi commodi!
                    Pariatur corporis suscipit deserunt totam error consectetur,
                    laceat facere necessitatibus tempore nobis, ad optio!
                </p>
            </div>

        </CardTwoStyle>

    )
}

export default CardTwo;