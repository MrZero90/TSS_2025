package com.MyAzienda.SpringJDBC.repositories;

import java.util.List;

public interface IRepositoryRead<T> {

	// Lettura -> query dal DB
	T getById(int id);
	List<T> getAll();
}
