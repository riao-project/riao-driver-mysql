import { DatabaseQueryBuilder } from '@riao/dbal';

export class MySqlQueryBuilder extends DatabaseQueryBuilder {
	public constructor() {
		super();

		this.operators.openEnclosure = '`';
		this.operators.closeEnclosure = '`';
	}
}
