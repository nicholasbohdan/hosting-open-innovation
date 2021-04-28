import { Field } from 'formik';
import styles from '../styles/CustomComponent.module.css';

export default function RadioButton(props){
    const { handleblur, placeholder, label, id, name, type, options } = props
    return(
        <div>
            <label>{label}</label>
            <br></br>
            <div>
                {options.map((row, key)=>(
                    <div className={styles.listRadioButton}>
                        <label>{row.name}</label>
                        <Field
                            id={id} name={name}
                            placeholder={placeholder || ""}
                            type={type}                           
                            handleblur={handleblur}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}