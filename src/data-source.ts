import {DataSourceOptions, DataSource} from "typeorm"
import { User } from "./entity/User.js";
import {SeederOptions} from "typeorm-extension";

const options : DataSourceOptions & SeederOptions = {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    seeds: ['src/database/seeds/**/*.{js,ts}'],
    factories: ['src/database/factories/**/*.{js,ts}']
}

export default new DataSource(options);
