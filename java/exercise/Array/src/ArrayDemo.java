import java.util.Scanner;

public class ArrayDemo {
    public static void main(String[] args){
        int[] a = new int[5];
        Scanner sc = new Scanner(System.in);

        for(int i=0;i<a.length;i++){
            System.out.println("请输入第"+(i+1)+"个元素");
            a[i] = sc.nextInt();
        }

        System.out.println("数组元素的内容为：");
        for(int i=0; i<a.length;i++){
            System.out.print(a[i]+" ");
        }
        int sum = 0;
        for(int i=0;i<a.length;i++){
            sum = sum+a[i];
        }

        System.out.println("数组元素的累还和为："+sum);

    }
}
