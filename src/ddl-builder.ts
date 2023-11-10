import { DataDefinitionBuilder } from '@riao/dbal';
import { MySqlBuilder } from './sql-builder';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	public constructor() {
		super();

		this.columnTypes = <any>{
			...this.columnTypes,
			TIMESTAMP: 'DATETIME',
		};
	}

	protected getSqlType() {
		return MySqlBuilder;
	}

	public alterColumnStatement(column: string): this {
		this.sql.append('CHANGE COLUMN ');
		this.sql.columnName(column);
		this.sql.space();

		return this;
	}

	public createUserPassword(password: string): this {
		this.sql.append('IDENTIFIED BY "' + password + '" ');

		return this;
	}
}
