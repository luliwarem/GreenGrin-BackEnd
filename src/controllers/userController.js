import { Router } from 'express';
import { userService } from '../services/userService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const UserService = new userService();

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Usuario = await UserService.getById(req.params.id);

  return res.status(200).json(Usuario);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);
    
  const Usuario = await UserService.insert(req.body);

  return res.status(201).json(Usuario);
});

router.put('/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const Usuario = await UserService.updateById(req.params.id, req.body);
  
    return res.status(200).json(Usuario);
  });

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Usuario = await UserService.deleteById(req.params.id);

  return res.status(200).json(Usuario);
});

export default router;