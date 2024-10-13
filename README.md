# Next.js Self Hosting
## Deploy Script

I've included a Bash script which does the following:

1. Installs all the necessary packages for your server
1. Installs Docker, Docker Compose, and Nginx
1. Clones this repository
1. Generates an SSL certificate
1. Builds your Next.js application from the Dockerfile
1. Sets up Nginx and configures HTTPS and rate limting
1. Sets up a cron which clears the database every 10m
1. Creates a `.env` file with your Postgres database creds

Both the Next.js app and PostgreSQL database will be up and running in Docker containers. To set up your database, you could install `npm` inside your Postgres container and use the Drizzle scripts, or you can use `psql`:

```bash
docker exec -it myapp-db-1 sh
apk add --no-cache postgresql-client
psql -U myuser -d mydatabase -c '
CREATE TABLE IF NOT EXISTS "todos" (
  "id" serial PRIMARY KEY NOT NULL,
  "content" varchar(255) NOT NULL,
  "completed" boolean DEFAULT false,
  "created_at" timestamp DEFAULT now()
);'
```

For pushing subsequent updates, I also provided an `update.sh` script as an example.

## Running Locally

If you want to run this setup locally using Docker, you can follow these steps:

```bash
docker-compose up -d
```

This will start both services and make your Next.js app available at `http://localhost:3000` with the PostgreSQL database running in the background. We also create a network so that our two containers can communicate with each other.

If you want to view the contents of the local database, you can use Drizzle Studio:

```bash
bun run db:studio
```

## Helpful Commands

- `docker-compose ps` – check status of Docker containers
- `docker-compose logs web` – view Next.js output logs
- `docker-compose logs cron` – view cron logs
- `docker-compose down` - shut down the Docker containers
- `docker-compose up -d` - start containers in the background
- `sudo systemctl restart nginx` - restart nginx
- `docker exec -it myapp-web-1 sh` - enter Next.js Docker container
- `docker exec -it myapp-db-1 psql -U myuser -d mydatabase` - enter Postgres db

## Other Resources

- [Kubernetes Example](https://github.com/ezeparziale/nextjs-k8s)
- [Redis Cache Adapter for Next.js](https://github.com/vercel/next.js/tree/canary/examples/cache-handler-redis)
- [ipx – Image optimization library](https://github.com/unjs/ipx)
- [OrbStack - Fast Docker desktop client](https://orbstack.dev/)
