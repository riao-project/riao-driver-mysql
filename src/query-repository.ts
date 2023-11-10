import { DatabaseRecord } from '@riao/dbal/record';
import {
	InsertOneOptions,
	QueryRepository,
} from '@riao/dbal/dml';

export class MySqlQueryRepository<
	T extends DatabaseRecord = DatabaseRecord
> extends QueryRepository<T> {
	public async insertOne(
		insertOptions: InsertOneOptions<T>
	): Promise<Partial<T>> {
		let result = await super.insertOne(insertOptions);

		// MySQL returns `insertId` instead of pk
		if (insertOptions.primaryKey) {
			result = <Partial<T>>{
				[insertOptions.primaryKey]: result.insertId,
			};
		}

		return result;
	}
}
