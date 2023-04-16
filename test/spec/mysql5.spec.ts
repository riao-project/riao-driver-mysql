import 'jasmine';
import { DatabaseMySql5 } from '../../src';
import { connectionOptionsMySql5 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'MySQL 5',
	db: DatabaseMySql5,
	expectedVersion: /^5\.7\.[0-9]+$/,
	connectionOptions: connectionOptionsMySql5,
	rootUsername: env.TEST_MYSQL5_ROOT_UESRNAME,
	rootPassword: env.TEST_MYSQL5_ROOT_PASSWORD,
	rootDatabase: env.TEST_MYSQL5_ROOT_DATABASE,
});
