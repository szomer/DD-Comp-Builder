import { useState } from 'react';
import './builder.scss';
import List from './list/List';
import Abilities from '../abilities/Abilities';
import Resistances from '../resistances/Resistances';
import Comp from './comp/Comp';

function Builder(props) {
    const [heroId, setHeroId] = useState();
    const [heroName, setHeroName] = useState();
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

    function onListSelect(id) {
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
                setAbilities(data[6]);
                setHeroId(id);
            });
    }

    function heroAdd(position) {
        console.log('add hero ', heroId, ' to position ', position);
        console.log('id', heroId);
        console.log('name', heroName);
        console.log('img', images[heroId]);


        setCurrentHeroes(old => {
            old[position] = {
                id: heroId, name: heroName, img: images[heroId]
            }
            return old;
        })

        console.log(currentHeroes);
    }

    function heroRemove(position) {
        console.log('handle remove', position);
        setCurrentHeroes(old => {
            old[position] = {
                id: "", name: "", img: ""
            }
            return old;
        })
    }


    return (<div className="Builder">

        <div className="builder-container">
            <Comp heroAdd={heroAdd} heroRemove={heroRemove} currentHeroes={currentHeroes} />

        </div>

        <div className="heroes-list-container">
            <List onHeroClicked={onListSelect} heroes={heroes} icons={icons} />
        </div>

        <div className="stats-container">
            {heroName ?
                <h2>{heroName}</h2> :
                <h2>Start by selecting a Hero!</h2>
            }
            {abilities.a1 &&
                <Abilities abilities={abilities} />
            }
            {resistances.bleed &&
                <Resistances resistances={resistances} />
            }
        </div>

    </div>)
}

export default Builder;