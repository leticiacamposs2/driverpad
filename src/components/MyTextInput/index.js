import React from 'react';
import { useField } from 'formik';
import { Input } from 'antd';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Input size="large" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export default MyTextInput;