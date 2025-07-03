// import express, { Request, Response, NextFunction } from "express";
// import registerRoutes from "./routes";  // ye sahi hai, kyunki default export use ho raha hai

// import { setupVite, serveStatic, log } from "./vite";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((req: Request, res: Response, next: NextFunction) => {
//   const start = Date.now();
//   const path = req.path;
//   let capturedJsonResponse: Record<string, any> | undefined = undefined;

//   const originalResJson = res.json.bind(res);
//   res.json = function (bodyJson: any, ...args: any[]) {
//     capturedJsonResponse = bodyJson;
//     return originalResJson(bodyJson, ...args);

    
//   };

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     if (path.startsWith("/api")) {
//       let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
//       if (capturedJsonResponse) {
//         logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
//       }

//       if (logLine.length > 80) {
//         logLine = logLine.slice(0, 79) + "…";
//       }

//       log(logLine);
//     }
//   });

//   next();
// });

// (async () => {
//   const server = await registerRoutes(app);

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     res.status(status).json({ message });
//     // throw err;  // error ko dobara throw karne ka jarurat nahi hai yaha, hata dein to better hoga
//   });

//   if (app.get("env") === "development") {
//     await setupVite(app, server);
//   } else {
//     serveStatic(app);
//   }

//   const port = 5000;
//   server.listen(
//     {
//       port,
//       host: "0.0.0.0",
//       reusePort: true,
//     },
//     () => {
//       log(`serving on port ${port}`);
//     }
//   );
// })();
// import app from "./server";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// import express from 'express';
// import bookingRoutes from './routes';
// import cors from 'cors';
// import * as nodemailer from "nodemailer";
// import * as dotenv from "dotenv";


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bookingRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// import app from './server';
// import express from "express";

// const PORT = process.env.PORT || 5001;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("✅ Server is working properly!");
// });


// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// import portfinder from "portfinder";

// portfinder.getPort((err, port) => {
//   if (err) throw err;
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });
// });
// import app from "./server";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
console.log("Nothing here. Using server.ts directly.");
