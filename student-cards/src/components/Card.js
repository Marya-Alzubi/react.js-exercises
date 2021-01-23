import '../assets/css/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Button , Col } from 'react-bootstrap';

function App(props) {
  return (
    <Col xs={4} className='mb-4' >
  <Card style={{ width: '18rem' }}>
  <div>
    <Card.Img className="hero-image" variant="top" src={props.image} />
    <div className="hero-inside">
      {/* <img className='studentImage' src={props.studentImage} /> */}
      <button><i className="edit far fa-edit"></i></button>
    </div>
  </div>
 
  <Card.Body className='mt-4'>
  <img className='studentImage' src={props.studentImage} />
    <Card.Title className='align'>{props.text}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <div className="links">
                    <a href={props.linkedin} target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href={props.gitHub} target="_blank"><i className="fab fa-github fa-2x"></i></a>
                    <a href={props.facebook} target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a>
                </div>
  </Card.Body>
  </Card>
  </Col>
  )
}

export default App;
