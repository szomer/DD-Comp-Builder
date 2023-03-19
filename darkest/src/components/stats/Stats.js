import './stats.scss';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

register();

function Stats(props) {




    const heroes = props.heroes; // heroes
    const lg = props.lg; // images

    return (<div className="Stats">

        <div className='stats-container'>


            <swiper-container navigation="true" scrollbar="false" pagination="false" slides-per-view="3" speed="300" loop="true" css-mode="true">


                {heroes.map((item) => {
                    return <swiper-slide>
                        <div className='hero'>

                            <Link to={'/stats/' + item.id}>
                                <img src={lg[item.id]} />
                            </Link>

                            <h3>{item.name}</h3>

                        </div>
                    </swiper-slide>
                })}


            </swiper-container>
        </div>
    </div >)
}

export default Stats;