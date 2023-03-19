import './resistances.scss';
import stunImg from './images/stun.webp';
import bleedImg from './images/bleed.webp';
import blightImg from './images/blight.webp';
import deathblowImg from './images/deathblow.webp';
import debuffImg from './images/debuff.webp';
import diseaseImg from './images/disease.webp';
import moveImg from './images/move.webp';
import trapImg from './images/trap.webp';

function Resistances(props) {
    const resistances = props.resistances;

    return (<div className="Resistances">

        <h3>Resistances</h3>

        <div className='stat-container'>
            <div className='stat'>
                <img src={bleedImg} />
                <p>Bleed</p>
                <p>{resistances.bleed}</p>
            </div>
            <div className='stat'>
                <img src={blightImg} />
                <p>Blight</p>
                <p>{resistances.blight}</p>
            </div>
            <div className='stat'>
                <img src={deathblowImg} />
                <p>Death Blow</p>
                <p>{resistances.deathblow}</p>
            </div>
            <div className='stat'>
                <img src={debuffImg} />
                <p>Debuff</p>
                <p>{resistances.debuff}</p>
            </div>
            <div className='stat'>
                <img src={diseaseImg} />
                <p>Disease</p>
                <p>{resistances.disease}</p>
            </div>
            <div className='stat'>
                <img src={moveImg} />
                <p>Move</p>
                <p>{resistances.move}</p>
            </div>
            <div className='stat'>
                <img src={stunImg} />
                <p>Stun</p>
                <p>{resistances.stun}</p>
            </div>
            <div className='stat'>
                <img src={trapImg} />
                <p>Trap</p>
                <p>{resistances.trap}</p>
            </div>
        </div>
    </div>)
}

export default Resistances