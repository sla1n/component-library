import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";
import { ImAirplane, ImAlarm } from "react-icons/im";
import TestimonialText from "./components/Testimonial/TestimonialText";
import testimonialPic from "./assets/123.webp";

function App() {
  return (
    <>
      <div className="test2">
        <div className="badges">
          <Badge color="green" isPill={true}>
            <Badge.Title>Green</Badge.Title>
          </Badge>
          <Badge color="indigo" isPill={false}>
            <Badge.Title>Indigo</Badge.Title>
          </Badge>
          <Badge color="purple" isPill={true}>
            <Badge.Title>Purple</Badge.Title>
          </Badge>
          <Badge color="blue" isPill={true}>
            <Badge.Title>Blue</Badge.Title>
          </Badge>
          <Badge color="red" isPill={true}>
            <Badge.Title>Red</Badge.Title>
          </Badge>
          <Badge color="yellow" isPill={false}>
            <Badge.Title>Yellow</Badge.Title>
          </Badge>
          <Badge color="gray" isPill={true}>
            <Badge.Title>Gray</Badge.Title>
          </Badge>
          <Badge color="pink" isPill={false}>
            <Badge.Title>Pink</Badge.Title>
          </Badge>
        </div>
        <Banner status="success">
          <Banner.Title>Congrtats</Banner.Title>
          <Banner.Text>
            Congratulations on winning Sigma Battle Cup #12
          </Banner.Text>
        </Banner>
        <Banner status="warning">
          <Banner.Title>Warning</Banner.Title>
        </Banner>
        <Banner status="error">
          <Banner.Title>There is a problem with your rizz</Banner.Title>
          <Banner.Text>
            Unfortunately, u have no skibidi points left and cannot enter
            toilet.
          </Banner.Text>
        </Banner>
        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
        </Banner>
        <div className="cards-container mb-3rem">
          <Card>
            <Card.Icon iconColor="red">
              <ImAirplane />
            </Card.Icon>
            <Card.Title>Title of a card</Card.Title>
            <Card.Text>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Text>
          </Card>
          <Card>
            <Card.Icon iconColor="white" iconBackgroundColor="blue">
              <ImAlarm />
            </Card.Icon>
            <Card.Title>Daily Reminder</Card.Title>
            <Card.Text>Please, complete your next lesson.</Card.Text>
          </Card>
          <Card>
            <Card.Icon iconColor="white" iconBackgroundColor="blue">
              <ImAlarm />
            </Card.Icon>
            <Card.Title>Daily Reminder</Card.Title>
            <Card.Text>Please, complete your next lesson.</Card.Text>
          </Card>
        </div>
        <Testimonial img={testimonialPic}>
          <Testimonial.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            porro tempora iste similique. Neque blanditiis similique nostrum
            debitis excepturi sint, tenetur dicta odit vitae eligendi! Pariatur
            recusandae atque quibusdam cumque.
          </Testimonial.Text>
          <Testimonial.Person>Vitalii Pantsyr</Testimonial.Person>
          <Testimonial.Position>CEO</Testimonial.Position>
        </Testimonial>
      </div>
    </>
  );
}

export default App;
