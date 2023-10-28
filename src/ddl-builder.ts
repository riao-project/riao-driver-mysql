import { DataDefinitionBuilder } from '@riao/dbal';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	public constructor() {
		super();

		this.columnTypes = <any>{
			...this.columnTypes,
			TIMESTAMP: 'DATETIME',
		};

		this.operators.openEnclosure = '`';
		this.operators.closeEnclosure = '`';
	}

	public alterColumnStatement(column: string): this {
		this.sql += 'CHANGE COLUMN ';
		this.columnName(column);
		this.sql += ' ';

		return this;
	}

	public createUserPassword(password: string): this {
		this.sql += 'IDENTIFIED BY "' + password + '" ';

		return this;
	}
}
