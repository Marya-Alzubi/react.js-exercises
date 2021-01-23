import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Button } from 'react-bootstrap';

function App(props) {
  return (
    <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.text}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="primary"></Button>
  </Card.Body>
  </Card>
  )
}

export default App;
