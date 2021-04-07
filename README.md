# LISTUP-backend
LISTUP-backend is api project built with Node.js, Express.js and MongoDB. 

## Table of contents
* [Features](#features)
* [Getting started](#getting-started)
* [Application Structure](#application-structure)
* [API](#api)
* [Notes](#notes)

## Features
* [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests.
* [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript.
* [nodemon](https://github.com/remy/nodemon) - The tools that helps develop Node.js based application.
* [cors](https://github.com/expressjs/cors) - Node.js package for providing a Connect/Express.

## Getting Started
```
git clone https://github.com/msimsir/listup-backend.git
cd listup-backend
npm install
nodemon index.js
```

## Application Structure
* `index.js` - The enrty point to the application.  This file defines our express server and connects it to MongoDB using mongoose. 
* `routes/` - This folder contains the route definitions for our API.
* `models/` - This folder contains the schema definitions for our Mongoose models.
* `controller/` - This folder contains adapter that handler requests, interact with models and send back to the client.
* `utils/` - This folder contains helper functions.

## API
**/tasks**
* `GET`: Get all tasks
* `POST`: Create a new task

**/tasks/:id**
* `PATCH`: Update a task
* `DELETE`: Delete a task

**/lists**
* `GET`: Get all lists
* `POST`: Create a new list

**/lists/:id**
* `PATCH`: Update a list
* `DELETE`: Delete a list

**/tags**
* `GET`: Get all tags
* `POST`: Create a new tag

**/tags/:id**
* `PATCH`: Update a tag
* `DELETE`: Delete a tag

## Notes
User authentication, routines, schedule will be added.
