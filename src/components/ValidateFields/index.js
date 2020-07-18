import moment from 'moment';
import { dateFormat } from '../FieldFormats';

export const validateDate = value => {
    let errors;

    if (!value) {
        errors = "* campo obrigatório";
    } else {
        moment(value).format(dateFormat) 
    }

    return errors;
};

export const isRequired = value => (!value ? "* campo obrigatório" : "");
