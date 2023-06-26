import { Router } from 'express';
import { movimientosService } from '../services/movimientosService';

const router = Router();

const movimientosService = new movimientosService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const movimiento = await movimientosService.getAll();

  return res.status(200).json(movimiento);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const movimiento = await movimientosService.getById(req.params.id);

  return res.status(200).json(movimiento);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);
    
  const movimiento = await movimientosService.insert(req.body);

  return res.status(201).json(movimiento);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const movimiento = await movimientosService.deleteById(req.params.id);

  return res.status(200).json(movimiento);
});

export default router;