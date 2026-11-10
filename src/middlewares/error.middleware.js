
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode =
    err.message === 'Produit non trouvé' ? 404 : 400;

  res.status(statusCode).json({
    success: false,
    error: {
      status: statusCode,
      message: err.message || 'Erreur interne du serveur'
    }
  });
};
