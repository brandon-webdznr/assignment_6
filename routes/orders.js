import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

/**
 * CREATE: POST /api/orders
 */
router.post('/', async (req, res) => {
  try {
    const {
      customerName,
      drinkType,
      size,
      price,
      isIced,
      status,
      notes,
    } = req.body;

    const order = new Order({
      customerName,
      drinkType,
      size,
      price,
      isIced,
      status,
      notes,
    });

    const savedOrder = await order.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }
    console.error('Error creating order:', error);
    return res.status(500).json({ message: 'Server error creating order' });
  }
});

/**
 * READ ALL + FILTER: GET /api/orders?status=pending&drinkType=latte
 */
router.get('/', async (req, res) => {
  try {
    const { status, drinkType } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (drinkType) filter.drinkType = drinkType;

    const orders = await Order.find(filter).sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ message: 'Server error fetching orders' });
  }
});

/**
 * READ ONE: GET /api/orders/:id
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid order ID' });
    }
    return res.status(500).json({ message: 'Server error fetching order' });
  }
});

/**
 * UPDATE: PUT /api/orders/:id
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid order ID' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }
    return res.status(500).json({ message: 'Server error updating order' });
  }
});

/**
 * DELETE: DELETE /api/orders/:id
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid order ID' });
    }
    return res.status(500).json({ message: 'Server error deleting order' });
  }
});

export default router;
