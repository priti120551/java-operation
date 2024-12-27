import java.util.*;
class ArrayListDemo1
{
			public static void main(String args[])
			{
					Scanner sc=new Scanner(System.in);
						System.out.println("Enter how many cities you want to enter:");
						int n=sc.nextInt();
						ArrayList al=new ArrayList();
						for(int i=0;i<n;i++)
						{
									System.out.println("Enter City Name:");
									al.add(sc.next());
						}
						System.out.println("Cities:"+al);
						System.out.println("Before remove size"+al.size());
						al.clear();
						System.out.println("size"+al.size());
				}
}
