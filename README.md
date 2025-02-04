# Express Banking System

## Description

This project is an Express-based banking system designed to streamline and optimize banking operations. It provides a secure and user-friendly interface for managing bank accounts, facilitating money transfers, and simplifying the account creation process. The system allows customers to create accounts, check balances, and perform transactions, while also providing banking professionals with tools to manage accounts and transactions efficiently.

The project integrates JavaScript, data structures, and basic algorithms to deliver a robust and scalable solution for modern banking needs.

---

## Features

1. **Account Creation**: 
   - Customers can create new bank accounts by providing their name, email, and initial deposit amount.
   - Each account is assigned a unique account ID.

2. **Balance Inquiry**: 
   - Customers can check their account balance by providing their account ID.

3. **Money Transfer**: 
   - Customers can transfer money between accounts.
   - The system ensures that the transfer is valid (e.g., sufficient balance, valid account IDs).

4. **Transaction History**: 
   - Customers can view their transaction history, including deposits, withdrawals, and transfers.

5. **Error Handling**: 
   - The system validates input data and provides appropriate error messages for invalid requests.

---

## Technologies Used

- **JavaScript**: A high-level, interpreted programming language used for building the application logic.
- **Express.js**: A web application framework for Node.js used to build the RESTful API.
- **Body-Parser**: Middleware for parsing incoming request bodies in JSON format.
- **Data Structures**: Arrays and objects are used to store and manage accounts and transactions.
- **Basic Algorithms**: Simple algorithms are implemented for account ID generation, balance checks, and money transfers.

---

## API Endpoints

### 1. **Create Account**
- **Endpoint**: `POST /createAccount`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "amount": 1000
  }
  ```
- **Response**:
  ```json
  {
    "message": "Account created successfully",
    "accountID": "1001"
  }
  ```

### 2. **Check Balance**
- **Endpoint**: `GET /balance/:accountId`
- **Response**:
  ```json
  "The balance of Account Number: 1001 is 1000"
  ```

### 3. **Transfer Money**
- **Endpoint**: `POST /transfer`
- **Request Body**:
  ```json
  {
    "fromAccount": "1001",
    "toAccount": "1002",
    "amount": 500
  }
  ```
- **Response**:
  ```json
  {
    "message": "Amount transferred successfully from 1001 to 1002"
  }
  ```

### 4. **View Transactions**
- **Endpoint**: `GET /transactions/:accountId`
- **Response**:
  ```json
  {
    "transactions": [
      {
        "type": "Debit",
        "amount": 500,
        "date": "2023-10-01T12:34:56.789Z"
      },
      {
        "type": "Credit",
        "amount": 1000,
        "date": "2023-10-01T12:35:56.789Z"
      }
    ]
  }
  ```

---

## How to Run the Project

1. **Prerequisites**:
   - Node.js and npm installed on your machine.

2. **Install Dependencies**:
   ```bash
   npm install express body-parser
   ```

3. **Run the Server**:
   ```bash
   node app.js
   ```

4. **Access the API**:
   - The server will start on port `7500`.
   - Use tools like Postman or cURL to interact with the API endpoints.

---

## Problem Statement and Motivation

### Real-Time Scenario
In today’s digital age, managing banking operations manually can be time-consuming and prone to errors. Traditional methods are inefficient, lack security, and are not scalable as the number of customers increases. This project addresses these challenges by providing a computerized banking system that improves efficiency, enhances accuracy, and delivers better customer service.

### Industry Relevance
- **JavaScript**: Widely used in the industry to build interactive web applications.
- **Data Structures**: Essential for organizing and managing data efficiently.
- **Algorithms**: Used for performing computations and automating tasks.

---

## License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

---

## Author
[Tulika Sharma]

---

## Acknowledgments
- Inspired by real-world banking systems.
- Built with the help of Express.js and JavaScript documentation.

---

For any questions or feedback, please reach out to [stulika029@gmail.com].
