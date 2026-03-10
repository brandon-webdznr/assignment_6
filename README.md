# Coffee Shop API (MongoDB + Express)
This project is a RESTful API for managing coffee shop orders. It was built using Node.js, Express, and MongoDB as part of Assignment 5. The API supports full CRUD operations, filtering, and validation while following a clean and organized project structure.

## Features
- Create new coffee orders  
- Retrieve all orders  
- Filter orders by status and drink type  
- Retrieve a single order by ID  
- Update existing orders  
- Delete orders  
- MongoDB connection using Mongoose  
- Organized folder structure with routes, models, and config  

## Technologies Used
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  
- Postman / Thunder Client for testing  

## Installation
1. Download or clone the project folder.  
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the project root:
```
MONGODB_URI=mongodb://127.0.0.1:27017/coffee_shop
PORT=3000
```
4. Start the server:
```bash
npm start
```
Expected output:
```
🚀 Server running on port 3000
✅ MongoDB connected
```

## API Endpoints

### Health Check
`GET /`  
Returns a simple JSON message confirming the API is running.

### Create an Order
`POST /api/orders`  
Example body:
```json
{
  "customerName": "Brandon",
  "drinkType": "latte",
  "size": "large",
  "price": 5.5,
  "isIced": true,
  "status": "pending",
  "notes": "Oat milk, extra hot"
}
```

### Get All Orders
`GET /api/orders`

### Filter Orders
`GET /api/orders?status=pending&drinkType=latte`

### Get Order by ID
`GET /api/orders/:id`

### Update an Order
`PUT /api/orders/:id`  
Example body:
```json
{
  "status": "completed"
}
```

### Delete an Order
`DELETE /api/orders/:id`

## Screenshots
All required screenshots are included in the `/screenshots` folder:
- create_order.png  
- get_orders.png  
- filter_orders.png  
- get_order_by_id.png  
- update_order.png  
- delete_order.png  

## Project Structure
```
assignment_5/
├── server.js
├── package.json
├── routes/
│   └── orders.js
├── models/
│   └── Order.js
├── config/
│   └── db.js
├── .env
├── README.md
├── AI_COLLABORATION.md
└── screenshots/
```

## Author
Brandon DaLuz  
Assignment 5 – Coffee Shop API  
St. Petersburg College