import 'jasmine';

import { MySql5Driver } from '../../src';
import { connectionOptionsMySql5 } from '../connection-options';

describe('MySQL 5.7 Connection', async () => {
	it('can connect', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptionsMySql5);

		expect(connection).toBeTruthy();
	});

	it('can disconnect', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptionsMySql5);
		await connection.disconnect();

		expect(connection).toBeTruthy();
	});

	it('can get the version', async () => {
		const connection = new MySql5Driver();
		await connection.connect(connectionOptionsMySql5);

		const query = await connection.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		const version = query.results[0]?.Value;

		expect(version)
			.withContext('version test')
			.toMatch(/^5\.7\.[0-9]+$/);
	});
});
