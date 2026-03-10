# AI Collaboration Documentation

This document explains how AI was used during the development of the Coffee Shop API for Assignment 6.

## Prompts Used and Helpfulness

### 1. Prompt:
"Why is Render giving me 'Invalid scheme' when connecting to MongoDB?"
**Helpfulness:** Very helpful.  
AI explained that Render was loading my empty `.env` file from GitHub, which overwrote the real environment variables I set in the Render dashboard. This helped me understand why `process.env.MONGODB_URI` was coming through as undefined.

### 2. Prompt:
"Do I delete my .env file or move it? And where does .gitignore go?"
**Helpfulness:** Very helpful.  
AI clarified that `.gitignore` is a file (not a folder) and that `.env` should be deleted from the repo entirely. This fixed the issue where Render was injecting `(0)` environment variables.

### 3. Prompt:
"Why is Render saying 'injecting env (0) from .env'?"
**Helpfulness:** Very helpful.  
AI explained that Render found my `.env` file in the repo, saw it was empty, and used it instead of the real environment variables. This was the root cause of the deployment failure.

### 4. Prompt:
"Is my folder structure correct? Where should .env.local go?"
**Helpfulness:** Helpful.  
AI helped me understand that `.env.local` is only for Next.js projects and not needed here. It also confirmed that my Express/MongoDB folder structure was correct.

### 5. Prompt:
"Write a README.md for my Coffee Shop API."
**Helpfulness:** Very helpful.  
AI generated a clean, professional README that I edited to match my exact folder tree and assignment requirements.

---

## Example Where I Had to Fix AI’s Suggestion

AI originally suggested keeping a `.env` file in the project root. This caused Render to load the empty `.env` file and ignore the real environment variables I set in the dashboard. I had to fix this by:

- Deleting `.env` from the repository  
- Adding `.env` to `.gitignore`  
- Committing the deletion  
- Redeploying with “Clear Build Cache”  

This solved the “Invalid scheme” error and allowed the API to connect to MongoDB Atlas correctly.

---

## How AI Assisted

AI helped throughout the project by:
- Explaining why Render was ignoring my real environment variables  
- Helping me understand how `.env` files work in deployment  
- Guiding me through fixing the `.gitignore` setup  
- Helping me debug the MongoDB connection error  
- Confirming my folder structure and project organization  
- Providing example JSON bodies for testing  
- Helping me write the README.md and RESEARCH.md files  
- Walking me through the Render deployment process step-by-step  

AI acted like a tutor, helping me understand the problems instead of just giving answers.

---

## What I Wrote Myself

- Implemented all code in VS Code  
- Created the Express server and MongoDB connection  
- Built the routes, models, controllers, and config files  
- Set up MongoDB Atlas and connected it to Render  
- Ran all CRUD tests in Postman/Thunder Client and captured screenshots  
- Verified all endpoints worked locally and in production  
- Packaged the final project for submission  

---

## Reflection

AI was especially helpful when debugging the deployment issues. The `.env` problem was confusing at first, but AI helped me understand exactly why Render was failing and how to fix it. I still had to do the actual work — deleting files, committing changes, redeploying, and testing everything — but AI made the process much clearer.

This assignment helped me understand real-world backend development, especially environment variables, deployment, and debugging.

---

## Academic Integrity

All final code was reviewed, tested, and understood by me.  
AI was used as a learning tool, not as a replacement for my own work.