import { createPool, Pool } from 'mysql2/promise';

import {
	DatabaseConnectionOptions,
	DatabaseDriver,
	DatabaseQueryBuilder,
	DatabaseQueryOptions,
	DatabaseQueryResult,
} from 'riao-dbal/src';
import { MySqlQueryBuilder } from './query-builder';

export type MySqlConnectionOptions = DatabaseConnectionOptions;

export class MySqlDriver implements DatabaseDriver {
	queryBuilder = MySqlQueryBuilder;

	protected conn: Pool;

	public async connect(options: MySqlConnectionOptions): Promise<this> {
		this.conn = createPool({
			host: options.host,
			port: options.port,
			database: options.database,
			user: options.username,
			password: options.password,
			namedPlaceholders: true,
		});

		return this;
	}

	public async disconnect(): Promise<void> {
		await this.conn.end();
	}

	public async query(
		options: DatabaseQueryOptions | DatabaseQueryBuilder
	): Promise<DatabaseQueryResult> {
		if (options instanceof DatabaseQueryBuilder) {
			options = options.toDatabaseQuery();
		}

		const [rows, fields] = await this.conn.execute(
			options.sql,
			options.params
		);

		return {
			results: Array.isArray(rows) ? rows : [rows],
		};
	}

	public getQueryBuilder() {
		return new this.queryBuilder();
	}
}
