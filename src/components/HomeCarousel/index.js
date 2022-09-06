import { minHeight } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel  >
      <Carousel.Item style={{height:'50vh'}}>
        <img
          className="d-block w-100"
          src="images/banner.png"
          alt="First slide"
          style={{
            minHeight:'500px',
            
          }}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'50vh'}}>
        <img
          className="d-block w-100"
          src="images/carousel/second-slide.jpg"
          alt="Second slide"
          style={{
            minHeight:'auto',
            opacity:'0.7    '
            
          }}
        />
        
        <Carousel.Caption >
          <h3 >Amplia gama de componentes</h3>
          <p>
          Todo lo que necesitas en electroncia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'50vh'}}>
        <img
          className="d-block w-100"
          src="images/carousel/third-slide.jpg"
          alt="Third slide"
          style={{
            opacity:'0.7',
            minHeight:'500px'
          }}
        />

        <Carousel.Caption>
          <h3>Llegamos siempre</h3>
          <p>
           No importa donde te encuentres
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;