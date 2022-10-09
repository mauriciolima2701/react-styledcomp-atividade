import styled from "styled-components";


const CardOneStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
       

    img{
        width: 100%;
    }

    .image-card{
        width: 50%;   
    }

    .text-card{
        padding: 50px;
        flex-basis: 40%;
        text-align: justify;
    }

    @media (max-width: 768px){
        flex-wrap: wrap;
        justify-content: center;
       
    }

    .image-card{
           width: 80vw;       
    }

    .text-card{
        padding: 20px;
        flex-basis: 90%;
        text-align: justify;
    }

`

const CardOne = () =>{

    return(

        <CardOneStyle>
            
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
                <img src="https://s2.glbimg.com/hV5oqsWKq0Qsr8_R_7EZgg3uP0E=/0x0:2000x1354/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/Y/l/z0fC5lRYypal8QI9exRA/rog-phone-2-01.jpg" alt="" />
            </div>
            
        </CardOneStyle>

    )
}

export default CardOne;