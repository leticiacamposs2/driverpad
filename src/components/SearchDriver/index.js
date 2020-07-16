import React from 'react';
import { Input } from 'antd';

const SearchDriver = ({ placeholder }) => {

    return (
        <section className="search-driver">
            <Input.Search
                placeholder={placeholder}
                onSearch={value => console.log(value)}
                style={{ width: 500 }}
            />
        </section>
    );
};

export default SearchDriver; 
