# Simple sequelize Example!

## Sequlize commands

### Create table
```bash
sequelize migration:create --name create_[tablename]_table
```

### Migrate
```bash
sequelize db:migrate
```

### Rollback
```bash
sequelize db:migrate:undo
# or
sequelize db:migrate:undo:all
```
