import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TFunction } from 'i18next';
import { Controller, Control, FieldErrors, FieldValues, Path } from 'react-hook-form';

interface FormSelectorProps<T extends FieldValues> {
        name: string;
        label: string;
        control: Control<T>;
        errors: FieldErrors<T>;
        tags: string[];
        t: TFunction<"translation", undefined>
    };

const FormSelector = <T extends FieldValues>({ name, label, control, errors, tags, t }: FormSelectorProps<T>) => {
    return (
        <Controller
        name={name as Path<T>}
        control={control}
        render={({ field }) => (
            <FormControl fullWidth>
            <InputLabel>{t(label)}</InputLabel>
            <Select
                {...field}
                multiple
                label={label}
                error={!!errors[name]}
            >
                {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                    {tag}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        )}
        />
    );
};

export default FormSelector
