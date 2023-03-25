import { Database } from 'riao-dbal/src/database';
import { MySql5Driver } from './driver-mysql-5';
import { DatabaseEnvMySql5 } from './env-mysql-5';

export class DatabaseMySql5 extends Database {
	driverType = MySql5Driver;
	envType = DatabaseEnvMySql5;
}
