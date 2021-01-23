import App from './App';

let Data = [
    {image: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' , text : 'test'},
    {image: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' , text : 'test222'},
    {image: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' , text : 'test222'}
  ];

  const mapData =Data.map(item => <App image={item.image} text={item.text} />)
  
  function Students() {
    return (
      <div >
        {mapData}
      </div>
    )
  }

  export default Students;