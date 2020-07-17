import moment from 'moment';
import { dateFormat } from '../FieldFormats';

export const validateDate = value => {
    let errors;

    if (!value) {
        errors = "* campo obrigatório";
    } else if (
        moment(value).format(dateFormat) < moment(Date.now()).format(dateFormat)
    ) {
        errors = "Informe uma data válida!";
    }

    return errors;
};

export const isRequired = value => (!value ? "* campo obrigatório" : "");
