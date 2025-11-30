# Alumni-Student Social App - Setup Guide

This guide will help you set up the project on a new laptop from scratch.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop)
- **Git** (optional, for cloning) - [Download here](https://git-scm.com/)

---

## Step-by-Step Setup Instructions

### 1. Install Docker Desktop

#### Windows:
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop
2. Run the installer and follow the wizard
3. Enable WSL 2 when prompted (recommended)
4. Restart your computer after installation
5. Launch Docker Desktop and wait for it to start

#### Verify Docker Installation:
```bash
docker --version
docker-compose --version
```

You should see version numbers for both commands.

---

### 2. Get the Project Files

#### Option A: Clone from Git
```bash
git clone <your-repository-url>
cd Alumni-Student-Social-App
```

#### Option B: Copy from USB/Cloud
Simply copy the entire `Alumni-Student-Social-App` folder to your desired location.

---

### 3. Install Node.js Dependencies

Open PowerShell or Command Prompt in the project directory:

```bash
# Navigate to project directory
cd Alumni-Student-Social-App

# Install all dependencies
npm install
```

This will install all packages listed in `package.json`.

---

### 4. Set Up Environment Variables

Create a `.env` file in the project root (or copy the existing one):

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/alumni-student-app

# Session Secret (change this to a random string)
SESSION_SECRET=your-secret-key-here-change-this

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Server Port
PORT=3000

# Add any other environment variables your app needs
```

**Important:** Change `SESSION_SECRET` to a unique random string for security.

---

### 5. Start Redis with Docker

This is the easiest part! We've included a `docker-compose.yml` file.

```bash
# Start Redis container
docker-compose up -d

# Verify Redis is running
docker ps
```

You should see a container named `my-redis` running.

#### Alternative: Manual Docker Command
If you prefer not to use docker-compose:
```bash
docker run -d --name my-redis -p 6379:6379 -v redis-data:/data redis
```

---

### 6. Start MongoDB

#### Windows:
MongoDB should start automatically if you installed it as a service.

To verify:
```bash
# Check if MongoDB is running
mongosh
```

If it's not running, start it manually:
```bash
# Start MongoDB service
net start MongoDB
```

#### Mac/Linux:
```bash
# Start MongoDB
sudo systemctl start mongod

# OR
brew services start mongodb-community
```

---

### 7. Run the Application

```bash
# Start the Node.js application
npm start

# OR for development with auto-restart
npm run dev
```

The application should now be running at: **http://localhost:3000**

---

## Verification Checklist

Before using the app, verify everything is working:

- [ ] Docker Desktop is running
- [ ] Redis container is running (`docker ps` shows `my-redis`)
- [ ] MongoDB is running
- [ ] Node.js dependencies are installed (`node_modules` folder exists)
- [ ] `.env` file is configured
- [ ] Application starts without errors
- [ ] You can access http://localhost:3000 in your browser

---

## Useful Docker Commands

### Check Running Containers
```bash
docker ps
```

### Stop Redis Container
```bash
docker-compose down
```

### Restart Redis Container
```bash
docker-compose restart
```

### View Redis Logs
```bash
docker logs my-redis
```

### Access Redis CLI
```bash
docker exec -it my-redis redis-cli
```

### Remove Redis Container (WARNING: Deletes data)
```bash
docker-compose down -v
```

---

## Troubleshooting

### Redis Connection Error
**Problem:** App can't connect to Redis

**Solutions:**
1. Check if Redis container is running: `docker ps`
2. Start Redis if not running: `docker-compose up -d`
3. Verify Redis port in `.env` matches container port (6379)
4. Check Docker Desktop is running

### MongoDB Connection Error
**Problem:** App can't connect to MongoDB

**Solutions:**
1. Verify MongoDB is running
2. Check connection string in `.env`
3. Ensure MongoDB service is started

### Port Already in Use
**Problem:** Port 3000 (or 6379) is already in use

**Solutions:**
1. Change PORT in `.env` to a different number (e.g., 3001)
2. Or stop the process using that port:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <process-id> /F
   ```

### Docker Desktop Not Starting
**Problem:** Docker Desktop fails to start

**Solutions:**
1. Ensure virtualization is enabled in BIOS
2. Enable WSL 2 feature in Windows
3. Restart your computer
4. Reinstall Docker Desktop

---

## Data Persistence

### Redis Data
Redis data is stored in a Docker volume named `redis-data`. This means:
- ✅ Data persists when you stop/restart the container
- ✅ Data persists when you restart your computer
- ❌ Data is lost if you remove the volume (`docker-compose down -v`)

### Session Data
User sessions are stored in Redis. When moving to a new laptop:
- Users will need to log in again (sessions don't transfer)
- This is normal and expected behavior

---

## Moving to Another Laptop

When setting up on another laptop, you only need:

1. **The project files** (copy the entire folder)
2. **Follow this setup guide** from Step 1
3. **Run `docker-compose up -d`** to start Redis
4. **Run `npm install`** to install dependencies
5. **Run `npm start`** to start the app

**Note:** You don't need to sign in to Docker Hub unless you're pushing/pulling custom images.

---

## Additional Notes

- **First Time Setup:** Takes about 10-15 minutes
- **Subsequent Setups:** Takes about 5 minutes (Docker images are cached)
- **No Docker Hub Account Needed:** For this project, you don't need to sign in to Docker Hub

---

## Need Help?

If you encounter issues:
1. Check the Troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure Docker Desktop is running
4. Check application logs for error messages

---

**Last Updated:** December 2025
