import { useEffect, useState } from 'react';
import './comp.scss';

function Comp(props) {

    const [currentHeroes, setCurrentHeroes] = useState([
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" },
        { id: "", name: "", img: "" }
    ]);

    // heroAdd={heroAdd} heroRemove={heroRemove} currentHeroes={currentHeroes}

    useEffect(() => {
        setCurrentHeroes(props.currentHeroes);
    }, [])

    return (
        <div className="Comp">
            <h2>Build your Componsition</h2>


            <div className='comp-container'>
                <div className='hero1'>
                    <div className='hero-container'>


                        {currentHeroes[0].id && <>
                            <img src={currentHeroes[0].img} />
                            <p>{currentHeroes[0].name}</p></>
                        }
                    </div>

                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(0, currentHeroes[0].id) }} className='btn btn-dark'>Add</button>
                        </div>

                    </div>
                </div>

                <div className='hero2'>
                    <div className='hero-container'>

                        {currentHeroes[1].id &&
                            <>
                                <img src={currentHeroes[1].img} />
                                <p>{currentHeroes[1].name}</p></>
                        }
                    </div>

                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(1, currentHeroes[1].id) }} className='btn btn-dark'>Add</button>
                        </div>

                    </div>
                </div>

                <div className='hero3'>
                    <div className='hero-container'>

                        {currentHeroes[2].id &&
                            <>
                                <img src={currentHeroes[2].img} />
                                <p>{currentHeroes[2].name}</p></>
                        }
                    </div>

                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(2, currentHeroes[2].id) }} className='btn btn-dark'>Add</button>
                        </div>

                    </div>
                </div>

                <div className='hero4'>
                    <div className='hero-container'>

                        {currentHeroes[3].id &&
                            <>
                                <img src={currentHeroes[3].img} />
                                <p>{currentHeroes[3].name}</p></>
                        }
                    </div>

                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(3, currentHeroes[3].id) }} className='btn btn-dark'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp;