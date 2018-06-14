public class ForDemo {
    public static void main(String[] args){
        int sum = 0;
        //局部变量只能在大括号内使用
        for(int n=1;n<=5;n++){
            sum += n;
        }
        System.out.println("sum="+sum);
    }
}
