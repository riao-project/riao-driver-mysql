import 'jasmine';

import { MySql8Driver, MySqlConnectionOptions } from '../../src';
import { env } from '../env';

describe('MySQL 8 Connection', async () => {
	const connectionOptions: MySqlConnectionOptions = {
		host: env.TEST_MYSQL8_HOST,
		port: env.TEST_MYSQL8_PORT,
		database: env.TEST_MYSQL8_DATABASE,
		username: env.TEST_MYSQL8_USERNAME,
		password: env.TEST_MYSQL8_PASSWORD,
	};

	it('can connect', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptions);

		expect(connection).toBeTruthy();
	});

	it('can disconnect', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptions);
		await connection.disconnect();

		expect(connection).toBeTruthy();
	});

	it('can get the version', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptions);

		const query = await connection.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		const version = query.results[0]?.Value;

		expect(version)
			.withContext('version test')
			.toMatch(/^8\.[0-9]+\.[0-9]+$/);
	});
});
