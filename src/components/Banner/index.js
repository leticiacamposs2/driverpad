import React from 'react';
import { Row } from 'antd';
import './styles.css';

const Banner = ({ logo, alt }) => {

    return (
        <>
            <section id="banner">
                <div className="banner-center">
                    <Row>
                        <img alt={alt} src={logo} />
                    </Row>
                </div>
            </section>
        </>
    );
}

export default Banner;
