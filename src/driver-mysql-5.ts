import { MySqlDriver } from './driver';
import { MySql5QueryBuilder } from './query-builder-mysql-5';

export class MySql5Driver extends MySqlDriver {
	queryBuilder = MySql5QueryBuilder;
}
