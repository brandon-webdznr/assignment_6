# AI Collaboration Documentation

This document explains how AI was used during the development of the Coffee Shop API for Assignment 5.

## Prompts Used and Helpfulness

### 1. Prompt:
"Why am I getting 'Cannot GET /api/orders%0A' in Postman?"
**Helpfulness:** Very helpful.  
AI explained that `%0A` was a hidden newline character and helped me fix the URL formatting issue.

### 2. Prompt:
"Why is req.body undefined when I send a POST request?"
**Helpfulness:** Very helpful.  
AI identified that Postman was not sending JSON correctly and showed me how to set Body → raw → JSON.

### 3. Prompt:
"How do I structure my Express + MongoDB project with routes, models, and config folders?"
**Helpfulness:** Helpful.  
AI provided a clean folder structure that I used as the base for my project.

### 4. Prompt:
"Why is my MongoDB connection failing with ECONNREFUSED?"
**Helpfulness:** Partially helpful.  
AI suggested checking if MongoDB was running, which was correct, but I still had to manually restart my MongoDB service to fix it.

### 5. Prompt:
"Write a README.md for my Coffee Shop API."
**Helpfulness:** Very helpful.  
AI generated a clean, professional README that I edited slightly to match my project.

---

## Example Where I Had to Fix AI’s Suggestion

AI originally suggested a Mongoose schema that used `required: true` on every field. I had to modify it because the assignment required:

- at least two required fields  
- at least one default value  
- at least one validation rule  

I adjusted the schema myself to include a default `status: "pending"` and added a validation rule for `price` (minimum value). This ensured the schema met the assignment requirements.

---

## How AI Assisted

AI helped throughout the project by:
- Explaining errors and how to fix them  
- Helping structure the project folders  
- Providing example JSON bodies for testing  
- Guiding me through setting up Mongoose and environment variables  
- Helping me debug route issues and Postman formatting problems  
- Assisting in writing documentation files  

AI acted like a tutor, helping me understand each step instead of just giving answers.

---

## What I Wrote Myself

- Implemented all code in VS Code  
- Created the Express server and MongoDB connection  
- Built the routes, models, and config files  
- Installed and configured MongoDB locally  
- Ran all CRUD tests in Postman and captured screenshots  
- Verified all endpoints worked correctly  
- Packaged the final project for submission  

---

## Reflection

AI was especially good at explaining errors, helping me debug, and giving me examples to follow. It sped up the development process and helped me understand why things were breaking. However, I still had to fix certain issues myself, like adjusting the schema to match assignment requirements and restarting MongoDB manually. AI made the assignment easier, but I still had to think critically and understand the code I was writing.

---

## Academic Integrity

All final code was reviewed, tested, and understood by me.  
AI was used as a learning tool, not as a replacement for my own work.
