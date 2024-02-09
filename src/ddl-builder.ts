import { ColumnOptions, ColumnType, DataDefinitionBuilder } from '@riao/dbal';
import { MySqlBuilder } from './sql-builder';
import { MySqlQueryBuilder } from './query-builder';

export class MySqlDataDefinitionBuilder extends DataDefinitionBuilder {
	protected queryBuilderType = MySqlQueryBuilder;

	public constructor() {
		super();

		this.columnTypes = <any>{
			...this.columnTypes,
			TIMESTAMP: 'DATETIME',
		};
	}

	public createTableColumn(column: ColumnOptions): this {
		if (column.type === ColumnType.UUID) {
			return this.createTableColumn({
				...(column as any),
				type: ColumnType.VARCHAR,
				length: 36,
			});
		}

		return super.createTableColumn(column);
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
