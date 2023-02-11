import { MySql5Driver } from './driver-mysql-5';
import { MySql8QueryBuilder } from './query-builder-mysql-8';

export class MySql8Driver extends MySql5Driver {
	queryBuilder = MySql8QueryBuilder;
}
