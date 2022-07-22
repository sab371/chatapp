package dataStore;

import java.util.ArrayList;
import java.util.Iterator;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.ds.query.SelectQuery;
import com.adventnet.ds.query.SelectQueryImpl;
import com.adventnet.ds.query.Table;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.google.gson.Gson;


public class DisplayList {
	private static DisplayList displayList;

	private DisplayList() {

	}

	public static DisplayList getInstance() {
		if (displayList == null) {
			displayList = new DisplayList();
		}
		return displayList;
	}

	public ArrayList<DataListFormatter> getList(String name, String status) {

		SelectQuery query = new SelectQueryImpl(Table.getTable("FriendsList"));
		query.addSelectColumn(Column.getColumn("FriendsList", "*"));
		Criteria criteria = new Criteria(new Column("FriendsList", "STATUS"), status, QueryConstants.EQUAL)
				.and(new Criteria(new Column("FriendsList", "FRIEND"), name, QueryConstants.EQUAL));
		query.setCriteria(criteria);

		DataObject dobj;
		ArrayList<DataListFormatter> datalist = new ArrayList<DataListFormatter>();

		try {

			int id = 0;
			long friendId;
			DataListFormatter dataObj;

			dobj = DataAccess.get(query);
			Iterator iterator = dobj.getRows("FriendsList");

			String friendName = null;

			while (iterator.hasNext()) {

				Row row = (Row) iterator.next();
				friendName = row.getString(3);
				friendId = row.getLong(2);
				id++;

				dataObj = new DataListFormatter(id, friendId, friendName);
				datalist.add(dataObj);
			}
			return datalist;

		} catch (DataAccessException e) {
			e.printStackTrace();
			return null;
		}
	}

	public ArrayList<UserListFormatter> getUserList(String name) throws DataAccessException {

		SelectQuery query = new SelectQueryImpl(Table.getTable("UserAuthentication"));
		query.addSelectColumn(Column.getColumn("UserAuthentication", "*"));
		query.setCriteria(new Criteria(new Column("UserAuthentication", "USER_NAME"), name, QueryConstants.NOT_EQUAL));

		DataObject dobj;
		dobj = DataAccess.get(query);
		Iterator UserAuthRows = dobj.getRows("UserAuthentication");

		String userName = null;
		int id = 0;
		long userId;
		char status;
		ArrayList<UserListFormatter> userList = new ArrayList<UserListFormatter>();
		UserListFormatter userData = null;

		while (UserAuthRows.hasNext()) {

			Row row = (Row) UserAuthRows.next();
			id++;
			userId = row.getLong(1);
			userName = row.getString(2);
			status = getStatus(name, userName);
			
			userData = new UserListFormatter(id, userId, userName, status);
			userList.add(userData);
		}		
		return userList;
	}

	public char getStatus(String user, String friend) throws DataAccessException {
		
		Criteria criteria = new Criteria(new Column("FriendsList", "USER_NAME"), user, QueryConstants.EQUAL)
				.and(new Criteria(new Column("FriendsList", "FRIEND"), friend, QueryConstants.EQUAL));
		DataObject dobj = null;
		dobj = DataAccess.get("FriendsList", criteria);
		DataCheck dataCheck = DataCheck.getInstance();

		String status;

		if (dobj.isEmpty()) {
			if (dataCheck.checkRequested(friend, user)) {
				return '2';
			} else
				return '1';

		} else {
			Row row = dobj.getRow("FriendsList");
			System.out.println(row);
			status = row.getString("STATUS");
			System.out.println(status);
			if (status.equals("Accepted")) {
				return '3';
			} else {
				return '4';
			}
		}
	}
}
