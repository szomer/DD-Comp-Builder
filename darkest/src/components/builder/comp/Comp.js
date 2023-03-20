import { useEffect, useState } from 'react';
import './comp.scss';

function Comp(props) {
    const currentHeroes = props.currentHeroes;

    return (
        <div className="Comp">

            <div className='comp-container'>
                <div className='hero-container'>
                    <div className='hero'>
                        {currentHeroes[0].id ? <>

                            <img src={currentHeroes[0].img} />
                            <h5>1</h5>
                            <p>{currentHeroes[0].name}</p>
                        </>
                            : <h4 className='text'></h4>
                        }
                    </div>
                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(0, currentHeroes[0].id) }} className='btn btn-dark'>+</button>
                        </div>
                        {currentHeroes[0].id &&
                            <div className='remove'>
                                <button onClick={() => { props.heroRemove(0) }} className='btn btn-dark'>-</button>
                            </div>
                        }
                    </div>
                </div>

                <div className='hero-container'>
                    <div className='hero'>
                        {currentHeroes[1].id ?
                            <>

                                <img src={currentHeroes[1].img} />
                                <h5>2</h5>
                                <p>{currentHeroes[1].name}</p>
                            </>
                            : <h4 className='text'></h4>
                        }
                    </div>
                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(1, currentHeroes[1].id) }} className='btn btn-dark'>+</button>
                        </div>
                        {currentHeroes[1].id &&
                            <div className='remove'>
                                <button onClick={() => { props.heroRemove(1) }} className='btn btn-dark'>-</button>
                            </div>
                        }
                    </div>
                </div>

                <div className='hero-container'>
                    <div className='hero'>
                        {currentHeroes[2].id ?
                            <>

                                <img src={currentHeroes[2].img} />
                                <h5>3</h5>
                                <p>{currentHeroes[2].name}</p>
                            </>
                            : <h4 className='text'></h4>
                        }
                    </div>
                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(2, currentHeroes[2].id) }} className='btn btn-dark'>+</button>
                        </div>
                        {currentHeroes[2].id &&
                            <div className='remove'>
                                <button onClick={() => { props.heroRemove(2) }} className='btn btn-dark'>-</button>
                            </div>
                        }
                    </div>
                </div>

                <div className='hero-container'>
                    <div className='hero'>
                        {currentHeroes[3].id ?
                            <>
                                <img src={currentHeroes[3].img} />
                                <h5>4</h5>
                                <p>{currentHeroes[3].name}</p>
                            </>
                            : <h4 className='text'></h4>
                        }
                    </div>
                    <div className='button-container'>
                        <div className='add'>
                            <button onClick={() => { props.heroAdd(3, currentHeroes[3].id) }} className='btn btn-dark'>+</button>
                        </div>
                        {currentHeroes[3].id &&
                            <div className='remove'>
                                <button onClick={() => { props.heroRemove(3) }} className='btn btn-dark'>-</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp;