import 'jasmine';
import { MySql8Driver } from '../../src';
import { connectionOptionsMySql8 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'MySQL 8',
	driver: MySql8Driver,
	expectedVersion: /^8\.[0-9]+\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql8,
});
