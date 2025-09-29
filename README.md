# Simple Node.js HTTP Server

This project is a homework assignment that demonstrates how to create a small HTTP server with Node.js.  
The server listens on port 4002 and returns different static HTML pages depending on the URL requested.

---------------------------------

Task description:

The goal was to build a basic web server using only Node.js built-in modules such as http, fs, and path.  
The server must:

- Serve a home page when the URL is /
- Serve a contacts page when the URL is /contacts
- Serve a help page when the URL is /help
- For any other URL, serve a notfound page
  
All HTML files are stored in a separate folder called pages.  
The project uses ES Modules (import/export) instead of CommonJS (require).

---------------------------------

## Features
- Simple routing using Node.js http module
- File reading with fs to return the correct HTML file
- Organized folder structure with a dedicated pages directory

---------------------------------

## Project Structure
.
├── package.json
├── server.js
└── pages
    ├── home.html
    ├── contacts.html
    ├── help.html
    └── notfound.html

---------------------------------

## Installation
Clone the repository and install dependencies:
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install

---------------------------------

## Usage
Start the server:
node server.js
or, if a dev script is added:
npm run dev

The server will be available at:
http://localhost:4002

---------------------------------

## Requirements
- Node.js version 18 or higher

---------------------------------

## Author
Nonna Arzumanyan  
Created as part of a Node.js learning assignment.
