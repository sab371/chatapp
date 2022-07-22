package dataStore;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

public class UserDataHandler {

	private static UserDataHandler dataHandler = null;
	private String name = null;
	private long id = 0;

	private UserDataHandler() {

	}

	public static UserDataHandler getInstance() {

		if (dataHandler == null) {
			dataHandler = new UserDataHandler();
		}

		return dataHandler;
	}

	public boolean setUserData(String username, String password) {
		
		Criteria criteria = new Criteria(new Column("UserAuthentication", "USER_NAME"), username, QueryConstants.EQUAL);
		DataObject dobj = null;

		try {
			dobj = DataAccess.get("UserAuthentication", criteria);

			if (!dobj.isEmpty()) {
				
				return true;
			} 
			else {

				Row row = new Row("UserAuthentication");
				row.set("USER_NAME", username);
				row.set("PASSWORD", password);

				dobj = new WritableDataObject();
				dobj.addRow(row);
				DataAccess.add(dobj);
				
				return false;
			}
		} catch (DataAccessException e) {
			
			e.printStackTrace();
			return true;
		}
	}

	public String getName(long id) {

		return name;
	}

	public long getId(String username) {
		
		Criteria criteria = new Criteria(new Column("UserAuthentication", "USER_NAME"), username, QueryConstants.EQUAL);
		DataObject dobj = null;
		try {
			
			dobj = DataAccess.get("UserAuthentication",criteria);
			Row row = dobj.getRow("UserAuthentication");
			this.id = row.getLong(1);
		} 
		catch (DataAccessException e) {
			e.printStackTrace();
		}

		return this.id;
	}
}
