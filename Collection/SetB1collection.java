import java.util.*;
import java.io.*;
public class SetB1collection
{
				public static void main(String args[])throws IOException
				{
							int n;
							HashSet hs=new HashSet();
							BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
							System.out.println("Enter the no of elements:");
							n=Integer.parseInt(br.readLine());
							System.out.println("Enter the no's:");
							for(int i=0;i<n;i++)
							{
									int a=Integer.parseInt(br.readLine());
									hs.add(a);
							}
							System.out.println("The elements are:"+hs);
							TreeSet t=new TreeSet(hs);
							Iterator it=t.iterator();
							System.out.println("The Sorted data:");
							while(it.hasNext())
							System.out.println(it.next());
				}
}
