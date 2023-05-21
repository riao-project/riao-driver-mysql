import { MySql5DataDefinitionBuilder } from './ddl-builder-mysql-5';
import { MySqlDriver } from './driver';
import { MySql5QueryBuilder } from './query-builder-mysql-5';
import { MySql5SchemaQueryRepository } from './schema-query-repository-mysql-5';

export class MySql5Driver extends MySqlDriver {
	dataDefinitionBuilder = MySql5DataDefinitionBuilder;
	queryBuilder = MySql5QueryBuilder;
	schemaQueryRepository = MySql5SchemaQueryRepository;
}
