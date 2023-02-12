import 'jasmine';
import { MySql5Driver } from '../../src';
import { connectionOptionsMySql5 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'MySQL 5',
	driver: MySql5Driver,
	expectedVersion: /^5\.7\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql5,
});
