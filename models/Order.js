import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      minlength: [2, 'Customer name must be at least 2 characters'],
    },
    drinkType: {
      type: String,
      required: [true, 'Drink type is required'],
      enum: {
        values: ['latte', 'espresso', 'cappuccino', 'americano', 'mocha', 'tea', 'other'],
        message: 'Drink type must be a valid option',
      },
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      default: 'medium',
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    isIced: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      maxlength: [300, 'Notes must be at most 300 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
