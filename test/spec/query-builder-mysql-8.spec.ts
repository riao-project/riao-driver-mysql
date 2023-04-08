import 'jasmine';

import { MySql8Driver, MySql8QueryBuilder } from '../../src';
import { connectionOptionsMySql8 } from '../connection-options';

describe('QueryBuilder MySql 8', () => {
	const driver = new MySql8Driver();

	beforeAll(async () => {
		await driver.connect(connectionOptionsMySql8);
	});

	afterAll(async () => {
		await driver.disconnect();
	});

	it('can select', () => {
		const { sql } = new MySql8QueryBuilder()
			.select({
				table: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT * FROM users');
	});

	it('can select 1 column', () => {
		const { sql } = new MySql8QueryBuilder()
			.select({
				columns: ['id'],
				table: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT id FROM users');
	});

	it('can select columns', () => {
		const { sql } = new MySql8QueryBuilder()
			.select({
				columns: ['id', 'username'],
				table: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT id, username FROM users');
	});
});
