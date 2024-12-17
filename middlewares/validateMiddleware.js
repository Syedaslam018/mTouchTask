const Joi = require('joi');

const validateStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    class: Joi.string().required(),
    section: Joi.string().required(),
    rollNumber: Joi.number().required(),
    photo: Joi.string().optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = validateStudent;
