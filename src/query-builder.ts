import { DatabaseQueryBuilder } from '@riao/dbal';
import { MySqlBuilder } from './sql-builder';

export class MySqlQueryBuilder extends DatabaseQueryBuilder {
	public constructor() {
		super();
	}

	protected override getSqlType() {
		return MySqlBuilder;
	}
}
