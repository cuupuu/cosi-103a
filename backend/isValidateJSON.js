const Ajv = require('ajv');

// JSON Schema for the expected data format
const schema = {
   "type": "object",
   "properties": {
   "title": { "type": "string" },
   "description": { "type": "string" },
   "ingredients": { "type": "array", "items": { "type": "string" } },
   "instructions": { "type": "array", "items": { "type": "string" } }
  },
  "required": ["title", "description", "ingredients", "instructions"]
};

// Create an Ajv instance and compile the schema
const ajv = new Ajv();
const validate = ajv.compile(schema);

function isValidateJSON(recipe) {
    try {
        // Validate the recipe object against the schema
        const isValid = validate(recipe);
        return isValid;
      } catch (error) {
        console.error('Error occurred during validation:', error);
        return false;
      }
}

module.exports = { isValidateJSON };