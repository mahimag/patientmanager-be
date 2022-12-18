import Knex from "knex";
import knexConfig from "./knexfile";
import process from "process";

// @ts-ignore
import knexStringCase from "knex-stringcase";

const knex = Knex(
  knexStringCase(knexConfig[process.env.ENV || "development"])
);

export default knex;
