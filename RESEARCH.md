# RESEARCH.md  
Assignment 6 – Coffee Shop API  
Brandon DaLuz  
St. Petersburg College

This document explains the research I did while building my Coffee Shop API using Node.js, Express, and MongoDB. I wanted to understand not just how to build the API, but why these tools are used in real projects and how they work together. This is written in my own words based on what I learned throughout the assignment.

---

## Understanding REST APIs
A REST API is basically a backend that lets clients interact with data using standard HTTP methods. The idea is simple: each type of data is treated like a “resource,” and you use different HTTP verbs to work with it.

### What I learned about REST:
- **GET** is for reading data  
- **POST** is for creating new data  
- **PUT** is for updating existing data  
- **DELETE** removes data  
- Everything is **stateless**, meaning each request stands on its own  
- JSON is the most common format for sending data back and forth  

In this project, the main resource is `orders`, and each route follows REST conventions. This helped keep the API predictable and easy to test.

---

## Learning Express.js
Express is a lightweight framework for building servers with Node.js. Before this assignment, I knew the basics, but this project helped me understand how to structure a real API.

### What stood out to me:
- Express makes routing simple and clean  
- Middleware like `express.json()` handles JSON automatically  
- It works really well with MongoDB and Mongoose  
- You can split your logic into routes, controllers, and config files  

In my project, Express handles the routing in `routes/orderRoutes.js`, while the actual logic lives in `modules/orderController.js`. This separation made the code easier to manage.

---

## Researching MongoDB & Mongoose
MongoDB is a NoSQL database, which means it stores data in flexible documents instead of strict tables. Mongoose sits on top of MongoDB and gives you schemas, validation, and cleaner queries.

### What I learned:
- MongoDB is great when your data structure might change over time  
- Mongoose helps enforce structure with schemas  
- It also gives you helpful methods like `find()`, `create()`, and `findByIdAndUpdate()`  
- It’s easy to connect to MongoDB Atlas using a connection string  

In this project, the `Order` model defines what an order should look like, and the controller uses Mongoose to interact with the database.

---

## Understanding Deployment with Render
This was the biggest learning curve in the entire assignment. I ran into multiple issues that taught me how deployment actually works in the real world.

### The biggest things I learned:
- Render does **not** use your `.env` file from GitHub  
- If `.env` exists in the repo, Render will load it and **ignore** the real environment variables  
- This caused Render to inject `(0)` environment variables and break my MongoDB connection  
- The “Invalid scheme” error was caused by Render reading an empty `.env` file  
- The fix was to delete `.env` from the repo and add it to `.gitignore`  
- After that, Render used the correct MongoDB URI from the dashboard  

### Why this mattered:
This was the first time I understood how environment variables work differently in local development vs. cloud deployment. It also taught me why `.env` files should never be committed and how cloud platforms override or ignore them.

---

## CORS (Cross‑Origin Resource Sharing)
CORS was something I had heard of before, but this assignment helped me understand why it matters. Browsers block requests from one domain to another by default for security reasons. This means if a website tries to call my API from a different domain, the browser will stop it unless I explicitly allow it.

### What I learned about CORS:
- CORS prevents unauthorized websites from calling your API  
- You need to enable it when your frontend and backend are on different domains  
- Render gives your API a public URL, so CORS becomes important  
- Adding the `cors` middleware tells browsers that your API is safe to access  

A real example would be a React app hosted on Netlify calling my API on Render — without CORS, the browser would block the request.

---

## Health Check Endpoints
Render uses health checks to confirm your app is running. Without a health check, Render might think your app is failing and restart it.

### What I learned:
- A health check is a simple route like `/health`  
- It returns something like `{ status: "ok" }`  
- Render pings this route to make sure your app is alive  
- Without it, your app might get stuck in a restart loop  

This was easy to add but important for deployment stability.

---

## Free Tier Cold Starts
This was something I noticed after deploying: sometimes the API took 30–60 seconds to respond. At first, I thought something was broken, but it turns out this is normal for free hosting.

### What I learned about cold starts:
- Free-tier apps “sleep” when they’re inactive to save resources  
- When someone visits the API after it has been idle, Render has to “wake it up”  
- This wake-up process is called a **cold start**  
- Paid tiers keep apps running 24/7, so they don’t have this delay  

In a real production app, cold starts would not be acceptable, but for learning and small projects, it’s totally fine.

---

## Folder Structure & MVC Pattern
This project follows a simple version of the MVC pattern, which keeps everything organized.

### How I used MVC:
- **Models** define the data structure (`models/Order.js`)  
- **Controllers** handle the logic (`modules/orderController.js`)  
- **Routes** map URLs to controller functions (`routes/orderRoutes.js`)  
- **Config** handles the database connection (`config/db.js`)  

This structure made the project easier to understand and scale.

---

## Testing the API
I used Thunder Client and Postman to test all my routes. This helped me confirm that each endpoint worked both locally and after deployment.

### What testing helped me understand:
- How to send JSON bodies  
- How to test query parameters  
- How to verify error handling  
- How to check if the database updates correctly  
- How to confirm that the deployed API behaves differently from local development  

Testing was especially important after deployment because it helped me confirm that the API was actually connected to MongoDB Atlas.

---

## What I Learned Overall
This assignment helped me understand how all the pieces of a backend API fit together. I learned how to:

- Build a REST API from scratch  
- Structure a Node.js project using MVC  
- Connect to MongoDB Atlas with Mongoose  
- Deploy a live API using Render  
- Fix environment variable issues that break deployment  
- Understand the difference between local and cloud environments  
- Configure CORS and health checks  
- Test endpoints using API tools  

Overall, this project gave me real experience with tools and workflows that are used in actual backend development, especially debugging and deployment — which ended up being the most valuable part of the assignment.
