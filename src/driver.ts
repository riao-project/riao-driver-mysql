import { createPool, Pool } from 'mysql2/promise';

import {
	BaseDatabaseDriver,
	DatabaseConnectionOptions,
	DatabaseDriverInterface,
	DatabaseQueryResult,
	DatabaseQueryTypes,
} from 'riao-dbal/src';
import { MySqlQueryBuilder } from './query-builder';

export type MySqlConnectionOptions = DatabaseConnectionOptions;

export class MySqlDriver
	extends BaseDatabaseDriver
	implements DatabaseDriverInterface {
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
		options: DatabaseQueryTypes
	): Promise<DatabaseQueryResult> {
		let { sql, params } = this.toDatabaseQueryOptions(options);
		params = params ?? [];

		const paramValues: any[] = [];

		for (const param of params) {
			for (const key in param) {
				const value = param[key];
				paramValues.push(value);
			}
		}

		const [rows, fields] = await this.conn.execute(sql, paramValues);

		return {
			results: Array.isArray(rows) ? rows : [rows],
		};
	}

	public getQueryBuilder() {
		return new this.queryBuilder();
	}

	public async getVersion(): Promise<string> {
		const { results } = await this.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		return results[0]?.Value;
	}
}
