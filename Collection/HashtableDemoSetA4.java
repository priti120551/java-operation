import java.util.Map.Entry;
import java.util.*;
public class HashtableDemoSetA4
{
		public static void main(String args[])
		{
				Scanner s=new Scanner(System.in);
				System.out.println("Enter no.of students you want:");
				int n=s.nextInt();
				Hashtable<String,Long>contact=new Hashtable<String,Long>();
				for(int i=0;i<n;i++)
				{
						System.out.println("Enter student's name:");
						String name=s.next();
						System.out.println("Enter students's mobile number:");
						long no=s.nextLong();
						contact.put(name,no);
				}
				System.out.println("Map= "+contact);
				Set s1=contact.entrySet();
				Iterator i=s1.iterator();
				System.out.println("Name      Contact Number");
				while(i.hasNext())
				{
						Map.Entry me=(Entry) i.next();
						System.out.println(" "+me.getKey()+" "+me.getValue());
				}
		}
}
