import { 
    FormInput, 
    FormDatePicker, 
    FormTextArea, 
    FormToggle, 
    FormSelector  
} from '../form'
import { Control, FieldErrors } from 'react-hook-form';

enum InputType {
    STRING = 'string',
    DATE_PICKER = 'datePicker',
    TEXT_AREA = 'textArea',
    TOGGLE = 'toggle',
    SELECTOR = 'selector'
}
interface InputRenderProps {
    inputType: InputType;
    name: string;
    label: string;
    control: Control;
    errors: FieldErrors;
    tags?: string[];
}
export const useFormFactory = () => {
    const renderFormInput = ({inputType, name, label, control, errors, tags = [] }: InputRenderProps) => {
        switch (inputType) {
            case InputType.STRING:
                return <FormInput name={name} label={label} control={control} errors={errors} />
            case InputType.DATE_PICKER:
                return <FormDatePicker name={name} label={label} control={control} errors={errors} />
            case InputType.TEXT_AREA:
                return <FormTextArea name={name} label={label} control={control} errors={errors} />
            case InputType.TOGGLE:
                return <FormToggle name={name} label={label} control={control} errors={errors} />
            case InputType.SELECTOR:
                return <FormSelector name={name} label={label} control={control} errors={errors} tags={tags} />
            default:
                return null;
        }
    };
    return {
        renderFormInput
    };
};