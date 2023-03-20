import { useEffect, useState } from 'react';
import './builder.scss';
import List from './list/List';
import Abilities from '../abilities/Abilities';
import Resistances from '../resistances/Resistances';
import Comp from './comp/Comp';

function Builder(props) {
    const [hero, setHero] = useState({
        id: "",
        name: ""
    });
    const [resistances, setResistances] = useState({
        bleed: "", blight: "", deathblow: "", debuff: "",
        disease: "", move: "", stun: "", trap: ""
    });
    const [abilities, setAbilities] = useState({
        a1: "", a2: "", a3: "", a4: ".", a4: "", a5: "", a6: "", a7: ""
    });
    const [currentHeroes, setCurrentHeroes] = useState([
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" }
    ]);
    const heroes = props.heroes;
    const icons = props.icons;
    const images = props.sm;

    useEffect(() => {
        onListSelect("00");
    }, []);

    // Get the stats of hero
    async function onListSelect(heroId) {
        await fetch("/api/heroes/" + heroId)
            .then((res) => res.json())
            .then((data) => {
                setHero({
                    id: heroId,
                    name: data[0].hero
                });

                setResistances(() => {
                    return {
                        bleed: data[0].bleed, blight: data[0].blight,
                        deathblow: data[0].deathblow, debuff: data[0].debuff,
                        disease: data[0].disease, move: data[0].move,
                        stun: data[0].stun, trap: data[0].trap
                    }
                });
                setAbilities(data[6]);

            }).catch(() => {
                setHero({
                    id: "",
                    name: ""
                })
                setResistances({
                    bleed: "", blight: "", deathblow: "", debuff: "",
                    disease: "", move: "", stun: "", trap: ""
                });
                setAbilities({
                    a1: "", a2: "", a3: "", a4: ".", a4: "", a5: "", a6: "", a7: ""
                });
            });
    }

    // Add hero to builder
    function heroAdd(position) {
        var arr = [...currentHeroes];
        arr[position] = {
            id: hero.id, name: hero.name, img: images[hero.id]
        };
        setCurrentHeroes(arr);
    }

    // Remove hero from builder
    function heroRemove(position) {
        var arr = [...currentHeroes];
        arr[position] = {
            id: "", name: "", img: ""
        };
        setCurrentHeroes(arr);
    }


    return (<div className="Builder">
        <div className="builder-container">
            <h2>Build Your Composition</h2>
            <p>Select a hero and click on the add icon to position.</p>
            {currentHeroes &&
                <Comp heroAdd={heroAdd} heroRemove={heroRemove} currentHeroes={currentHeroes} />
            }
        </div>

        <div className="hero-stats-container">
            {hero.name &&
                <h2>{hero.name}</h2>
            }
            {abilities.a1 && resistances.bleed &&
                <div className='stats-container'>
                    <Abilities abilities={abilities} />
                    <Resistances resistances={resistances} />
                </div>
            }
        </div>

        <div className="heroes-list-container">
            <List onHeroClicked={onListSelect} heroes={heroes} icons={icons} />
        </div>
    </div>)
}

export default Builder;