import "dotenv/config";
import "reflect-metadata";
import {
  Connection,
  ConnectionManager,
  ConnectionOptions,
  EntityManager,
  createConnection,
  getConnectionManager,
} from "typeorm";

class Database {
  private readonly connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  private async getConnection(port?: number): Promise<Connection> {
    const CONNECTION_NAME = "default";
    let connection: Connection;

    if (this.connectionManager.has(CONNECTION_NAME)) {
      connection = this.connectionManager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    } else {
      const connectionOptions: ConnectionOptions = {
        type: "postgres",
        host: process.env.DB_HOST_BEX,
        port: Number(process.env.DB_PORT_BEX) ?? 5432,
        username: process.env.DB_USER_NAME_BEX,
        password: process.env.DB_PASSWORD_BEX,
        database: process.env.DB_DATABASE_BEX,
        synchronize: false,
        logging: false,
        // entities: [__dirname + "/entities/*.{js,ts}"],
      };
      connection = await createConnection(connectionOptions);
    }

    return connection;
  }

  public async getManager(port?: number): Promise<EntityManager> {
    return this.getConnection(port).then((conn) => conn.manager);
  }

  public async closeConnection(): Promise<void> {
    const conn = await this.getConnection();
    return await conn.close();
  }
}

const db = new Database();

export default db;
