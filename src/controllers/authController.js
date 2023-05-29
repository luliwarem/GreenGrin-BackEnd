import { Router } from 'express';
import { getSignedToken } from '../services/authService.js';

const router = Router();

router.get('/login', async (req, res) => {
    console.log(`This is a get operation`);
  
    const token = getSignedToken();
  
    return res.status(200).json(token);
  });
  
  export default router;

// crear el router, pomnerle endpoint de login y ejecutar la funcion de gettoken y ponerlo en un service