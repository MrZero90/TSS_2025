package com.MyAzienda.SpringJDBC.repositories;

import java.sql.Connection;
import java.sql.SQLException;
import com.mysql.cj.jdbc.MysqlDataSource;

public class ConnectionSingleton {

	private static ConnectionSingleton instance;
	
	private ConnectionSingleton() {}
	
	public static ConnectionSingleton getInstance() {
		if(instance == null) {
			instance = new ConnectionSingleton();
		}
		return instance;
	}
	
	public Connection getConnection() throws SQLException{
		MysqlDataSource ds = new MysqlDataSource();
		ds.setServerName("localhost");
		ds.setPortNumber(3306);
		ds.setUser("root");
		ds.setPassword("root");
		ds.setDatabaseName("scuola");
		ds.setUseSSL(false); // Secure Socket Layer è un protocollo di sicurezza
		
		ds.setAllowPublicKeyRetrieval(true);
		
		return ds.getConnection();
	}
}
