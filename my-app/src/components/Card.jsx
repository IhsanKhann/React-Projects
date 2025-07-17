import './Card.css';

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

                <button className='CardBtn' style={{ backgroundColor: props.BtnColor}}>
                    {props.BtnText}
                </button>
            </div>

        </>
    )
}

let defaultProps = {
    title: 'React',
    subtitle: 'A JavaScript library',
    description: 'React helps build interactive UIs.',
    BtnText: 'Click Me',
    BtnColor: 'blueVoilet',
}

export default Card;