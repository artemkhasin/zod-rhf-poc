import React from "react";
import { z } from "zod";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm, Control, FieldErrors, FieldValues, DefaultValues } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";
import FormTextArea from "./FormTextArea";
import FormToggle from "./FormToggle";
import FormSelector from "./FormSelector";
import { FormProperty } from "../../schema/types";

// Enum for different input types
enum InputType {
    STRING = 'input',
    DATE_PICKER = 'date',
    TEXT_AREA = 'textarea',
    TOGGLE = 'toggle',
    SELECTOR = 'selector'
}

/**
 * Props for the FormComponent
 * 
 * @template GenericFormType - The type of the form values, extending FieldValues from react-hook-form
 */
interface FormComponentProps<GenericFormType extends FieldValues> {
    ZodFormSchema: z.ZodTypeAny,
    JSONFormSchemaProperties: { [key: string]: FormProperty  },
    defaultValues?: DefaultValues<GenericFormType>
    submitFunction: (data: GenericFormType) => void,
    textAreaRows?: number
}

const AVAILABLE_TAGS = ['Important', 'Urgent', 'Review', 'Draft', 'Final'];

/**
 * FormComponent - A reusable form component that uses react-hook-form and Zod for validation
 * 
 * @template GenericFormType - The type of the form values, extending FieldValues from react-hook-form
 * @param {FormComponentProps<GenericFormType>} props - The props for the component
 * @returns {JSX.Element} The rendered form component
 */
export const FormComponent = <GenericFormType extends FieldValues,>({
    ZodFormSchema, 
    JSONFormSchemaProperties, 
    defaultValues,
    submitFunction,
    textAreaRows
}: FormComponentProps<GenericFormType>): JSX.Element => {
    
    const {
            control,
            handleSubmit,
            formState: { errors },
        } = useForm<GenericFormType>({
            resolver: zodResolver(ZodFormSchema),
            defaultValues: defaultValues,
    });

    const { t } = useTranslation();

    const onSubmit = (data: GenericFormType) => {
        if(submitFunction) {
            submitFunction(data);
        }
    };
    
    const renderFormInput = (name: string, property: FormProperty, control: Control<GenericFormType>, errors: FieldErrors<GenericFormType>) => {
        const {inputType, title } = property;
        switch (inputType) {
            case InputType.STRING:
                return <FormInput name={name} label={title} control={control} errors={errors} t={t} />;
            case InputType.DATE_PICKER:
                return <FormDatePicker name={name} label={title} control={control} errors={errors} t={t} />
            case InputType.TEXT_AREA:
                return <FormTextArea name={name} label={title} control={control} errors={errors} t={t} rows={textAreaRows} />
            case InputType.TOGGLE:
                return <FormToggle name={name} label={title} control={control} errors={errors} t={t} />
            case InputType.SELECTOR:
                return <FormSelector name={name} label={title} control={control} errors={errors} tags={AVAILABLE_TAGS} t={t} />
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {Object.entries(JSONFormSchemaProperties).map(([key, property]: [string, FormProperty]) => 
                <React.Fragment key={key}>
                    {renderFormInput(key, property, control, errors)}
                </React.Fragment>
                )}
            <Box className="pt-4">
                <Button type="submit" variant="contained" color="primary">
                    {t('Submit')}
                </Button>
            </Box>
        </form>
    )
};