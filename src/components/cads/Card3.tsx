import styled from "styled-components";


const CardThreeStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    img{
        width: 100%;
    }

    .image-card{
        width: 47%;
        
    }

    .text-card{
        padding: 50px;
        flex-basis: 50%;
        text-align: justify;
    }

    @media (max-width: 768px){
        flex-wrap: wrap;
        justify-content: center;

        .image-card{
           width: 80vw;       
    }

    .text-card{
        padding: 20px;
        flex-basis: 90%;
        text-align: justify;
    }
       
    }

`

const CardThree = () =>{

    return(

        <CardThreeStyle>
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

            <div className="image-card">
                <img src="https://cangurunews.com.br/wp-content/uploads/2020/10/dados-filhos-internet-696x450.jpg" alt="" />
            </div>

        </CardThreeStyle>

    )
}

export default CardThree;