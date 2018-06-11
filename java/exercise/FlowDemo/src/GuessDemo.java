import java.util.Scanner;

public class GuessDemo {
    public static void main(String[] args){
        int number = (int)(Math.random()*10+1);
        int guess;
        System.out.println("猜一个介于1到10之间的数");
        do{
            System.out.println("请输入您猜测的输");
            Scanner sc = new Scanner(System.in);
            guess = sc.nextInt();
            if(guess>number){
                System.out.println("太大");
            }else if(guess<number){
                System.out.println("太小");
            }
        }while(number!=guess);
        System.out.println("您猜中了");
    }
}
