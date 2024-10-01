# Relate

Relate is a unique platform that bridges the seemingly disparate worlds of Astronomy, Technology, and Music. It's designed for curious minds passionate about these three universes, unified by the common thread of love for knowledge, innovation, and creativity.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Data Models](#data-models)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Support](#support)

## Demo

Experience Relate in action: [https://somerelate.vercel.app/](https://somerelate.vercel.app/)

## Features

- Explore articles across Astronomy, Technology, and Music
- Search functionality by keyword and category
- User authentication for admin access
- CRUD operations for articles (admin only)
- Responsive design for seamless experience across devices

## Tech Stack

### Frontend
- React
- Tailwind CSS
- HTML, CSS, JavaScript
- Framer Motion for animations
- React Router for navigation
- React Icons and Lucide React for iconography
- React Country Flag for country flag components

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for object modeling
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- MongoDB (local installation or cloud service like MongoDB Atlas)

### Installation

1. Clone the repository:
    ```bash
      git clone https://github.com/jonathanoliveirarocha/relate
    ```

2. Navigate to the project directory:
    ```bash
      cd relate
    ```

3. Install dependencies:
    ```bash
      npm install
    ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
DB_PASSWORD=your_mongodb_password
SESSION_KEY=your_session_secret_key
PORT=3000
```

> For local development, update the `API_BASE_URL` in all relevant files under `/frontend/src/api/` to point to your local server (e.g., `http://localhost:3000`).

To create an admin user in your local MongoDB database:

1. Connect to your MongoDB instance using a MongoDB client or the mongo shell.

2. Use the following command to insert an admin user:

    ```bash
    db.users.insertOne({
      email: "admin@example.com",
      password: "hashed_password", // Make sure to hash the password before storing
      isAdmin: true
    })
    ```
    > Replace `"admin@example.com"` with your desired admin email and `"hashed_password"` with a properly hashed password.

3. Ensure that the `isAdmin` field is set to `true` for admin privileges. 

> This step is crucial for accessing admin features in your local development environment.


## Usage

To start the development server:

```bash
  npm start
```

> The frontend application will run at `http://localhost:5173` by default, while the backend API will be available at `http://localhost:3000`.


## API Routes

### Articles

- `GET /api/articles` - Retrieve all articles
- `POST /api/articles` - Create a new article (requires authentication)
- `GET /api/articles/:id` - Retrieve a specific article
- `PUT /api/articles/:id` - Update an article (requires authentication)
- `DELETE /api/articles/:id` - Delete an article (requires authentication)
- `GET /api/articles/search/keyword/:keyword` - Search articles by keyword
- `GET /api/articles/search/category/:category` - Search articles by category

### Authentication

- `POST /api/auth/admin/login` - Admin login
- `POST /api/auth/validate` - Validate authenticated user (requires token)

## Data Models

### Article

```bash
{
  title: String,
  content: String,
  publishedAt: Date,
  category: String,
  viewCount: Number
}
```

### User

```bash
{
  email: String,
  password: String,
  isAdmin: Boolean
}
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

### Authors

- [@jonathanoliveirarocha](https://github.com/jonathanoliveirarocha)

### Support

For support, follow the author on [GitHub](https://www.github.com/jonathanoliveirarocha) and [LinkedIn](https://www.linkedin.com/in/jonathandeoliveirarocha).