import { 
    FormInput, 
    FormDatePicker, 
    FormTextArea, 
    FormToggle, 
    FormSelector  
} from '../form'
import { Control, FieldErrors } from 'react-hook-form';
import { FormProperty } from '../../schema/types';

enum InputType {
    STRING = 'input',
    DATE_PICKER = 'date',
    TEXT_AREA = 'textarea',
    TOGGLE = 'toggle',
    SELECTOR = 'selector'
}

const AVAILABLE_TAGS = ['Important', 'Urgent', 'Review', 'Draft', 'Final'];
export const useFormFactory = () => {
    const renderFormInput = (name: string, property: FormProperty, control: Control, errors: FieldErrors) => {
        const {inputType, title } = property;
        switch (inputType) {
            case InputType.STRING:
                return <FormInput name={name} label={title} control={control} errors={errors} />
            case InputType.DATE_PICKER:
                return <FormDatePicker name={name} label={title} control={control} errors={errors} />
            case InputType.TEXT_AREA:
                return <FormTextArea name={name} label={title} control={control} errors={errors} />
            case InputType.TOGGLE:
                return <FormToggle name={name} label={title} control={control} errors={errors} />
            case InputType.SELECTOR:
                return <FormSelector name={name} label={title} control={control} errors={errors} tags={AVAILABLE_TAGS} />
            default:
                return null;
        }
    };
    return {
        renderFormInput
    };
};