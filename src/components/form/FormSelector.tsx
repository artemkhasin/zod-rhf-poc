import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TFunction } from 'i18next';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface FormSelectorProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
        tags: string[];
        t: TFunction<"translation", undefined>
    };

const FormSelector: React.FC<FormSelectorProps> = ({ name, label, control, errors, tags, t }) => {
    return (
        <Controller
        name={name}
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
