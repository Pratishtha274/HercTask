// const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(400).json({ message: "Invalid token" });
//     }
// };

// module.exports = authenticate;
// const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//     const authHeader = req.header("Authorization");

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ message: "Access denied. No valid token provided." });
//     }

//     const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Attach user info to request
//         next(); // Move to next middleware or route handler
//     } catch (error) {
//         return res.status(401).json({ message: "Invalid or expired token" });
//     }
// };

// module.exports = authenticate;
// const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//     const authHeader = req.header("Authorization");
//     console.log("Authorization Header:", authHeader); // Debugging

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ message: "Access denied. No valid token provided." });
//     }

//     const token = authHeader.split(" ")[1]; // Extract token
//     console.log("Extracted Token:", token); // Debugging

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("Decoded Token:", decoded); // Debugging
//         req.user = decoded; // Attach user info
//         next();
//     } catch (error) {
//         console.error("JWT Verification Error:", error.message); // Log error details
//         return res.status(401).json({ message: "Invalid or expired token" });
//     }
// };

// module.exports = authenticate;
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   // Get the token from the request headers
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({ message: "No valid token provided" });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach the decoded user to the request object
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = authMiddleware;
// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];

//   if (!token) {
//     return res.status(401).json({ message: "Access Denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info to request
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "Invalid token." });
//   }
// };

// module.exports = verifyToken;
// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Access Denied. No valid token provided." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info to request
//     next();
//   } catch (error) {
//     return res.status(403).json({ error: "Invalid or expired token." });
//   }
// };

// module.exports = verifyToken;
// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//     try {
//       // Step 1: Retrieve token from the Authorization header
//       const authHeader = req.headers["authorization"];
      
//       // If no Authorization header or doesn't start with 'Bearer'
//       if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ error: "Access Denied. No valid token provided." });
//       }
  
//       // Step 2: Extract token from Authorization header
//       const token = authHeader.split(" ")[1];
  
//       // Step 3: Verify and decode the token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
//       // Step 4: Attach user info to the request object (for use in later stages)
//       req.user = decoded;
  
//       // Step 5: Check token expiration manually (optional but useful for debugging)
//       const now = Math.floor(Date.now() / 1000); // Current timestamp in seconds
//       if (decoded.exp < now) {
//         return res.status(401).json({ error: "Token has expired." });
//       }
  
//       // Step 6: Proceed to next middleware or route handler
//       next(); 
//     } catch (error) {
//       // Step 7: Handle invalid token or any error that occurs during verification
//       console.error("JWT Verification Error:", error.message); // Log error for debugging
      
//       // Step 8: Send appropriate response in case of error
//       return res.status(403).json({ error: "Invalid or expired token." });
//     }
//   };
  
//   module.exports = verifyToken;
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // Step 1: Retrieve token from the Authorization header
    const authHeader = req.headers["authorization"];
    
    // If no Authorization header or doesn't start with 'Bearer'
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.error("Authorization header missing or malformed."); // Debugging line
      return res.status(401).json({ error: "Access Denied. No valid token provided." });
    }

    // Step 2: Extract token from Authorization header
    const token = authHeader.split(" ")[1];
    console.log("Token received:", token); // Debugging line

    // Step 3: Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Debugging line

    // Step 4: Attach user info to the request object (for use in later stages)
    req.user = decoded;

    // Step 5: Proceed to next middleware or route handler
    next(); 
  } catch (error) {
    // Step 6: Handle invalid token or any error that occurs during verification
    console.error("JWT Verification Error:", error.message); // Log error for debugging
    
    // Step 7: Send appropriate response in case of error
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = verifyToken;
