import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
import AlanChen from '../../../assets/Alan chen.png';
import MichaelCaldwell from '../../../assets/Micheal Caldwell.png';
import CaseyLau from '../../../assets/Casey lau.png';
import JohnRosemblum from '../../../assets/John Rosenblum.png';
import JimReynor from '../../../assets/Jim Reynor.png';
import BrianDean from '../../../assets/Brian Dean.png';
import TylerTohmine from '../../../assets/Tyler Tohmine.png';
import JackHu from '../../../assets/Jack Hu.png'


export default function CarouselPage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <TestimonialCard img={AlanChen} name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!" />
            <TestimonialCard img={AlanChen} name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard img={CaseyLau} name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard img={JohnRosemblum} name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard img={JimReynor} name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard img={BrianDean} name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard img={TylerTohmine} name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard img={JackHu} name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
        </Carousel>
    )
}