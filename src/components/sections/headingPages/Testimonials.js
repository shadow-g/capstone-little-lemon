import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
import AlanChen from '../../../assets/Alan chen.png';
import MichaelCaldwell from '../../../assets/Micheal Caldwell.png';
import CaseyLau from '../../../assets/Casey lau.png';
import JohnRosemblum from '../../../assets/John Rosenblum.png';
import JimReynor from '../../../assets/Jim Reynor.png';
import BrianDean from '../../../assets/Brian Dean.png';
import TylerTohmine from '../../../assets/Tyler Tohmine.png';
import JacjHu from '../../../assets/Jack Hu.png'


export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Micheal Caldwell" img={MichaelCaldwell} description="This is the best Mediterranean food that I've ever had!" />
                <TestimonialCard name="Alan Chen" img={AlanChen} description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard name="Casey Lau" img={CaseyLau} description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" img={JohnRosemblum} description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                <TestimonialCard name="Jim Reynor" img={JimReynor} description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Brian Dean" img={BrianDean} description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tyler Tohmine" img={TylerTohmine} description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard name="Jack Hu" img={JacjHu} description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}