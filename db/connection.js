import { createConnection, getConnection } from "typeorm"
import { ArticleView } from './entity/Articles'

export default async () => {
  try {
    const connection = getConnection('default')
    // console.log("数据库恢复连接...");
    return connection
  } catch (error) {
    createConnection({
      "name": "default",
      "type": "sqlite",
      "database": "db/database.sqlite",
      "synchronize": true,
      "logging": false,
      "entities": [
        // "db/entity/**/*.ts"
        ArticleView
      ],
      "migrations": [
        // "db/migration/**/*.ts"
      ],
      "subscribers": [
        // "db/subscriber/**/*.ts"
      ],
      "cli": {
        "entitiesDir": "db/entity",
        "migrationsDir": "db/migration",
        "subscribersDir": "db/subscriber"
      }
    }).then(async connection => {
      console.log("数据库连接成功...");
      return connection
    }).catch(error => console.log(error));
  }
}

