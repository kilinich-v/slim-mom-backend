const Joi = require('joi')

const validateAuth = (req, res, next) => {
  const schemaAuth = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'ua'] },
      })
      .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  })

  const validation = schemaAuth.validate(req.body)

  if (validation.error) {
    const [{ context }] = validation.error.details
    const { label } = context
    return res.status(400).json({ message: `missing required '${label}' field` })
  } else {
    next()
  }
}

const validateAuthorized = (req, res, next) => {
  const schemaAuth = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'ua'] },
      })
      .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  })

  const validation = schemaAuth.validate(req.body)

  if (validation.error) {
    const [{ context }] = validation.error.details
    const { label } = context
    return res.status(400).json({ message: `missing required '${label}' field` })
  } else {
    next()
  }
}
const validateCalc = (req, res, next) => {
  const schemaCalc = Joi.object({
    weight: Joi.string().required(),
    growth: Joi.string().required(),
    age: Joi.string().required(),
    desiredWeight: Joi.string().required(),
    groupBlood: Joi.string().required(),
  })

  const validation = schemaCalc.validate(req.body)

  if (validation.error) {
    const [{ context }] = validation.error.details
    const { label } = context
    return res.status(400).json({ message: `missing required '${label}' field` })
  } else {
    next()
  }
}

module.exports = { validateAuth, validateCalc, validateAuthorized }
