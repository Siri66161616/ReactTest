Step-by-step process to create a Node.js server using Express and MySQL that covers:

✅ GET API — Fetching data from std_questioneers.
✅ POST API — Inserting data into std_check_submissions.

Step 1: Initialize a Node.js Project

Open your terminal and create a folder:
mkdir node-mysql-api
cd node-mysql-api
npm init -y

Step 2: Install Dependencies

npm install express mysql2 body-parser cors

Step 3: Create server.js

Create a file called server.js in your project folder:

Step 4: Run Your Server

node server.js

## Your API will now be live:

    GET request:
    http://localhost:3000/api/questioneers
    (Returns JSON from std_questioneers)

    POST request:
    http://localhost:3000/api/check-submissions

Example JSON body for POST:

{
"sub_category": "Hardware",
"check_tobe_performed": "Verify power supply connection",
"category": "System",
"action_data": "Reconnected power cable",
"project_id": 101,
"documented_outcome": "System powered up successfully"
}
