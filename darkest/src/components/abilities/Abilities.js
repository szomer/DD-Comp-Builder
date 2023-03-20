import './abilities.scss';

function Abilities(props) {
    const abilities = props.abilities;
    return (<div className='Abilities'>

        <div className='ability-container'>
            <div className='ability'>
                <h5 className='num'>1</h5>
                <p>{abilities.a1}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>2</h5>
                <p>{abilities.a2}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>3</h5>
                <p>{abilities.a3}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>4</h5>
                <p>{abilities.a4}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>5</h5>
                <p>{abilities.a5}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>6</h5>
                <p>{abilities.a6}</p>
            </div>
            <div className='ability'>
                <h5 className='num'>7</h5>
                <p>{abilities.a7}</p>
            </div>
        </div>

    </div>)
}

export default Abilities;