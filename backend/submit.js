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

function validateJSON(req, res, next) {
    const jsonData = req.body;

    // Validate the received data against the schema
    const valid = validate(jsonData);
    if (!valid) {
        return res.status(400).json({ error: 'Invalid data format', errors: validate.errors });
    }

    // If data is valid, pass control to the next middleware
    next();
}

module.exports = validateJSON;