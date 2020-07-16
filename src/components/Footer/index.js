import React from 'react';
import { Row, Col } from 'antd';
import './styles.css';

const Footer = ({ author, year }) => {

    return(
        <footer id="footer" className="dark">
            <div className="footer-wrap">
                <Row className="bottom-bar">
                    <Col md={4} sm={24} />
                    <Col md={20} sm={24}>
                        <span style={{ marginRight: 12 }}>
                            © {year}, desenvolvido com {" "}
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            {" "} por {author}
                        </span> 
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;