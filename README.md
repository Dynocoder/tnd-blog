# tnd-blog

A full-stack blog platform for showcasing top blogs from peers at our college. Blogs are collected and managed through an admin portal and displayed on the public site. The project is built using modern technologies to ensure a seamless experience for users and administrators.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Admin Portal](#admin-portal)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Public Platform**: Display top blogs for college students and visitors.
- **Admin Portal**: Admins can upload, edit, and manage blogs.
- **Authentication**: Secure login for admin access.
- **Blog Categories**: Organize blogs into categories for easy navigation.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.
- **Comment System**: Allow users to comment on blogs (optional).
- **SEO Optimization**: Ensure high visibility on search engines.

## Tech Stack

### Frontend
- **React**: For the public-facing blog platform.
- **Tailwind CSS**: For styling components.
- **React Router**: For navigation between pages.

### Backend
- **Node.js**: For server-side operations.
- **Express.js**: For handling HTTP requests and API routes.
- **MongoDB**: For storing blog data.
- **Mongoose**: For MongoDB object modeling.

### Admin Portal
- **React Admin**: For managing blogs and user data.
- **JWT Authentication**: For secure admin access.

## Project Structure

```plaintext
root
│
├── client                # React frontend for the public platform
│   ├── src
│   │   ├── components    # Reusable UI components
│   │   ├── pages         # Page components (Home, Blog, etc.)
│   │   ├── hooks         # Custom hooks
│   │   ├── utils         # Utility functions
│   │   └── App.js        # Main app entry point
│   └── package.json
│
├── admin                 # React admin portal
│   ├── src
│   │   ├── components    # Admin-specific components
│   │   ├── pages         # Admin pages (Dashboard, Blog Management, etc.)
│   │   └── App.js        # Admin app entry point
│   └── package.json
│
├── server                # Node.js backend
│   ├── models            # Mongoose models
│   ├── routes            # Express routes
│   ├── controllers       # Logic for handling routes
│   ├── middleware        # Middleware (auth, error handling)
│   └── server.js         # Server entry point
│
└── README.md

```
## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/college-blog-platform.git
    ```

2. Install dependencies for the backend, client, and admin portal:
    (Ignore this for now)
    ```bash
    # Backend
    cd server
    npm install

    # Client
    cd ../client
    npm install

    # Admin
    cd ../admin
    npm install
    ```

## Configuration

1. **Environment Variables**: Create a `.env` file in the `server` folder with the following:

    ```plaintext
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

2. **Frontend Configuration**: Adjust API endpoint URLs in the client and admin portals as needed.

## Usage

1. **Start the backend server**:

    ```bash
    cd server
    npm start
    ```

2. **Start the client application**:

    ```bash
    cd client
    npm start
    ```

3. **Start the admin portal**:

    ```bash
    cd admin
    npm start
    ```

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login.

### Blogs

- `GET /api/blogs` - Fetch all blogs.
- `POST /api/blogs` - Add a new blog (admin only).
- `PUT /api/blogs/:id` - Update a blog (admin only).
- `DELETE /api/blogs/:id` - Delete a blog (admin only).

### Categories

- `GET /api/categories` - Fetch all categories.
- `POST /api/categories` - Add a new category (admin only).

## Admin Portal

The admin portal provides functionality for managing blogs and categories:

- **Dashboard**: Overview of blog stats.
- **Blog Management**: Create, edit, and delete blogs.
- **Category Management**: Organize blogs by category.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.
