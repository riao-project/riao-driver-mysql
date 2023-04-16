import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'typescript-template-library';

	readonly TEST_MYSQL5_HOST = 'localhost';
	readonly TEST_MYSQL5_PORT = 3306;
	readonly TEST_MYSQL5_USERNAME = 'riaouser';
	readonly TEST_MYSQL5_PASSWORD = 'password1234';
	readonly TEST_MYSQL5_DATABASE = 'riaodb';
	readonly TEST_MYSQL5_ROOT_UESRNAME = 'root';
	readonly TEST_MYSQL5_ROOT_PASSWORD = 'rootpassword1234';
	readonly TEST_MYSQL5_ROOT_DATABASE = 'db';

	readonly TEST_MYSQL8_HOST = 'localhost';
	readonly TEST_MYSQL8_PORT = 3307;
	readonly TEST_MYSQL8_USERNAME = 'riaouser';
	readonly TEST_MYSQL8_PASSWORD = 'password1234';
	readonly TEST_MYSQL8_DATABASE = 'riaodb';
	readonly TEST_MYSQL8_ROOT_UESRNAME = 'root';
	readonly TEST_MYSQL8_ROOT_PASSWORD = 'rootpassword1234';
	readonly TEST_MYSQL8_ROOT_DATABASE = 'db';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
