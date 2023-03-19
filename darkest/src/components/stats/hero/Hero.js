import './hero.scss';
import { redirect, Route, useParams } from "react-router-dom";
import Home from '../../home/Home';
import { useEffect, useState } from 'react';

function Hero(props) {

    const lg = props.lg;
    // const heroes = props.heroes;
    const { id } = useParams();

    useEffect(() => {
        // fetch("/api/heroes/" + id)
        //     .then((res) => res.json())
        //     .then((data) => {

        //     });
    }, []);


    if (!['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'].includes(id)) {
        return (<Home></Home>);
    }

    return (
        <div className='Hero'>
            <div className='hero-left'>
                <img src={lg[id]} />
            </div>
            <div className='hero-right'>
                <div className='title'>
                    <h2 className='display-3'> Hero Name</h2>
                </div>

                <div className='abilities'>
                    Abilities
                </div>

                <div className='content'>
                    <div className='content-left'>
                        Content Left
                    </div>

                    <div className='content-right'>
                        Content right

                    </div>

                </div>
            </div>
        </div>);
}

export default Hero;