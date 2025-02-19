---
title: Setting Up a TypeScript and Express.js Server
description: TypeScript is becoming increasingly popular for backend development due to its static typing and enhanced developer experience. When combined with Express.js, it provides a robust and scalable backend solution. In this guide, we'll walk through setting up a TypeScript-based Express.js server from scratch.
tags: ["TypeScript", "Express.js", "Server Setup"]
author: Noyon Rahman
date: 2025-02-19
---

# Setting Up a TypeScript and Express.js Server

## Introduction

TypeScript is becoming increasingly popular for backend development due to its static typing and enhanced developer experience. When combined with Express.js, it provides a robust and scalable backend solution. In this guide, we'll walk through setting up a TypeScript-based Express.js server from scratch.

## Prerequisites

Before we begin, ensure you have the following installed:

- **Node.js** (LTS recommended)
- **npm** or **yarn**
- **TypeScript** (installed globally or per project)

## Step 1: Initialize a New Project

Create a new directory for your project and navigate into it:

```sh
mkdir express-typescript-server
cd express-typescript-server
```

Initialize a new Node.js project:

```sh
npm init -y
```

## Step 2: Install Dependencies

We need to install Express.js along with TypeScript and other necessary packages:

```sh
npm install express
npm install --save-dev typescript ts-node @types/node @types/express nodemon
```

- `express`: The web framework
- `typescript`: TypeScript compiler
- `ts-node`: Allows running TypeScript files directly
- `@types/node`: Type definitions for Node.js
- `@types/express`: Type definitions for Express.js
- `nodemon`: Auto-restarts server on file changes

## Step 3: Configure TypeScript

Generate a TypeScript configuration file:

```sh
tsconfig.json
```

Populate it with the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true
  }
}
```

## Step 4: Create the Express Server

Inside the project, create a `src` directory and add an `index.ts` file:

```sh
mkdir src
cd src
```

Now, open `src/index.ts` and add the following code:

```typescript
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## Step 5: Add Scripts to `package.json`

Modify the `package.json` file to include the following scripts:

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts",
  "build": "tsc"
}
```

## Step 6: Run the Server

To start the development server, run:

```sh
npm run dev
```

To build and run the production server:

```sh
npm run build
npm start
```

## Conclusion

You've successfully set up an Express.js server with TypeScript! This setup provides type safety, improved code maintainability, and a better developer experience. You can now extend this base to build APIs, add middleware, and integrate databases.

Happy coding! 🚀
