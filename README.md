# Coffee Shop API (MongoDB + Express)

This project is a RESTful API for managing coffee shop orders. It was built using Node.js, Express, and MongoDB as part of Assignment 6. The API supports full CRUD operations, filtering, and validation while following a clean and organized project structure. This version also includes a live deployment on Render.

## Features
- Create new coffee orders  
- Retrieve all orders  
- Filter orders by status and drink type  
- Retrieve a single order by ID  
- Update existing orders  
- Delete orders  
- MongoDB Atlas connection using Mongoose  
- Organized folder structure with routes, models, controllers, and config  
- Fully deployed and accessible online via Render  

## Technologies Used
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- dotenv  
- Postman / Thunder Client for testing  
- Render (cloud deployment)

## Installation
1. Download or clone the project folder.  
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the project root (LOCAL ONLY — not included in GitHub):
```
MONGODB_URI=your_local_or_atlas_connection_string
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

## Live Deployment
The API is deployed on Render and accessible at:

```
https://coffee-shop-api-ec5y.onrender.com
```

Render environment variables include:
```
MONGODB_URI=your_atlas_connection_string
```

## API Endpoints

### Health Check
`GET /health`  
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
  "notes": "Oat milk"
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
- health.png  
- post_orders.png  
- get_orders.png  
- render_dashboard.png  
- github_repo.png  
- github_server_file.png  

## Project Structure
```
assignment_6/
├── server.js
├── package.json
├── package-lock.json
├── routes/
│   └── orderRoutes.js
├── models/
│   └── Order.js
├── modules/
│   └── orderController.js
├── config/
│   └── db.js
├── screenshots/
│   └── (assignment screenshots)
├── .gitignore
├── README.md
├── RESEARCH.md
└── AI_COLLABORATION.md
```

## Author
Brandon DaLuz  
Assignment 6 – Coffee Shop API  
St. Petersburg College