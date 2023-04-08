import 'jasmine';
import { DatabaseMySql5 } from '../../src';
import { connectionOptionsMySql5 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'MySQL 5',
	db: DatabaseMySql5,
	expectedVersion: /^5\.7\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql5,
});
