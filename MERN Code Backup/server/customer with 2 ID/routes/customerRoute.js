// customerRoute.js
import express from 'express';
import { addCustomer, deleteCustomer, getCustomers, updateCustomer,  } from '../controllers/customerController.js';

const router = express.Router();

// Update customer name
router.post('/customers', addCustomer);
router.get('/customers', getCustomers);
router.put('/customers/:customerId', updateCustomer);
router.delete('/customers/:customerId', deleteCustomer);



export default router;
