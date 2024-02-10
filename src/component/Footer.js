import"./footer.css";
import github from "./github.jpg";

function Footer(){
    return(
    <footer className="footer">

        <div className="premiere__div">
         <ul className="liste__element">
            <li className="Element">MOURCHIDI Abdallah</li>
            <li className="Element"><address>Rue Toulousaine Chirongui</address> </li>
            <li className="Element">  0639004577</li>
         </ul>
         <a href="https://github.com/andres-shady"><img src={github} alt="photo d'un icone github"/> </a>
        </div>

        <div className="deuxieme--div">
            <ul className="liste__element">

                <li>
                <a className="hyperlien" href="/">Acueille</a>
                </li>
           
                 <li >
                  <a className="hyperlien" href="/MentionLegal" >Mention Legal</a>
                </li> 

                <li >
                 <a className="hyperlien" href="/Service" >Service</a>
                </li> 

                 <li >
                 <a className="hyperlien" href="/Contact" >Contact</a>
                 </li> 
            </ul>

        </div>

        <div className="troisieme__div">

            <ul className="liste__element">
                <li>
                    <a className="hyperlien" href="/Realisation">Realisation</a>
                </li> 
            </ul>

        </div>
       
        <div className="quatrieme__div">
            <ul className="liste__element">
               <li>
                  <a className="hyperlien" href="/Blog">Blog</a>
               </li> 
            </ul>

        </div>

    </footer>
    )
}
export default Footer;