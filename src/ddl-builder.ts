import { DataDefinitionBuilder } from 'riao-dbal/src';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	public alterColumnStatement(column: string): this {
		this.sql += 'CHANGE COLUMN ' + column + ' ';

		return this;
	}

	public createUserPassword(password: string): this {
		this.sql += 'IDENTIFIED BY "' + password + '" ';

		return this;
	}
}
