import 'jasmine';
import { DatabaseMySql8 } from '../../src';
import { connectionOptionsMySql8 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'MySQL 8',
	db: DatabaseMySql8,
	expectedVersion: /^8\.[0-9]+\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql8,
});
