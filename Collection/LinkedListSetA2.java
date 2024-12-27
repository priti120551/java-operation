import java.util.*;
class LinkedListSetA2
{
			public static void main(String args[])
			{
						Scanner sc=new Scanner(System.in);
						System.out.println("Enter how many names you want to enter:");
						int n=sc.nextInt();
						LinkedList ll=new LinkedList();
						for(int i=0;i<n;i++)
						{
									System.out.println("Enter Name:");
									ll.add(sc.next());
						}
						System.out.println("Original contents of ll:"+ll);
			}
}
