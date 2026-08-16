# Hospital Management System

A full-stack Hospital Management System built to manage hospital records through a simple and easy-to-use web application.

The project provides a REST API for hospital data and a React-based frontend for interacting with that API. It supports creating, viewing, updating, and deleting hospital records.

## Features

- Add a new hospital
- View all hospitals
- View a hospital by ID
- Update hospital information
- Delete a hospital
- Store hospital data in MongoDB
- RESTful API using Express.js
- React frontend for managing hospital records
- Simple and clean user interface
- CORS support for frontend-backend communication

## Technologies Used

### Frontend
- React
- JavaScript
- HTML
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS
- dotenv

## Project Structure

```text
Hospital-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── hospital.js
│   ├── router/
│   │   └── hospitalrouter.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddHospital.jsx
│   │   │   └── HospitalList.jsx
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## Hospital Data

Each hospital record contains the following information:

| Field | Type | Description |
|---|---|---|
| `name` | String | Name of the hospital |
| `city` | String | City where the hospital is located |
| `totalBeds` | Number | Total number of beds |
| `availableBeds` | Number | Currently available beds |

MongoDB automatically generates a unique `_id` for every hospital record.

## API Endpoints

The backend provides the following endpoints.

### Get All Hospitals

```http
GET /hospitals
```

Returns all hospital records.

### Get a Hospital by ID

```http
GET /hospitals/:id
```

Returns the hospital associated with the given ID.

### Add a Hospital

```http
POST /hospitals
```

Example request:

```json
{
  "name": "City Care Hospital",
  "city": "Mumbai",
  "totalBeds": 250,
  "availableBeds": 80
}
```

### Update a Hospital

```http
PUT /hospitals/:id
```

Example request:

```json
{
  "name": "City Care Hospital",
  "city": "Mumbai",
  "totalBeds": 300,
  "availableBeds": 120
}
```

### Delete a Hospital

```http
DELETE /hospitals/:id
```

Deletes the hospital associated with the given ID.

## Application Flow

The application follows a simple request flow:

```text
React Frontend
      ↓
Express API
      ↓
Hospital Router
      ↓
Mongoose Model
      ↓
MongoDB
```

The frontend sends HTTP requests to the Express server. The appropriate route handles the request and uses the Mongoose model to read or modify hospital information in MongoDB.

## Setup

### 1. Install Node.js

Make sure Node.js and npm are installed.

Check your installation:

```bash
node -v
npm -v
```

### 2. Configure MongoDB

MongoDB must be running locally or an accessible MongoDB Atlas database can be used.

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/hospital-management
PORT=4000
```

For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

### 3. Install Backend Dependencies

Open a terminal in the project folder and run:

```bash
cd backend
npm install
```

### 4. Start the Backend

```bash
npm start
```

The backend will run on:

```text
http://localhost:4000
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

```bash
npm start
```

The React application will normally be available at:

```text
http://localhost:3000
```

## Running the Project

Two terminals are required.

### Terminal 1

```bash
cd backend
npm install
npm start
```

### Terminal 2

```bash
cd frontend
npm install
npm start
```

Once both servers are running, open the frontend in your browser.

## Backend

The backend is responsible for:

- Starting the Express server
- Connecting to MongoDB
- Defining the hospital data model
- Handling hospital routes
- Processing CRUD operations
- Returning JSON responses

## Frontend

The frontend provides the user interface for:

- Adding hospitals
- Displaying hospital records
- Editing hospital information
- Deleting hospital records
- Communicating with the backend API

## Error Handling

The API returns appropriate HTTP status codes for common situations such as:

- Successful requests
- Invalid hospital IDs
- Hospital records not being found
- Invalid request data
- Server or database errors

## Future Improvements

The project can be extended with:

- Hospital search
- City-based filtering
- Bed availability filtering
- Pagination
- Authentication
- User roles
- Hospital statistics dashboard
- Improved validation
- Better loading and error states

## Author

Created as a Hospital Management System project using the MERN stack.
