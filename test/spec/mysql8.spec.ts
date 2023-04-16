import 'jasmine';
import { DatabaseMySql8 } from '../../src';
import { connectionOptionsMySql8 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'MySQL 8',
	db: DatabaseMySql8,
	expectedVersion: /^8\.[0-9]+\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql8,
	rootUsername: env.TEST_MYSQL8_ROOT_UESRNAME,
	rootPassword: env.TEST_MYSQL8_ROOT_PASSWORD,
	rootDatabase: env.TEST_MYSQL8_ROOT_DATABASE,
});
