public class BreakDemo {
    public static void main(String[] args){
        int k = 0;
        for(int i=1;i<5;i++){
            for(int j =1;j<5;j++){
                k = i+j;
                if(j==3){
                    break;
                }
            }
        }
    }
}
