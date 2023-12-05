import { Router } from 'express';
import { validateToken } from '../validar-token.js';
import {
  add,
  findAll,
  findOne,
  findByDni,
  login,
  remove,
  sanitizeClienteInput,
  update,
} from './cliente.controller.js';

export const clienteRouter = Router();

clienteRouter.get('/', validateToken, findAll);
clienteRouter.get('/:id', validateToken, findOne);
clienteRouter.post('/', validateToken, sanitizeClienteInput, add);
clienteRouter.put('/:id', validateToken, sanitizeClienteInput, update);
clienteRouter.delete('/:id', validateToken, remove);
clienteRouter.post('/login', login);
clienteRouter.get('/dni/:dni', findByDni);
