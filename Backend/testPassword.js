const bcrypt = require("bcrypt");

const testPassword = "987654321";
const storedHash = "$2b$10$5WlOw3uGJMSoxeiUHdTzhekFNOOUHFuffEhFiOVnEFWvZs1XKLAVW";

bcrypt.compare(testPassword, storedHash, (err, result) => {
    if (err) {
        console.error("Error comparing passwords:", err);
    } else {
        console.log("Password match result:", result); // Should be true if the password matches
    }
});