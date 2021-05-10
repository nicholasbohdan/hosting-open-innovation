import { Field } from 'formik';
import styles from '@/styles/CustomComponent.module.css';

export default function Textarea(props){
    const { handleblur, placeholder, label, id, name, type } = props
    return(
        <div>
            <label>{label}</label>
            <br></br>
            <Field
                className={styles.inputField}
                id={id} name={name}
                placeholder={placeholder || ""}
                component={type}
                handleblur={handleblur}
            />
        </div>
    )
}