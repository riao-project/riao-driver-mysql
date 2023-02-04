import 'jasmine';

import { MySql5Driver, MySqlConnectionOptions } from '../../src';
import { env } from '../env';

describe('MySQL 5.7 Connection', async () => {
	const connectionOptions: MySqlConnectionOptions = {
		host: env.TEST_MYSQL5_HOST,
		port: env.TEST_MYSQL5_PORT,
		database: env.TEST_MYSQL5_DATABASE,
		username: env.TEST_MYSQL5_USERNAME,
		password: env.TEST_MYSQL5_PASSWORD,
	};

	it('can connect', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptions);

		expect(connection).toBeTruthy();
	});

	it('can disconnect', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptions);
		await connection.disconnect();

		expect(connection).toBeTruthy();
	});

	it('can get the version', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptions);

		const query = await connection.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		const version = query.results[0]?.Value;

		expect(version)
			.withContext('version test')
			.toMatch(/^5\.7\.[0-9]+$/);
	});
});
