import { DatabaseRecord } from '@riao/dbal/record';
import { InsertOptions, QueryRepository } from '@riao/dbal/dml';

export class MySqlQueryRepository<
	T extends DatabaseRecord = DatabaseRecord
> extends QueryRepository<T> {
	public async insert(
		insertOptions: InsertOptions<T>
	): Promise<Partial<T>[]> {
		let results = await super.insert(insertOptions);

		// MySQL returns `insertId` instead of pk
		if (insertOptions.primaryKey) {
			results = <Partial<T>[]>(<unknown[]>results.map((result) => ({
				[insertOptions.primaryKey]: result.insertId,
			})));
		}

		return results;
	}
}
