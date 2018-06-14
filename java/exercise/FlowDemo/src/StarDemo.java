public class StarDemo {
    public static void main(String[] args){
        int m = 1;
        System.out.println("输出4行4列的星号");
        while(m<=4){
            int n =1;
            while(n<=m){
                System.out.print("*");
                n++;
            }
            System.out.println();
            m++;
        }
    }
}
