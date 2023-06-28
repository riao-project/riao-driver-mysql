import { DataDefinitionBuilder } from '@riao/dbal';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	public constructor() {
		super();

		this.columnTypes = <any>{
			...this.columnTypes,
			TIMESTAMP: 'DATETIME',
		};
	}

	public alterColumnStatement(column: string): this {
		this.sql += 'CHANGE COLUMN ' + column + ' ';

		return this;
	}

	public createUserPassword(password: string): this {
		this.sql += 'IDENTIFIED BY "' + password + '" ';

		return this;
	}
}
