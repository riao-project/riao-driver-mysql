import { MySql8DataDefinitionBuilder } from './ddl-builder-mysql-8';
import { MySql5Driver } from './driver-mysql-5';
import { MySql8QueryBuilder } from './query-builder-mysql-8';
import { MySql8SchemaQueryRepository } from './schema-query-repository-mysql-8';

export class MySql8Driver extends MySql5Driver {
	dataDefinitionBuilder = MySql8DataDefinitionBuilder;
	queryBuilder = MySql8QueryBuilder;
	schemaQueryRepository = MySql8SchemaQueryRepository;
}
