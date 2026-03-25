# JOBIFY (MERN - MongoDB, Express, ReactJS and NodeJS)

## React

[React](https://react.dev/) is a JavaScript library for building user interfaces, especially single-page applications where you need fast, interactive, and dynamic views.

## Node.js

[Node.js](https://nodejs.org/en) is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser, mainly for building server-side applications.

### New Features

- fetch API
- global await
- watch mode

## Express.js

[Express.js](https://expressjs.com/) is a minimal and flexible web framework for Node.js used to build web servers and APIs quickly.

### Not Found and Error Middleware

The "not found" middleware in Express.js is used when a request is made to a route that does not exist. It catches these requests and response with a 404 status code, indicating that the requested resource was not found.

On the other hand, the "error" middleware in Express.js is used to handle any errors that occur during the processing of a request. It is typically used to catch unexpected errors or exceptions that are not explicitly handled in the application code. It logs the error and sends 500 status code, indicating an internal server error.

In summary, the "not found" middleware is specifically designed to handle requests fro non-existent routes, while the "error" middleware is a catch-all handling unexpected errors that occur during request processing.

- Make a request to "/jobss"

### HTTP Only Cookie

An HTTP-only cookie is a cookie that can't be accessed by JavaScript running in the browser. It is designed to help prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.

#### HTTP Only Cookie VS Local Storage

An HTTP-only cookie is a type of cookie that is designed to be inaccessible to JavaScript running in the browse. It is primarily used for authentication purposes and is a more secure way of storing sensitive information like user tokens.

Local Storage, on the other hand, is a browser-based storage mechanism that is accessible to JavaScript, and is used to store application data like preferences or user-generated content. While local storage is convenient, it is not a secure way of storing sensitive information as it can be accessed and modified by JavaScript running in the browser.

## MongoDB

[MongoDB](https://www.mongodb.com/) is an open-source, NoSQL database that stores data in flexible, JSON-like documents instead of traditional tables and rows.

### MongoDB Atlas

[MongoDB Atlas](https://cloud.mongodb.com/) is a fully managed cloud database service for running MongoDB on cloud platform like Amazon Web Service, Google Cloud, and Microsoft Azure.
