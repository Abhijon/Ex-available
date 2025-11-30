# Quick Reference - Docker Commands for Redis

## Starting Redis (First Time or After Restart)

```bash
# Start Redis container
docker-compose up -d
```

## Checking if Redis is Running

```bash
# List all running containers
docker ps

# You should see 'my-redis' in the list
```

## Stopping Redis

```bash
# Stop Redis container (keeps data)
docker-compose down
```

## Restarting Redis

```bash
# Restart Redis container
docker-compose restart
```

## Viewing Redis Logs

```bash
# View logs
docker logs my-redis

# Follow logs in real-time
docker logs -f my-redis
```

## Accessing Redis CLI

```bash
# Connect to Redis CLI
docker exec -it my-redis redis-cli

# Once inside, you can run Redis commands:
# > PING
# > KEYS *
# > GET <key>
# > EXIT
```

## Troubleshooting

### Redis Not Starting?
```bash
# Check Docker Desktop is running
docker --version

# Check for errors
docker logs my-redis
```

### Port Already in Use?
```bash
# Windows - Find what's using port 6379
netstat -ano | findstr :6379

# Kill the process (replace <PID> with actual process ID)
taskkill /PID <PID> /F
```

### Clean Slate (WARNING: Deletes all data)
```bash
# Remove container and volume
docker-compose down -v

# Start fresh
docker-compose up -d
```

## Common Redis CLI Commands

Once inside Redis CLI (`docker exec -it my-redis redis-cli`):

```redis
# Test connection
PING

# List all keys
KEYS *

# Get a specific key value
GET sess:your-session-id

# Delete a specific key
DEL sess:your-session-id

# Clear all data (WARNING: Deletes everything)
FLUSHALL

# Get info about Redis
INFO

# Exit Redis CLI
EXIT
```

## Daily Workflow

### Morning (Starting Work)
```bash
# 1. Start Docker Desktop (if not running)
# 2. Start Redis
docker-compose up -d

# 3. Start your app
npm start
```

### Evening (Ending Work)
```bash
# Optional: Stop Redis to free resources
docker-compose down

# Redis data is preserved, will be available next time
```

## Moving to New Laptop

```bash
# 1. Install Docker Desktop
# 2. Copy project folder
# 3. Open terminal in project directory
# 4. Run:
docker-compose up -d
npm install
npm start
```

That's it! No Docker Hub login needed.
