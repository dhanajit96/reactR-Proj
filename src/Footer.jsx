import './Footer.css'
import logo from './disney.svg'

const Footer = ()=>{
    return(
    <div className="footer">
        <div className="logo">
<img src={logo} alt="" />
        </div>
        <div className="footer_links">
            <a href="/">Terms and Privacy Notice</a>
            <a href="/">Send us feedback</a>
            <a href="/">Help</a>
        </div>
        <div className="copyright">
       <p> © 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
    
    )
}
export default Footer;