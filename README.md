## alx-files_manager

### Overview
This project, **alx-files_manager**, aims to create a simple platform for uploading and viewing files. The project encompasses various back-end technologies and concepts, including Node.js, Express.js, MongoDB, Redis, and more. It is designed to consolidate your knowledge of authentication, data storage, background processing, and API development. The project is a collaboration between **Walter ONYANGO** and another team member.

### Learning Objectives
By the end of this project, you should be able to:
1. Create an API with Express.
2. Authenticate users.
3. Store data in MongoDB.
4. Manage temporary data in Redis.
5. Set up and use background workers.

### Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Redis**
- **Kue** (for background jobs)
- **ES6**

### Project Structure
- **utils/**: Contains utility classes and methods.
- **routes/**: Defines the API endpoints.
- **controllers/**: Contains the logic for handling API requests.

### Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/waltertaya/alx-files_manager.git
   cd alx-files_manager
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Set up the following environment variables:
   - `DB_HOST`: MongoDB host (default: `localhost`)
   - `DB_PORT`: MongoDB port (default: `27017`)
   - `DB_DATABASE`: Database name (default: `files_manager`)
   - `REDIS_HOST`: Redis host
   - `REDIS_PORT`: Redis port
   - `FOLDER_PATH`: Directory to store uploaded files (default: `/tmp/files_manager`)

4. **Running the Server:**
   Start the server with the following command:
   ```bash
   npm run start-server
   ```
   The server will run on the port specified by the `PORT` environment variable, or default to port 5000.

### Key Features
1. **User Authentication:**
   - Token-based authentication for secure API access.
   - Endpoints to connect, disconnect, and fetch user details.

2. **File Management:**
   - Upload and manage files.
   - Generate and manage thumbnails for images.
   - Set permissions for files (public/private).

3. **Data Handling:**
   - Use MongoDB for persistent storage of user and file data.
   - Use Redis for caching and session management.

4. **Background Processing:**
   - Use Kue to manage background jobs, such as generating thumbnails.

### Endpoints
- **GET /status**: Check the status of Redis and MongoDB.
- **GET /stats**: Retrieve the number of users and files.
- **POST /users**: Create a new user.
- **POST /files**: Upload a new file.
- **GET /connect**: Authenticate a user.
- **GET /disconnect**: Sign out a user.
- **GET /users/me**: Retrieve the current user's information.

### Requirements
- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Node.js version: 12.x.x
- ESLint for code linting

### Provided Files
- **package.json**: Project dependencies and scripts.
- **.eslintrc.js**: ESLint configuration.
- **babel.config.js**: Babel configuration.

### Note
Please ensure that all implemented functionalities are thoroughly tested and reviewed. Manual QA review is required upon project completion. The auto review will be triggered at the project deadline.

## Author

- [waltertaya](https://www.github.com/waltertaya)
