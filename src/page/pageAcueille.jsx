import React from "react";
import image from"./ordinateur.jpg"
import profil from"./profil.jpg";
import"./accueille.css";

function Acueille(){
    return(
        <body>
            <main>
                <div className="div1" style={{backgroundImage:`url(${image})`}}>
                 <h1>BIENVENUE</h1>
                <h2>Je vous souhaite une bonne experience</h2>
                <button className="bouton1">en savoir plus</button>
                </div>

                <div className="div2">
                    <h1>John Doe</h1>
                    <p className="p1">Bonjour je m'appelle Jhon Doe et je viens de terminer mon formation de developpeur web</p>
                    <img src={profil} alt="photo de profil"/>
                    <article>
                    <p className="p2">
                     Je maitrisse les langages HTML, CSS et JavaScript, 
                     qui sont essentiels pour la construction de sites web.
                      </p>
                      <p className="p3">
                      Le suivi des modifications apportées au code est crucial
                      facilitant ainsi la correction des erreurs donc je maitrisse bien aussi cela.
                      </p>
                      <p className="p4">
                       Je sais créez des sites conviviaux en tenant compte des besoins des utilisateurs
                      </p>
                      <p className="p5">
                      je sais collaborez avec des équipes et des clients. La communication 
                      est essentielle pour réussir dans ce métier.
                      </p>
                      <p className="p6">
                      je sais etre attentif aux petits éléments, car ils peuvent avoir
                       un impact significatif sur la qualité du site web1
                      </p>
                    
                    </article>
                     
                    
                   
                </div>
               
            </main>
            
        </body>
         
    )
    
}
export default Acueille;
