
import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API REST Product - LAB 5'
  });
});

// Routes des produits
app.use('/api/products', productRoutes);

// Middleware global de gestion des erreurs
app.use(errorHandler);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
