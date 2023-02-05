import 'jasmine';

import { MySql8Driver } from '../../src';
import { connectionOptionsMySql8 } from '../connection-options';

describe('MySQL 8 Connection', async () => {
	it('can connect', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptionsMySql8);

		expect(connection).toBeTruthy();
	});

	it('can disconnect', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptionsMySql8);
		await connection.disconnect();

		expect(connection).toBeTruthy();
	});

	it('can get the version', async () => {
		const connection = new MySql8Driver();
		await connection.connect(connectionOptionsMySql8);

		const query = await connection.query({
			sql: 'SHOW VARIABLES LIKE "%innodb_version%"',
		});

		const version = query.results[0]?.Value;

		expect(version)
			.withContext('version test')
			.toMatch(/^8\.[0-9]+\.[0-9]+$/);
	});
});
