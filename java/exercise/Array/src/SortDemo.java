public class SortDemo {
    public static void main (String[] args){
        int[] a = {34,53,12,32,56,17};
        System.out.println("排序前的数组元素为：");
        for(int n:a){
            System.out.print(n+" ");
        }
        System.out.println();
        int temp;
        for(int i=0;i<a.length-1;i++){
            for(int j=0;j<a.length-i-1;j++){
                if(a[j]>a[j+1]){
                    temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                }
            }
        }
        System.out.println("从小到大的排序");
        for(int n:a){
            System.out.print(n+" ");
        }

    }
}
