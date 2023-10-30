
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={props.img} alt="Customer images" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}