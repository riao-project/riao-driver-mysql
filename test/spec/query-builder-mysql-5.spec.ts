import 'jasmine';

import { MySql5Driver, MySql5QueryBuilder } from '../../src';
import { connectionOptionsMySql5 } from '../connection-options';

describe('QueryBuilder MySql 5', () => {
	const driver = new MySql5Driver();

	beforeAll(async () => {
		await driver.connect(connectionOptionsMySql5);
	});

	afterAll(async () => {
		await driver.disconnect();
	});

	it('can select', () => {
		const { sql } = new MySql5QueryBuilder()
			.select({
				from: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT * FROM users');
	});

	it('can select 1 column', () => {
		const { sql } = new MySql5QueryBuilder()
			.select({
				columns: ['id'],
				from: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT id FROM users');
	});

	it('can select columns', () => {
		const { sql } = new MySql5QueryBuilder()
			.select({
				columns: ['id', 'username'],
				from: 'users',
			})
			.toDatabaseQuery();

		expect(sql).toEqual('SELECT id, username FROM users');
	});
});
