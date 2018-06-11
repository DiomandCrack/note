public class PlusDemo {
    public static void main(String[] args){

        int n = 1;
        int sum = 0;//sum 是存放和的变量

        while(n<=15){
            sum = sum + n;
            n+=2;
        }

        System.out.println("1，3到15的累加和为："+sum);

    }
}
