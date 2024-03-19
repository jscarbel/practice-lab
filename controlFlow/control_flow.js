let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "full access granted";
} else if (userRole === "manager") {
accessLevel = "limited access granted";
} else {
    accessLevel = "no access granted";
}

// test
console.log("access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "welcome, admin!";
    } else {
        userMessage = "welcome, user!";
    }
} else {
    userMessage = "please log in to access the system."
}

// test
console.log("user message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

// test
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated"

// test
console.log("Authentication Status:", authenticationStatus);