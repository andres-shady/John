import photo4 from "../image/photo4.png";
import photo5 from "../image/photo5.jpg";
import photo6 from "../image/photo6.jpg";
import photo7 from "../image/photo7.jpg";
import photo8 from "../image/photo8.jpg";
import photo9 from "../image/photo9.jpg";
import Card from 'react-bootstrap/Card';
import"./realisation.css"

function Blog() {
  return (
    <>
        <p className="pe">Dans ce artictle je vous montre tout les etapes et
           les choses que j'ai travailler pendant ma formation.
           je vais aussi vous montre les haut et les bas de ma formation
        </p>
      <Card className="dive">
        <Card.Img className="image" variant="top" src={photo4}/>
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo5} />
        <Card.Body>
          <Card.Text className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo6} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo7} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo8} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo9} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
     
    </>
  );
}
export default Blog;