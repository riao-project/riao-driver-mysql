import { MySqlConnectionOptions } from '../src';
import { env } from './env';

export const connectionOptionsMySql5: MySqlConnectionOptions = {
	host: env.TEST_MYSQL5_HOST,
	port: env.TEST_MYSQL5_PORT,
	database: env.TEST_MYSQL5_DATABASE,
	username: env.TEST_MYSQL5_USERNAME,
	password: env.TEST_MYSQL5_PASSWORD,
};

export const connectionOptionsMySql8: MySqlConnectionOptions = {
	host: env.TEST_MYSQL8_HOST,
	port: env.TEST_MYSQL8_PORT,
	database: env.TEST_MYSQL8_DATABASE,
	username: env.TEST_MYSQL8_USERNAME,
	password: env.TEST_MYSQL8_PASSWORD,
};
