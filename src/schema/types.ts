export type ErrorMessage = {
  type: string;
  minLength?: string;
  maxLength?: string;
  required?: string;
  format?: string;
};

export type IdProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  pattern: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  example: string;
  errorMessage: ErrorMessage;
};

export type CodeProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  example: string;
  errorMessage: ErrorMessage;
};

export type DescriptionProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  maxLength: number;
  example: string;
  required: boolean;
  errorMessage: ErrorMessage;
};

export type ExpiryDateProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  format: string;
  example: string;
  errorMessage: ErrorMessage;
};

export type ActiveProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  default: boolean;
  example: boolean;
  errorMessage: ErrorMessage;
};

export type TagItem = {
  type: string;
  example: string;
  errorMessage: ErrorMessage;
};

export type TagsProperty = {
  title: string;
  description: string;
  inputType: string;
  type: string;
  items: TagItem;
  example: string[];
  errorMessage: ErrorMessage;
};

export type FormProperty = 
  | IdProperty
  | CodeProperty
  | DescriptionProperty
  | ExpiryDateProperty
  | ActiveProperty
  | TagsProperty;

