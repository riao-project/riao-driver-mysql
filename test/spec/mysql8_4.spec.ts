import 'jasmine';
import { DatabaseMySql8 } from '../../src';
import { connectionOptionsMySql8_4 } from '../connection-options';
import { test } from '@riao/driver-test';
import { env } from '../env';

test({
	name: 'MySQL 8.4',
	db: DatabaseMySql8,
	expectedVersion: /^8\.4\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql8_4,
	rootDatabase: env.TEST_MYSQL8_4_ROOT_DATABASE,
});
