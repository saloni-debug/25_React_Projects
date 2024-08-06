import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import './style.css';
export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const starArr = [1, 2, 3, 4, 5]
    return (
        <div className="wrapper">
            <h1>Star Rating</h1>
            <div className='rating'>
                {starArr.map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <span onClick={() => setRating(ratingValue)}>
                            <i className="fa fa-star" style={{ color: (ratingValue <= (hover || rating)) ? "#ffc107" : "#000000" }}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}></i>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}