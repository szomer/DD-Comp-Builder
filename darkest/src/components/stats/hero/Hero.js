import './hero.scss';
import { Link, useParams } from "react-router-dom";
import Home from '../../home/Home';
import { useEffect, useState } from 'react';
import Resistances from '../../resistances/Resistances';
import Levels from '../../levels/Levels';
import Abilities from '../../abilities/Abilities';
import leftArrow from './left-arrow.png';

function Hero(props) {
    const [heroName, setHeroName] = useState('Loading..');
    const [resistances, setResistances] = useState({
        bleed: "..", blight: "..", deathblow: "..", debuff: "..",
        disease: "", move: "..", stun: "..", trap: ".."
    });
    const [resolve1, setResolve1] = useState({
        crit: "..", dmg: "..", dodge: "..", maxhp: "..", spd: ".."
    });
    const [resolve2, setResolve2] = useState({
        crit: "..", dmg: "..", dodge: "..", maxhp: "..", spd: ".."
    });
    const [resolve3, setResolve3] = useState({
        crit: "..", dmg: "..", dodge: "..", maxhp: "..", spd: ".."
    });
    const [resolve4, setResolve4] = useState({
        crit: "..", dmg: "..", dodge: "..", maxhp: "..", spd: ".."
    });
    const [resolve5, setResolve5] = useState({
        crit: "..", dmg: "..", dodge: "..", maxhp: "..", spd: ".."
    });
    const [abilities, setAbilities] = useState({
        a1: "laoding..", a2: "laoding..", a3: "laoding..",
        a4: "laoding..", a4: "laoding..", a5: "laoding..",
        a6: "laoding..", a7: "laoding.."
    });

    const lg = props.lg;
    const { id } = useParams();

    useEffect(() => {
        fetch("/api/heroes/" + id)
            .then((res) => res.json())
            .then((data) => {
                setHeroName(data[0].hero)
                setResistances(() => {
                    return {
                        bleed: data[0].bleed, blight: data[0].blight,
                        deathblow: data[0].deathblow, debuff: data[0].debuff,
                        disease: data[0].disease, move: data[0].move,
                        stun: data[0].stun, trap: data[0].trap
                    }
                });
                setResolve1(data[1]);
                setResolve2(data[2]);
                setResolve3(data[3]);
                setResolve4(data[4]);
                setResolve5(data[5]);
                setAbilities(data[6]);
            });
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

                <div className='return-button'><Link to={'/stats'}><img src={leftArrow} /></Link></div>


                <div className='title'>
                    <h2 className='display-3'>{heroName}</h2>
                </div>

                <div className='abilities'>
                    {abilities &&
                        <>
                            <h3>Hero Abilities</h3>
                            <Abilities abilities={abilities} />
                        </>
                    }
                </div>

                <div className='content'>
                    <div className='content-left'>
                        {resolve1 && resolve2 && resolve3 && resolve4 && resolve5 &&
                            <Levels resolve1={resolve1} resolve2={resolve2} resolve3={resolve3} resolve4={resolve4} resolve5={resolve5} />
                        }
                    </div>

                    <div className='content-right'>
                        {resistances &&
                            <>
                                <h3>Resistances</h3>
                                <Resistances resistances={resistances} />
                            </>
                        }
                    </div>

                </div>
            </div>
        </div>);
}

export default Hero;