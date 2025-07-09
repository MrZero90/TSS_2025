package com.MyAzienda.SpringJDBC.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.MyAzienda.SpringJDBC.models.Docente;

@Repository
public class DocenteRepository implements IRepositoryRead<Docente>, IRepositoryWrite<Docente>{

	@Override
	public List<Docente> getAll() {
		List<Docente> elenco = new ArrayList<Docente>();
		
		try {
			Connection conn = ConnectionSingleton.getInstance().getConnection();
			
			String query = "SELECT docenteId, nome, cognome, materia FROM docenti";
			
			PreparedStatement ps = conn.prepareStatement(query);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				Docente d = new Docente();
				d.setId(rs.getInt("docenteId"));
				d.setNome(rs.getString("nome"));
				d.setCognome(rs.getString("cognome"));
				d.setMateria(rs.getString("materia"));
				
				elenco.add(d);
			}
			conn.close();
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return elenco;
	}

	@Override
	public Docente getById(int id) {
		Docente d = new Docente();
		
		try {
		Connection conn = ConnectionSingleton.getInstance().getConnection();
		
		String query = ("SELECT docenteId, nome, cognome, materia FROM docenti WHERE docenteId = ?");
		
		PreparedStatement ps = conn.prepareStatement(query);
		ps.setInt(1, id);
		
		ResultSet rs = ps.executeQuery();
		
		while(rs.next()) {
			d.setId(rs.getInt("docenteId"));
			d.setNome(rs.getString("nome"));
			d.setCognome(rs.getString("cognome"));
			d.setMateria(rs.getString("materia"));
		}
		
		conn.close();
		
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return d;	
		
	}

	@Override
	public boolean create(Docente obj) {
		boolean result = false;
		try {
			Connection conn = ConnectionSingleton.getInstance().getConnection();
			
			String query = "INSERT INTO docenti (nome, cognome, materia) VALUES "
					+ "(?,?,?)";
			
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setString(1, obj.getNome());
			ps.setString(2, obj.getCognome());
			ps.setString(3, obj.getMateria());
			
			int rowsReturned = ps.executeUpdate();
			
			if(rowsReturned > 0) {
				result = true;
			}
			
			conn.close();
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return result;
	}

	@Override
	public boolean update(Docente obj) {
		boolean result = false;
		try {
			Connection conn = ConnectionSingleton.getInstance().getConnection();
			
			int id = obj.getId();
			Docente d = this.getById(id);
			
			if(d != null) {
				d.setNome(obj.getNome() == null ? d.getNome() : obj.getNome());
				d.setCognome(obj.getCognome() == null ? d.getCognome() : obj.getCognome());
				d.setMateria(obj.getMateria() == null ? d.getMateria() : obj.getMateria());
				
				String query = "UPDATE docenti set "
						+ "nome = ?, " 
						+ "cognome = ?, " 
						+ "materia = ? " 
						+ "WHERE docenteId = ?;";

				PreparedStatement ps = conn.prepareStatement(query);
				ps.setString(1, d.getNome());
				ps.setString(2, d.getCognome());
				ps.setString(3, d.getMateria());
				ps.setInt(4, d.getId());

				int rowsReturned = ps.executeUpdate();
				
				if(rowsReturned > 0) {
					result = true;
				}
			}
			
			conn.close();
					
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return result;
	}

	@Override
	public boolean delete(int id) {
		boolean result = false;
		try {
			Connection conn = ConnectionSingleton.getInstance().getConnection();
			
			String query = "DELETE FROM docenti "
					+ "WHERE docenteId = ?";
			
			PreparedStatement ps = conn.prepareStatement(query);
			ps.setInt(1, id);
			
			int rowsReturned = ps.executeUpdate();
			
			if(rowsReturned > 0) {
				result = true;
			}
			
			conn.close();
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return result;
	}
}
