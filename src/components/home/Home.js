import { Col, Row } from 'react-bootstrap';
import './home.scss';


function Home() {
    return (<div className="Home">
        <div className='home-bg-filter'></div>

        <Row className='home-container'>
            <Col className='home-col'>
                <img />
                <h2>DD Comp Builder</h2>
                <p>Learn more about your heroes statistics and plan your fights!</p>
            </Col>
        </Row>
    </div>);
}

export default Home;