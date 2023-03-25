import { Database } from 'riao-dbal/src/database';
import { MySql8Driver } from './driver-mysql-8';
import { DatabaseEnvMySql8 } from './env-mysql-8';

export class DatabaseMySql8 extends Database {
	driverType = MySql8Driver;
	envType = DatabaseEnvMySql8;
}
