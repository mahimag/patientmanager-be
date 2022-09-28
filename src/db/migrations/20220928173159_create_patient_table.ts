import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("patient_table", (table) => {
    table.increments("id");
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("number").notNullable();
    table.string("dob").notNullable();
    table.string("email");
    table.string("address");
    table.string("photo");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user_account")
      .onDelete("CASCADE");
    table.boolean("is_fav").defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("patient_table");
}
