import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterStyle = styled.div`
    
    padding: 50px;

    display: flex;
    justify-content: space-between;

    text-align: center;

    line-height: 8px;

    ul{
        font-size: .9rem;
        display: flex;
        text-decoration: none;
        list-style: none;
    }

    li{
        padding-right: 10px;
        color: #0089f1;
        cursor: pointer;
    }

    p{
        margin-left: -90px;
        font-size: .7rem;
    }

    .icon-footer{
        display: flex;
        gap: 10px;
        margin-right: 30px;
    }

    .icon{
        cursor: pointer;
    }

`



const Footer: React.FC = () =>{
    return (
        <FooterStyle>
            <div>
                <ul>
                    <li>About</li>
                    <li> . </li>
                    <li>Contact</li>
                    <li> . </li>
                    <li>Terms of Use</li>
                    <li> . </li>
                    <li>Privacy Policy </li>
                </ul>
                <p> &copy; Your Website 2022. All Rights Reserved. </p>
            </div>

            <div className="icon-footer">
                <FacebookIcon className="icon" color="primary" fontSize="small" />
                
                <TwitterIcon className="icon" color="primary" fontSize="small"/>

                <InstagramIcon className="icon" color="primary" fontSize="small"/>
            </div>
        </FooterStyle>
        )
}

export default Footer;