import './list.scss';

function List(props) {

    const heroes = props.heroes;
    const icons = props.icons;

    return (
        <div className='List'>

            <h3>Heroes</h3>

            <div className='list-container'>
                {heroes.map((item) => {
                    return <div className='list-item' onClick={() => { props.onHeroClicked(item.id) }}>
                        <img src={icons[item.id]} />
                        <h4>{item.name}</h4>
                    </div>
                })};
            </div>
        </div>
    )
}

export default List;