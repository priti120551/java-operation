class slip15_1
{
		public static void main(String args[])
		{
				String t_name;
				int t_priority;
				Thread t=Thread.currentThread();
				t_name=t.getName();
				System.out.println("\nCurrent Thread name:"+t_name);
				t_priority=t.getPriority();
					System.out.println("\nCUrrent thread priority:"+t_priority);
					t.setName("This is My Thread");
					t_name=t.getName();
						System.out.println("\nNew name is :"+t_name);
			}
}
