import React from "react";
import { z } from "zod";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm, Control, FieldErrors } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";
import FormTextArea from "./FormTextArea";
import FormToggle from "./FormToggle";
import FormSelector from "./FormSelector";
import { FormProperty } from "../../schema/types";

export { 
    FormInput, 
    FormDatePicker, 
    FormTextArea, 
    FormToggle, 
    FormSelector 
};

enum InputType {
    STRING = 'input',
    DATE_PICKER = 'date',
    TEXT_AREA = 'textarea',
    TOGGLE = 'toggle',
    SELECTOR = 'selector'
}

interface FormComponentProps<U> {
    ZodFormSchema: z.ZodTypeAny,
    JSONFormSchemaProperties: { [key: string]: FormProperty  },
}

const AVAILABLE_TAGS = ['Important', 'Urgent', 'Review', 'Draft', 'Final'];

export const FormComponent = ({ZodFormSchema, JSONFormSchemaProperties }: FormComponentProps<U>) => {
    
    const {
            control,
            handleSubmit,
            formState: { errors },
        } = useForm<U>({
            resolver: zodResolver(ZodFormSchema),
            defaultValues: {
                active: true,
                tags: [],
            },
    });

    const { t } = useTranslation();

    const onSubmit = (data: U) => {
        console.log(data);
    };
    
    const renderFormInput = (name: string, property: FormProperty, control: Control<U>, errors: FieldErrors<U>) => {
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