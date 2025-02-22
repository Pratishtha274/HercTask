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
