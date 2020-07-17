import React from 'react';
import { useField } from 'formik';
import { Select } from 'antd';

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label}
            <Select {...field} {...props} />
            {meta.touched && meta.error ? (
                {meta}
            ) : null}
        </>
    );
};

export default MySelect;