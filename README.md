# Nest and Docker Sample

## Configure ORM
An ormconfig.json is not provided because it will depend on your database settings.

Provide the specifics about your database and the user you intend your application to use to interact with he database. If woring locally your host is 'localhost'.
* Database Type is typically 'postgres' or 'mysql'

```json
{
    "type": "<database_type>",
    "host": "<database_host>",
    "port": 5432,
    "username": "<database_username>",
    "password": "<database_passwrod>",
    "database": "<database_name>",
    "entities": ["dist/**/*.entity.js"],
    "synchronize": true,
    "logging": true
}
```
Save the configuration as ormconfig.json alongside the tsconfig.json
