import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.imageio.ImageIO;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.json.JSONException;
import org.json.JSONObject;

@ServerEndpoint("/endpoint")
public class WebSocketServer {
	String from = null;
	String to = null;
	Map<String, Object> sessiondata;

	@OnOpen
	public void onOpen(Session session) {

		System.out.println("onOpen::" + session.getId());
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		System.out.println("onClose::" + session.getId());
		session.close();
	}
	
//	@OnMessage
//	public void onMessage(Session session, String message) {
//		System.out.println("message received");
//	}

//    @OnMessage
//    public void onMessage(byte[] data, Session session) {
//        System.out.println("onByteArrayMessage::From=" +" with len:");
//        ByteArrayInputStream bis = new ByteArrayInputStream(data);
//        BufferedImage bImage2;
//        try {
//        	int i = 0;
//        	int count = 0;
//        	while(bis.read() != -1){
//        		i++;
//        	
//        	System.out.println(i);
//        	}
//            bImage2 = ImageIO.read(bis);
//             ImageIO.write(bImage2, "jpg", new File("output.jpg") );
//        } catch (IOException e1) {
//            // TODO Auto-generated catch block
//            e1.printStackTrace();
//        }

//        System.out.println("image created");
//
//    }

	@OnMessage
	public void onMessage(String message, Session session) throws JSONException, IOException {

		JSONObject json = new JSONObject(message);
		sessiondata = session.getUserProperties();
		System.out.println(json.get("type"));

		if (json.get("type").equals("info")) {
			from = json.getString("from");
			sessiondata.put("from", from);
			to = json.getString("to");
			sessiondata.put("to", to);
		}
//		if (json.get("type").equals("image")) {
//			System.out.println(json.get("fileName"));
//			ByteArrayInputStream bis = new ByteArrayInputStream((byte[]) json.get("body"));
//			BufferedImage bImage2;
//			try {
//				bImage2 = ImageIO.read(bis);
//				ImageIO.write(bImage2, "png", new File("output.png"));
//			} 
//			catch (IOException e1) {
//				e1.printStackTrace();
//			}
//		}

		System.out.println("from: " + from + "to: " + to);
		System.out.println(json.toString());
		if (json.get("type").equals("message") || json.get("type").equals("image") || json.get("type").equals("file")) {

			Set<Session> openConnections = session.getOpenSessions();
			Iterator iterator = openConnections.iterator();

			while (iterator.hasNext()) {
				Session openSession = (Session) iterator.next();
				System.out.println(openSession.getId() + ": " + openSession.getUserProperties().get("from") + ","
						+ openSession.getUserProperties().get("to"));

				if ((openSession.getUserProperties().get("from")).equals(to)
						&& (openSession.getUserProperties().get("to")).equals(from)) {
					openSession.getBasicRemote().sendText(json.toString());
				}

				else if ((openSession.getUserProperties().get("from")).equals(from)
						&& (openSession.getUserProperties().get("to")).equals(to)
						&& openSession.getId() != session.getId()) {
					openSession.getBasicRemote().sendText(json.toString());
				}
			}
		}

		System.out.println("onMessage::From=" + session.getId() + " Message=" + message);

	}

	@OnError
	public void onError(Throwable t) {
		t.printStackTrace();
		System.out.println("onError::" + t.getMessage());
	}
}