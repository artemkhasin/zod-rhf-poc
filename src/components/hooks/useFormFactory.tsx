import { 
    FormInput, 
    FormDatePicker, 
    FormTextArea, 
    FormToggle, 
    FormSelector  
} from '../form'
import { useTranslation } from 'react-i18next';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { FormProperty } from '../../schema/types';

enum InputType {
    STRING = 'input',
    DATE_PICKER = 'date',
    TEXT_AREA = 'textarea',
    TOGGLE = 'toggle',
    SELECTOR = 'selector'
}

const AVAILABLE_TAGS = ['Important', 'Urgent', 'Review', 'Draft', 'Final'];

export const useFormFactory = <T extends FieldValues>() => {
    const { t } = useTranslation();
    const renderFormInput = (name: string, property: FormProperty, control: Control<T>, errors: FieldErrors<T>) => {
        const {inputType, title } = property;
        switch (inputType) {
            case InputType.STRING:
                return <FormInput name={name} label={title} control={control} errors={errors} t={t} />;
            case InputType.DATE_PICKER:
                return <FormDatePicker name={name} label={title} control={control} errors={errors} t={t} />
            case InputType.TEXT_AREA:
                return <FormTextArea name={name} label={title} control={control} errors={errors} t={t} />
            case InputType.TOGGLE:
                return <FormToggle name={name} label={title} control={control} errors={errors} t={t} />
            case InputType.SELECTOR:
                return <FormSelector name={name} label={title} control={control} errors={errors} tags={AVAILABLE_TAGS} t={t} />
            default:
                return null;
        }
    };
    return {
        renderFormInput
    };
};