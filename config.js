var config = {
	database: {
		host:	  'db', 	// database host
		user: 	  process.env.MYSQL_USER, 		// your database username
		password: process.env.MYSQL_PASSWORD, 		// your database password
		port: 	  process.env.DB_SERVICE_PORT_3306_TCP, 		// default MySQL port
		db: 	  process.env.MYSQL_DATABASE 		// your database name
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
