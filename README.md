# Rest API - Authentication and Authorization

This project is a REST API for authentication and authorization, including support for two-factor authentication (2FA). It is designed to provide a secure and scalable solution for managing user authentication and access control in web applications. The API supports various authentication methods, including traditional username and password, as well as modern techniques like OAuth and JWT (JSON Web Tokens). Additionally, it includes features for account recovery, password reset, and user role management, making it a comprehensive solution for handling user authentication and authorization needs.

![Rest-API-Auth](https://github.com/user-attachments/assets/765a89d0-ae72-4349-aa1a-0f5ebe6fb596)


## 🚀 About Me

[![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/apurva313)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/apurva313)


## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/rest-api-auth.git
    cd rest-api-auth
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_EXPIRES_IN=15m
    REFRESH_TOKEN_EXPIRES_IN=7d
    CACHE_TEMPORARY_TOKEN_PREFIX=tempToken_
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `bcryptjs`: Library to help you hash passwords
- `jsonwebtoken`: JSON Web Token implementation (JWT)
- `otplib`: One Time Password (OTP) library
- `qrcode`: QR code generator
- `crypto`: Node.js built-in module for cryptographic functionality
- `node-cache`: Simple and fast Node.js internal caching
- `nedb-promises`: A persistent database for Node.js, with MongoDB-like API

## API Endpoints

### Authentication Routes

#### Register
- **URL:** `POST /api/auth/register`
- **Request Body:**
    ```json
    {
        "name": "Apurva Kumar",
        "email": "apurvakumar2@gmail.com",
        "password": "12345",
        "role": "moderator"
    }
    ```
- **Description:** Registers a new user.

#### Login
- **URL:** `POST /api/auth/login`
- **Request Body:**
    ```json
    {
        "email": "apurvakumar313@gmail.com",
        "password": "123345"
    }
    ```
- **Description:** Logs in a user and returns access and refresh tokens.

#### Login 2FA
- **URL:** `POST /api/auth/login/2fa`
- **Request Body:**
    ```json
    {
        "tempToken": "PYTDWXCMI4GQWYAI",
        "otp": "489647"
    }
    ```
- **Description:** Verifies the 2FA token and returns access and refresh tokens.

#### Refresh Token
- **URL:** `POST /api/auth/refresh-token`
- **Request Body:**
    ```json
    {
        "refreshToken": "your_refresh_token"
    }
    ```
- **Description:** Refreshes the access token using the refresh token.

#### Logout
- **URL:** `GET /api/auth/logout`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Description:** Logs out the user by invalidating the access and refresh tokens.

### User Routes

#### Get Current User
- **URL:** `GET /api/users/current`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Description:** Retrieves the current authenticated user's information.

#### Admin Route
- **URL:** `GET /api/admin`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Description:** Access restricted to admin users.

#### Moderator Route
- **URL:** `GET /api/moderator`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Description:** Access restricted to admin and moderator users.

### 2FA Routes

#### Generate QRCode
- **URL:** `GET /api/auth/2fa/generate`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Description:** Generates a QR code for setting up 2FA.

#### Validate/Enable 2FA
- **URL:** `POST /api/auth/2fa/validate`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer your_access_token"
    }
    ```
- **Request Body:**
    ```json
    {
        "totp": "827420"
    }
    ```
- **Description:** Validates the 2FA token and enables 2FA for the user.

## Enabling 2FA

To enable two-factor authentication (2FA), you need to install an authenticator application on your mobile device. Some popular options include:

- [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US)
- [Microsoft Authenticator](https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en&gl=US)
- [Authy](https://play.google.com/store/apps/details?id=com.authy.authy&hl=en&gl=US)

After installing the authenticator app, use the `/api/auth/2fa/generate` endpoint to generate a QR code. Scan the QR code with your authenticator app to set up 2FA.

## Postman Collection

You can import the provided Postman collection to test the API endpoints. [Download Postman Collection](https://api.postman.com/collections/32225191-6470fe88-d866-4d52-99f8-35b1241df921?access_key=PMAT-01J7KE03RRMV152QZV5NS6W5X8)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
