import './abilities.scss';

function Abilities() {
    return (<div className='Abilities'>
        <h3>
            Hero Abilities
        </h3>
        <div className='ability-container'>
            <div className='ability'>
                <p className='num'>1</p>
                <p>Crush</p>
            </div>
            <div className='ability'>
                <p className='num'>2</p>
                <p>Rampart</p>
            </div>
            <div className='ability'>
                <p className='num'>3</p>
                <p>Bellow</p>
            </div>
            <div className='ability'>
                <p className='num'>4</p>
                <p>Defender</p>
            </div>
            <div className='ability'>
                <p className='num'>5</p>
                <p>Retribution</p>
            </div>
            <div className='ability'>
                <p className='num'>6</p>
                <p>Command</p>
            </div>
            <div className='ability'>
                <p className='num'>7</p>
                <p>Bolster</p>
            </div>
        </div>

    </div>)
}

export default Abilities;