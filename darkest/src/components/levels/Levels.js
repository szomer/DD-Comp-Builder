
import { Table } from 'react-bootstrap';
import './levels.scss';

function Levels(props) {
    const resolve1 = props.resolve1;
    const resolve2 = props.resolve2;
    const resolve3 = props.resolve3;
    const resolve4 = props.resolve4;
    const resolve5 = props.resolve5;


    return (<div className='Levels'>

        <Table size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Crit</th>
                    <th>DMG</th>
                    <th>Dodge</th>
                    <th>MaxHP</th>
                    <th>SPD</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='resolve'>Resolve 1</td>
                    <td>{resolve1.crit}</td>
                    <td>{resolve1.dmg}</td>
                    <td>{resolve1.dodge}</td>
                    <td>{resolve1.maxhp}</td>
                    <td>{resolve1.spd}</td>
                </tr>
                <tr>
                    <td className='resolve'>Resolve 2</td>
                    <td>{resolve2.crit}</td>
                    <td>{resolve2.dmg}</td>
                    <td>{resolve2.dodge}</td>
                    <td>{resolve2.maxhp}</td>
                    <td>{resolve2.spd}</td>
                </tr>
                <tr>
                    <td className='resolve'>Resolve 3</td>
                    <td>{resolve3.crit}</td>
                    <td>{resolve3.dmg}</td>
                    <td>{resolve3.dodge}</td>
                    <td>{resolve3.maxhp}</td>
                    <td>{resolve3.spd}</td>
                </tr>
                <tr>
                    <td className='resolve'>Resolve 4</td>
                    <td>{resolve4.crit}</td>
                    <td>{resolve4.dmg}</td>
                    <td>{resolve4.dodge}</td>
                    <td>{resolve4.maxhp}</td>
                    <td>{resolve4.spd}</td>
                </tr>
                <tr>
                    <td className='resolve'>Resolve 5</td>
                    <td>{resolve5.crit}</td>
                    <td>{resolve5.dmg}</td>
                    <td>{resolve5.dodge}</td>
                    <td>{resolve5.maxhp}</td>
                    <td>{resolve5.spd}</td>
                </tr>
            </tbody>
        </Table>

    </div>)
}

export default Levels;