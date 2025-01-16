/**
 * Converts a JSON schema to a Zod schema and exports it.
 * 
 * https://www.npmjs.com/package/json-schema-to-zod
 * 
 * This module imports a JSON schema from a file, converts it to a Zod schema
 * using the `jsonSchemaToZod` function, and then evaluates the resulting string
 * to create a Zod schema object. The Zod schema is then exported for use in
 * other parts of the application.
 * 
 * @module schema/index
 * 
 * @requires zod
 * @requires json-schema-to-zod
 * @requires ./form.json
 * 
 * @constant {string} zodSchemaString - The string representation of the Zod schema.
 * @constant {z.ZodTypeAny} zodSchema - The evaluated Zod schema object.
 * 
 * @typedef {z.infer<typeof zodSchema>} FormData - The inferred TypeScript type from the Zod schema.
 * 
 * @example
 * // Import the Zod schema and the inferred type
 * import { zodSchema, FormData } from './schema';
 * 
 * // Use the Zod schema to validate data
 * const result = zodSchema.safeParse(data);
 * if (result.success) {
 *   const formData: FormData = result.data;
 *   // Do something with formData
 * } else {
 *   console.error(result.error);
 * }
 */
import { z } from 'zod';
import { jsonSchemaToZod } from "json-schema-to-zod";
import formSchema from './form.json';

// Convert JSON schema to Zod schema string and evaluate it
const zodSchemaString = jsonSchemaToZod(formSchema);
const zodSchema = new Function('z', `return ${zodSchemaString}`)(z);

// console.log(zodSchema);
export { zodSchema };

// Export the type
export type FormData = z.infer<typeof zodSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schemaSample = z.object({
    id: z
        .string()
        .regex(new RegExp("^[A-Za-z0-9_-]+$"))
        .min(2, "ID must be at least 2 characters long")
        .max(30, "ID must be at most 30 characters long")
        .describe("Unique identifier for the form"),
    code: z.string().describe("Unique code for the form").optional(),
    description: z
        .string()
        .max(100, "Description must be at most 100 characters long")
        .describe("Description of the form"),
    expiryDate: z
        .string()
        .datetime("Expiry Date must be in date-time format")
        .describe("Date when the form expires")
        .optional(),
    active: z
        .boolean()
        .describe("Flag to indicate if the form is active")
        .default(true),
    tags: z.array(z.string()).describe("List of tags for the form").optional(),
    })
    .describe("Form schema for the application");

