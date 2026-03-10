// AI-GENERATED: Base class structure
// HUMAN-MODIFIED: Adjusted to match assignment needs

class Order {
  constructor(id, customerName, items, total, date = new Date()) {
    this.id = id;
    this.customerName = customerName;
    this.items = items; // [{ productId, quantity }]
    this.total = total;
    this.date = date;
  }
}

module.exports = Order;
