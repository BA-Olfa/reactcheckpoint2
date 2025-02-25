import './App.css';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import dataProduit from './product';
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageUser from './user.png'

const firstName = "Olfa";
const devise="TND"

function App() {
  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem" }} className="mx-auto text-center">
        <Image src={dataProduit.image} />
        <Card.Body>
          <Card.Title><Name name={dataProduit.Name} /></Card.Title>
          <Card.Text><Description description={dataProduit.Description} /></Card.Text>
          <h5><Price price={dataProduit.Price} />{devise}</h5>
          <Button className='btn-add-panier'>Ajouter au panier</Button>
        </Card.Body>
      </Card>
     <div className="text-center mt-3">
        <h2>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h2>
        {firstName && <img src={ImageUser} alt="User" className="mt-2" />}
      </div>
    </div>
  );
}

export default App;
