import { SqlBuilder } from '@riao/dbal/builder';

export class MySqlBuilder extends SqlBuilder {
	public constructor() {
		super();

		this.operators.openEnclosure = '`';
		this.operators.closeEnclosure = '`';
	}
}
