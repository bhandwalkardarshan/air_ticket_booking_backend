# Air Ticket Booking System

The Air Ticket Booking System is a Node.js-based backend application that allows users to book flights to their desired destinations. It provides CRUD (Create, Read, Update, Delete) operations for flights and booking management, user registration, and login functionality with password hashing and JWT token generation.

## Features

- **User Registration:** Allows users to register by providing their name, email, and password. Passwords are securely hashed before storage.
- **User Login:** Provides a login endpoint where users can authenticate using their email and password. A JWT (JSON Web Token) is generated upon successful login.
- **Flight Management:** Supports CRUD operations for flights, including creating, reading, updating, and deleting flight information.
- **Booking Management:** Supports CRUD operations for bookings, including creating, reading, updating, and deleting bookings.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for building APIs.
- **MongoDB:** NoSQL database used for storing flight, user, and booking data.
- **Mongoose:** MongoDB object modeling tool for Node.js.
- **Bcrypt:** Library for hashing passwords securely.
- **JSON Web Tokens (JWT):** Used for user authentication and token generation.
- **dotenv:** Package for loading environment variables from a `.env` file.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhandwalkardarshan/air_ticket_booking_backend
   cd air_ticket_booking_backend
2. Install dependencies:

    ```bash
    npm install 
3. Create a .env file in the project root directory and add your configuration settings:

    ```bash
    JWT_SECRET=your-secret-key-here
    MONGO_URL=mongodb://localhost:27017/your-database-name
3. Start the application:

    ```bash
    npm start
The application will be accessible at http://localhost:3000.

## API Endpoints
- /api/users/register (POST): User registration endpoint.
- /api/users/login (POST): User login endpoint to obtain a JWT token.
- /api/flights (GET, POST): List all available flights or create a new flight.
- /api/flights/:id (GET, PUT, DELETE): Retrieve, update, or delete a specific flight by ID.
- /api/bookings (GET, POST): List all bookings or create a new booking.
- /api/bookings/:id (GET, PUT, DELETE): Retrieve, update, or delete a specific booking by ID.

## Usage
You can use tools like Postman or any REST client to interact with the API endpoints. Make sure to include the necessary headers and request data as per the API documentation.

## Deployment
This section can include information on how to deploy your application to production, any hosting or server requirements, and other deployment-related instructions.