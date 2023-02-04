import { createPool, Pool } from 'mysql2/promise';

import {
	DatabaseConnectionOptions,
	DatabaseDriver,
	DatabaseQueryOptions,
	DatabaseQueryResult,
} from 'riao-dbal/src';

export type MySqlConnectionOptions = DatabaseConnectionOptions;

export class MySqlDriver implements DatabaseDriver {
	protected conn: Pool;

	public async connect(options: MySqlConnectionOptions): Promise<void> {
		this.conn = createPool({
			host: options.host,
			port: options.port,
			database: options.database,
			user: options.username,
			password: options.password,
			namedPlaceholders: true,
		});
	}

	public async disconnect(): Promise<void> {
		await this.conn.end();
	}

	public async query(
		options: DatabaseQueryOptions
	): Promise<DatabaseQueryResult> {
		const [rows, fields] = await this.conn.execute(
			options.sql,
			options.params
		);

		return {
			results: Array.isArray(rows) ? rows : [rows],
		};
	}
}
