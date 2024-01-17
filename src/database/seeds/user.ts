import 'reflect-metadata';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {User} from "../../entity/User.js";

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(User);
        const entity = {firstName: 'Caleb', lastName: 'Barrows', email: 'caleb.barrows@gmail.com'};
        await repository.insert(entity);

        // ---------------------------------------------------

        const userFactory = await factoryManager.get(User);
        // save 1 factory generated entity, to the database
        await userFactory.save();

        // save 5 factory generated entities, to the database
        await userFactory.saveMany(5);
    }
}
