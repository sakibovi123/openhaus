# Openhaus Task

## Prerequisites

Before you can run this project, make sure you have the following prerequisites installed on your system:

- [PHP 8.1](https://www.php.net/) (with required extensions for Laravel)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/) or other database management system (used MySQL in this example)
- [Node.js](https://nodejs.org/) (for React.js)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```

2. Change into the project directory:

   ```bash
   cd yourproject
   ```

3. Install PHP dependencies:

   ```bash
   composer install --ignore-platform-reqs
   ```

4. Generate a JWT secret key:

   ```bash
   php artisan jwt:secret
   ```

5. Create a MySQL database in phpMyAdmin or your preferred database management system. Make note of the database name and credentials (username and password).

6. Configure your `.env` file:

   Create a `.env` file in the project root and set the following variables:

   ```dotenv
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   ```

   Replace `your_database_name`, `your_database_username`, and `your_database_password` with your actual database configuration.

7. Run database migrations to create tables:

   ```bash
   php artisan migrate
   ```

## Running the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd resource/front
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React.js development server:

   ```bash
   npm start
   ```

## Running the Backend

To run the Laravel backend, you can use the built-in development server:

```bash
php artisan serve
```

By default, the server will run at `http://localhost:8000`.
