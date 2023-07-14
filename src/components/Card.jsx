import PropTypes from 'prop-types';

function Card({ title, blurb, imageSrc, price }) {
    return (
        <article className='card'>
            <img src={imageSrc} alt="" />
            <section className='cardText'>
                <article className='cardLabel'>
                    <h3>{title}</h3>
                    <h3 id='price'>{price}</h3>
                </article>
                <p>{blurb}</p>
            </section>
        </article>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Card;
