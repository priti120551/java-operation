import java.util.Scanner;
public class slip23_1 extends Thread
{
		String S1;
		public slip23_1(String str)
		{
					S1=str;
					start();
			}
			public void run()
			{
					for(int i=0;i<S1.length();i++)
					{
							char ch=S1.charAt(i);
							if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
							{
										System.out.println(ch);
										try
										{
												Thread.sleep(3000);
										}
										catch(Exception e)
										{
												System.out.println("Exception:"+e);
										}
						}
				}
		}
		public static void main(String args[])
		{
					Scanner sc=new Scanner(System.in);
					System.out.println("Enter a String:      ");
					String str2=sc.nextLine();
					slip23_1 obj=new slip23_1(str2);
			}
}
