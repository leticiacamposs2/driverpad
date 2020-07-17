import React from 'react';
import { Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './styles.css';

const Footer = ({ author, year }) => {

    return(
        <footer id="footer" className="dark footer-border">
            <div className="footer-wrap">
                <Row className="bottom-bar">
                    <Col md={4} sm={24} />
                    <Col md={20} sm={24}>
                        <span style={{ marginRight: 12 }}>
                            © {year}, desenvolvido com {" "}
                            <HeartOutlined style={{ fontSize: '16px', color: '#ffbe2e' }}/>
                            {" "} por {author}
                        </span> 
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;
