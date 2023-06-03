import { createPool, Pool } from 'mysql2/promise';

import {
	DatabaseConnectionOptions,
	DatabaseDriver,
	DatabaseQueryResult,
	DatabaseQueryTypes,
} from 'riao-dbal/src';
import { MySqlDataDefinitionBuilder } from './ddl-builder';
import { MySqlQueryBuilder } from './query-builder';
import { MySqlSchemaQueryRepository } from './schema-query-repository';
import { MySqlQueryRepository } from './query-repository-mysql';

export type MySqlConnectionOptions = DatabaseConnectionOptions;

export class MySqlDriver extends DatabaseDriver {
	dataDefinitionBulider = MySqlDataDefinitionBuilder;
	queryBuilder = MySqlQueryBuilder;
	queryRepository = MySqlQueryRepository;
	schemaQueryRepository = MySqlSchemaQueryRepository;

	protected conn: Pool;

	public async connect(options: MySqlConnectionOptions): Promise<this> {
		this.conn = createPool({
			host: options.host,
			port: options.port,
			database: options.database,
			user: options.username,
			password: options.password,
			namedPlaceholders: true,
			supportBigNumbers: true,
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
}
