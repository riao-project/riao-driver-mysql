import { Database } from 'riao-dbal/src/database';
import { MySqlDriver } from './driver';
import { DatabaseEnvMySql } from './env';
import { MySqlQueryRepository } from './query-repository';
import { MySqlDataDefinitionBuilder } from './ddl-builder';

export class DatabaseMySql5 extends Database {
	driverType = MySqlDriver;
	envType = DatabaseEnvMySql;

	queryRepositoryType = MySqlQueryRepository;

	ddlBuilderType = MySqlDataDefinitionBuilder;
}
