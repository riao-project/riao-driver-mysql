import { DataDefinitionBuilder } from 'riao-dbal/src';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	public createUserPassword(password: string): this {
		this.sql += 'IDENTIFIED BY "' + password + '" ';

		return this;
	}
}
