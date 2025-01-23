Testing
# React JS Frontend with Python Backend & MySQL

## Description
This project demonstrates how to use React to fetch data from a MySQL database through a Python backend using REST API calls. The frontend is built with React and Axios, and the backend interacts with a MySQL database using Python.

## Prerequisites
- **Node.js** (version 22.12.0)  
  [Install Node.js](https://nodejs.org/en)

- **npm** (version 10.9.0)  
  Automatically installed with Node.js

- **Python** (version 3.x)  
  Ensure you have Python installed for the backend.

- **MySQL**  
  Set up a MySQL database for the backend.

## Installation

### Frontend (React)
1. **Install Visual Studio Code**  
   To set up your environment, you can use [Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial).

2. **Create a New React App:**
   ```bash
   npx create-react-app project_info_frontend
   cd project_info_backend
   ```

3. **Start the React App:**
   ```bash
   npm start
   ```
   This will start the app on `http://localhost:3000`.

4. **Install Required Packages:**
   - Install React, React DOM, Babel, and Babel loader:
     ```bash
     npm install react react-dom @babel/preset-react babel-loader
     ```

   - Install Axios for making API requests:
     ```bash
     npm install axios
     ```

   - Install React version 18:
     ```bash
     npm install react@18 react-dom@18
     ```

### Backend (Python)
1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   ```
   
2. Install required backend dependencies (e.g., Flask/Django, SQLAlchemy):
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the database (MySQL):
   - Instructions for creating the database and tables in MySQL.

## Running the Application

### Frontend
Run the React app:
```bash
npm start
```
This will start the frontend on `http://localhost:3000`.

### Backend
Run the Python backend (using Flask/Django):
```bash
python app.py  # or python manage.py runserver for Django
```
The backend will be available at `http://localhost:5000` or another port if specified.



## API Endpoints

- `GET /api/projects` - Fetches all projects information.

## Technologies Used
- **Frontend**: React (v18), Axios, Babel
- **Backend**: Python, Flask/Django, SQLAlchemy
- **Database**: MySQL

