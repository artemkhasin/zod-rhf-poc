import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { FormData, zodSchema } from './schema';
import JSONFormSchema from './schema/form.json';
import { useFormFactory } from './components/hooks/useFormFactory';
import { FormProperty } from './schema/types';
import React from 'react';
import LanguageSelector from './components/languageSelector/LanguageSelector';



function App() {
  const { t  } = useTranslation();
  const { renderFormInput } = useFormFactory<FormData>();
  const {title, properties } = JSONFormSchema;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      active: true,
      tags: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Paper className="p-8 w-full max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          {t(title)}
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {Object.entries(properties).map(([key, property]: [string, FormProperty]) => 
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
      </Paper>
      <LanguageSelector />
    </div>
  );
}

export default App;