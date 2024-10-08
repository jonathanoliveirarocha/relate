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
- React Helmet for managing document head (title, meta tags)

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

- `GET /article/articles` - Retrieve all articles
- `POST /article/articles` - Create a new article (requires authentication)
- `GET /article/articles/:id` - Retrieve a specific article
- `PUT /article/articles/:id` - Update an article (requires authentication)
- `DELETE /article/articles/:id` - Delete an article (requires authentication)
- `GET /article/articles/search/keyword/:keyword` - Search articles by keyword
- `GET /article/articles/search/category/:category` - Search articles by category

### Authentication

- `POST /auth/auth/admin/login` - Admin login
- `POST /auth/auth/validate` - Validate authenticated user (requires token)

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

```bash
MIT License

Copyright (c) 2024 Jonathan de Oliveira Rocha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Authors

- [@jonathanoliveirarocha](https://github.com/jonathanoliveirarocha)

## Support

For support, follow the author on [GitHub](https://www.github.com/jonathanoliveirarocha) and [LinkedIn](https://www.linkedin.com/in/jonathandeoliveirarocha).