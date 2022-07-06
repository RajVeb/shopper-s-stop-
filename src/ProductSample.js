import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import tshirt7 from './Mens/tshirt7.jpg';
import tshirt2 from './Mens/tshirt2.jpg';
import tshirt3 from './Mens/tshirt3.jpg';
import tshirt4 from './Mens/tshirt4.jpg';
import tshirt5 from './Mens/tshirt5.jpg';
import tshirt6 from './Mens/tshirt6.jpg';
import './App.css';
function ProductSample() {
  return (
    <div>
      <div className='tshirt'>
          <h1>T-SHIRTS</h1>
      </div>
    <CardGroup className='CG'>
      <Card>
        <Card.Img variant="top" src={tshirt7} />
        <Card.Body>
          <Card.Title> Price: ₹499.00</Card.Title>
          <Card.Text>
          Scott International Men's Regular Fit T-Shirt 
          
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={tshirt2} />
        <Card.Body>
          <Card.Title> Price:	₹649.00 - ₹1,583.00</Card.Title>
          <Card.Text>
          U.S. POLO ASSN. Men's Solid Regular Fit Cotton Polo
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src= {tshirt3}/>
        <Card.Body>
          <Card.Title> Price:	₹199.00 - ₹429.00</Card.Title>
          <Card.Text>
          EYEBOGLER Men's Loose Fit T-Shirt

          </Card.Text>
        </Card.Body>
        
      </Card>
     
    </CardGroup>
    
   <CardGroup  className='CG'>
    <Card>
        <Card.Img variant="top" src={tshirt4} />
        <Card.Body>
          <Card.Title>Price:	₹349.00 - ₹499.00</Card.Title>
          <Card.Text>
          RodZen Men's Cotton Half Sleeve Regular Fit Striped T-Shirt
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={tshirt5} />
        <Card.Body>
          <Card.Title>Price:	₹490.00 - ₹1,099.00</Card.Title>
          <Card.Text>
          Van Heusen Men's Solid Regular Fit Polo
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={tshirt6} />
        <Card.Body>
          <Card.Title>Price:	₹399.00</Card.Title>
          <Card.Text>
          Austin Wood Men's Regular Fit T-Shirt
          </Card.Text>
        </Card.Body>
      </Card>
   </CardGroup>
   </div>


  );
}

export default ProductSample;



