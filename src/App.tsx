import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
} from '@mui/material';
import { zodSchema, type FormData } from './schema';
import JSONFormSchema from './schema/form.json';
import LanguageSelector from './components/languageSelector/LanguageSelector';
import { FormComponent } from './components/FormComponent';



function App() {
  const { t  } = useTranslation();
  const {title, properties } = JSONFormSchema;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Paper className="p-8 w-full max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          {t(title)}
        </Typography>
        <FormComponent<FormData> 
          ZodFormSchema={zodSchema} 
          JSONFormSchemaProperties={properties} 
          defaultValues={{
            active: true,
            tags: [],
          }}
        />
      </Paper>
      <LanguageSelector />
    </div>
  );
}

export default App;