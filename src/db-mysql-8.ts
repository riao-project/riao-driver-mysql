import { Database } from '@riao/dbal/database';
import { MySqlDriver } from './driver';
import { DatabaseEnvMySql } from './env';
import { MySqlQueryRepository } from './query-repository';
import { MySqlDataDefinitionBuilder } from './ddl-builder';
import { MySqlQueryBuilder } from './query-builder';

export class DatabaseMySql8 extends Database {
	driverType = MySqlDriver;
	envType = DatabaseEnvMySql;

	queryRepositoryType = MySqlQueryRepository;

	ddlBuilderType = MySqlDataDefinitionBuilder;
	queryBuilderType = MySqlQueryBuilder;
}
