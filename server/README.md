Get containers id

```shell
  docker ps
```

Clear DB

```shell
  docker exec -it {container_id} psql -U postgres -d memelysis -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
```

Drop DB

```
  DROP DATABASE memelysis;
```

version: '3.9'

services:
  db:
    # image: postgres:16
    image: ankane/pgvector
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: ${DATABASE_NAME}
      POSTGRES_USER: ${DATABASE_USER}
      POSTGRES_PASSWORD: ${DATABASE_PASSWORD}
    volumes:
      - "pg-db:/var/lib/postgres"
    env_file:
      - .env

volumes:
  pg-db: