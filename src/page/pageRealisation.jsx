import photo1 from"../image/photo1.png";
import photo2 from"../image/photo2.jpg";
import photo3 from"../image/photo3.jpg";
import Card from 'react-bootstrap/Card';
import"./realisation.css"

function Realisation() {
  return (
    <>
      <Card className="dive">
        <Card.Img className="image" variant="top" src={photo1}  />
        <Card.Body>
          <Card.Text className="texte">
          j'ai commencer un <mark className="marke"> Plateformes d’affiliation en ligne</mark>  : Le marketing d’affiliation est un moyen efficace pour les entreprises de générer des revenus passifs
          .
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        
        <Card.Img className="image" variant="bottom" src={photo2} />
        <Card.Body>
          <Card.Text className="texte">
         j'ai creer un petit <mark className="marke">Plateformes d’apprentissage en ligne</mark> : ca ma permis de comprendre comment attiré
         des clients avec des videos et des images
          </Card.Text>
          </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img className="image" variant="top" src={photo3} />
        <Card.Body>
          <Card.Text className="texte">
          <mark className="marke">Site d’association à but non lucratif</mark> 
          gérez un organisme de bienfaisance ma permis de faire connaitre ma cause
          </Card.Text>
        </Card.Body>
      </Card>
    
    </>
  );
}

export default Realisation;