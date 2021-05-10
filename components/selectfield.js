import { Field } from 'formik';
import styles from '@/styles/CustomComponent.module.css';

export default function SelectField(props){
    const { handleblur, placeholder, label, id, name, type, options, ...other } = props
    return(
        <div>
            <label>{label}</label>
            <br></br>
            <Field
                className={styles.inputField}
                id={id}
                name={name}
                placeholder={placeholder || ""}
                component={type}
                handleblur={handleblur}
                {...other}
            >
            <option value=''>Select</option>
                {
                    options.map((row, key)=>(
                        <option key={key} value={row.id}>{row.name}</option>
                    ))
                }
            </Field>
        </div>
    )
}