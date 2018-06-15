public class FindMax {
    public static void main(String[] args){
        int[] a = {34,27,78,56,31};
        int max =a[0];
        //增强性for循环 foreach
        for(int n:a){
            if(n>max){
                max = n;
            }
        }
        System.out.println("max="+max);
    }
}
