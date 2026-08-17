import { Database } from '@riao/dbal/database';
import { MySqlDriver } from './driver';
import { DatabaseEnvMySql } from './env';
import { MySqlQueryRepository } from './query-repository';
import { MySqlDataDefinitionBuilder } from './ddl-builder';
import { MySqlQueryBuilder } from './query-builder';

export class DatabaseMySql5 extends Database {
	override driverType = MySqlDriver;
	override envType = DatabaseEnvMySql;

	override queryRepositoryType = MySqlQueryRepository;

	override ddlBuilderType = MySqlDataDefinitionBuilder;
	override queryBuilderType = MySqlQueryBuilder;
}
