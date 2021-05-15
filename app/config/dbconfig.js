const dotenv = require('dotenv')
dotenv.config()

/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */
let db = new sqlite3.Database(process.env.DB_NAME);

/* Init tables if they don't exist */
let init = function () {
	db.run(`CREATE TABLE if not exists animal_type (` +
		`id INTEGER PRIMARY KEY AUTOINCREMENT,` +
		` type VARCHAR(255) CHECK( type IN ('cat', 'dog') ) NOT NULL DEFAULT 'cat'` +
		`)`);


	db.run("CREATE TABLE if not exists animals (" +
		"id INTEGER PRIMARY KEY AUTOINCREMENT," +
		" name VARCHAR(255)," +
		" animal_type_id INTEGER" +
		")");

	db.run("CREATE TABLE if not exists owners (" +
		"id INTEGER PRIMARY KEY AUTOINCREMENT," +
		" name VARCHAR(255)" +
		")");

	db.run("CREATE TABLE if not exists owner_animal_assignees (" +
		"id INTEGER PRIMARY KEY AUTOINCREMENT," +
		" owner_id INTEGER," +
		" animal_id INTEGER" +
		")");
};

module.exports = {
	init: init,
	db: db
};