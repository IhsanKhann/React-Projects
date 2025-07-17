import './Card.css' ;

function Card(props) {
    return (
        <>
            <div className="card">
                <h2>
                    {props.title}
                </h2>
                <h4>
                    {props.subtitle}
                </h4>
                <p> {props.description} </p>

            </div>
        </>
    )
}

export default Card;