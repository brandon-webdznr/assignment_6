// AI-GENERATED: Base structure
// HUMAN-MODIFIED: Integrated with Order class and product validation

const Order = require('./order');

class OrderManager {
  constructor() {
    this.orders = [];
    this.nextId = 1;
  }

  createOrder(customerName, items, total) {
    const order = new Order(this.nextId++, customerName, items, total);
    this.orders.push(order);
    return order;
  }

  getAllOrders() {
    return this.orders;
  }
}

module.exports = new OrderManager();
