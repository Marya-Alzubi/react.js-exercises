import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/Card';
import {Data} from './Data';
import reportWebVitals from './reportWebVitals';
import {  Container , Row , Col} from 'react-bootstrap';


function Students() {
  return (
    <Container className='mt-4'>
      <Row >
      {
      Data.map(item => <App image={item.image} text={item.text} studentImage={item.studentImage} linkedin={item.linkedin} facebook={item.facebook} gitHub={item.gitHub} />)
      }
      </Row>
    </Container>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Students />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
