 // api.js
     import { createClient } from "@geminivision/node-sdk";
     
     // Create a new client instance with your API key
     const client = createClient({
       apiKey: "YOUR_API_KEY",
     });
     
     // Export the client for use in other modules
     export default client;