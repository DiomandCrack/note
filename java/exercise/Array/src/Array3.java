public class Array3 {
    public static void main(String[] args){
        int[] array = {6,12,15,20};
        int len = array.length;
        for(int i=0; i<len;i++){
            if(array[i]%3==0){
                System.out.println(array[i]);
            }
        }
    }
}
