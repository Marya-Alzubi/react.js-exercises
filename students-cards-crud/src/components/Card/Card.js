import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Button , Col } from 'react-bootstrap';

function CardComp(props) {
  return (
    <Col xl={4} lg={4} md={6} sm={12}  xs={12}     className='mb-4' >
  <Card style={{ width: '18rem', height:'25rem' }}>
  <div>
    <Card.Img className="hero-image" variant="top" src={props.image} />
    <div className="hero-inside">
      {/* <img className='studentImage' src={props.studentImage} /> */}
      <button onClick={props.delete} ><i className="fas fa-trash-alt"></i></button>
    </div>
  </div>
 
  <Card.Body className='cardBody mt-4'>
  <img className='studentImage hero-inside2' src={props.studentImage} />
    <Card.Title className='align'>{props.text}</Card.Title>
    <input type="text" onChange={props.change} />
    {/*<Button style={{display:"block"}} onClick={props.nickName} id='nickName' variant="outline-secondary">nick name </Button>*/}
    {/*<Button style={{display:"none"}} onClick={props.oldName} id='oldName' variant="outline-secondary">old name </Button>*/}
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

export default CardComp;
