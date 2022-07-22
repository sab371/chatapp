package dataStore;

import java.util.Iterator;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;

public class DataCheck {
	
	private static DataCheck dataCheck;
	
	private DataCheck() {
		
	}
	
	public static DataCheck getInstance() {
		if(dataCheck == null) {
			dataCheck = new DataCheck();
		}
		return dataCheck;
	}
	
	public boolean check(String username,String password) {
		
		Criteria criteria = new Criteria(new Column("UserAuthentication", "USER_NAME"),username, QueryConstants.EQUAL)
				.and(new Column("UserAuthentication", "PASSWORD"),password,QueryConstants.EQUAL);
		
		DataObject dobj = null;
		try {
			
			dobj = DataAccess.get("UserAuthentication",criteria);
			
		} 
		catch (DataAccessException e) {
			e.printStackTrace();
		}
		
		if(dobj.isEmpty()) {
			return false;
		}
		else {
			return true;
		}
//		Iterator it = null;
//		try {
//			it = d.getRows("UserAuthentication");
//		} catch (DataAccessException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		if(it.hasNext())
//		{
//			return true;
//			
//		}
//		else {
//			return false;
//		}
		
	}
	public boolean checkRequested(String name,String friend) throws DataAccessException {
		
		Criteria criteria = new Criteria(new Column("FriendsList", "USER_NAME"),name, QueryConstants.EQUAL)
				.and(new Column("FriendsList", "FRIEND"),friend,QueryConstants.EQUAL);
		
		DataObject dobj = DataAccess.get("FriendsList",criteria);
		
		Iterator it = dobj.getRows("FriendsList");
		
		if(!(it.hasNext()))
			return false;
		else
			return true;
	}
	
}