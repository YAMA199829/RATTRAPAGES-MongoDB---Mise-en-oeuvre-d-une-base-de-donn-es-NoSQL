// middlewares/validate.middleware.js
// Middleware générique pour appliquer un schéma Zod sur la requête

export const validate =
  (schema) =>
  (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err) {
      return res.status(400).json({
        message: 'Erreur de validation',
        errors: err.errors,
      });
    }
  };
