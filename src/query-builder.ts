import { DatabaseQueryBuilder } from '@riao/dbal';
import { MySqlBuilder } from './sql-builder';

export class MySqlQueryBuilder extends DatabaseQueryBuilder {
	public constructor() {
		super();
	}

	protected getSqlType() {
		return MySqlBuilder;
	}
}
