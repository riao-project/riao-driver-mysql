import { createPool, Pool } from 'mysql2/promise';

import {
	Database,
	DatabaseConnectionOptions,
	DatabaseDriver,
	DatabaseQueryResult,
	DatabaseQueryTypes,
} from '@riao/dbal';
import { Transaction } from '@riao/dbal/database/transaction';

export type MySqlConnectionOptions = DatabaseConnectionOptions;

export class MySqlDriver extends DatabaseDriver {
	public conn: Pool;

	public async connect(options: MySqlConnectionOptions): Promise<this> {
		this.conn = createPool({
			host: options.host,
			port: options.port,
			database: options.database,
			user: options.username,
			password: options.password,
			namedPlaceholders: true,
			supportBigNumbers: true,
			timezone: 'Z',
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
		let rows, fields;

		if (params.length) {
			[rows, fields] = await this.conn.execute(sql, params);
		}
		else {
			[rows, fields] = await this.conn.query(sql);
		}

		return {
			results: Array.isArray(rows) ? rows : [rows],
		};
	}

	public async getVersion(): Promise<string> {
		const { results } = await this.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		return results[0]?.Value;
	}

	public async transaction<T>(
		fn: (transaction: Transaction) => Promise<T>,
		transaction: Transaction
	): Promise<T> {
		const mysqlConnection = await this.conn.getConnection();
		let result: T;

		transaction.driver.conn = mysqlConnection;
		transaction.ddl.setDriver(transaction.driver);
		transaction.query.setDriver(transaction.driver);

		await mysqlConnection.beginTransaction();

		try {
			result = await fn(transaction);
			await mysqlConnection.commit();
			mysqlConnection.release();
		}
		catch (e) {
			await mysqlConnection.rollback();
			mysqlConnection.release();

			throw e;
		}

		return result;
	}
}
