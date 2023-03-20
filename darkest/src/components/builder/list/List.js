import { useEffect } from 'react';
import './list.scss';

function List(props) {

    const heroes = props.heroes;
    const icons = props.icons;

    function setActive(e, id) {
        props.onHeroClicked(id);

        var elList = document.querySelectorAll('.list-item');
        elList.forEach(el => el.classList.remove("active"));
        e.currentTarget.classList.add('active');
    }

    useEffect(() => {
        const first = document.getElementsByClassName('list-item')[0];
        if (first) {
            first.classList.add("active");
        }
    }, []);


    return (
        <div className='List'>
            <div className='list-container'>
                {heroes.map((item) => {
                    return <div className='list-item' onClick={(e) => { setActive(e, item.id) }}>
                        <img src={icons[item.id]} />
                        <h4>{item.name}</h4>
                    </div>
                })}
            </div>
        </div>
    )
}

export default List;