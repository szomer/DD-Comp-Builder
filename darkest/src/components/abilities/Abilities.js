import './abilities.scss';

function Abilities(props) {
    const abilities = props.abilities;
    return (<div className='Abilities'>
        <h3>
            Hero Abilities
        </h3>
        <div className='ability-container'>
            <div className='ability'>
                <p className='num'>1</p>
                <p>{abilities.a1}</p>
            </div>
            <div className='ability'>
                <p className='num'>2</p>
                <p>{abilities.a2}</p>
            </div>
            <div className='ability'>
                <p className='num'>3</p>
                <p>{abilities.a3}</p>
            </div>
            <div className='ability'>
                <p className='num'>4</p>
                <p>{abilities.a4}</p>
            </div>
            <div className='ability'>
                <p className='num'>5</p>
                <p>{abilities.a5}</p>
            </div>
            <div className='ability'>
                <p className='num'>6</p>
                <p>{abilities.a6}</p>
            </div>
            <div className='ability'>
                <p className='num'>7</p>
                <p>{abilities.a7}</p>
            </div>
        </div>

    </div>)
}

export default Abilities;