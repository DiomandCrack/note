public class Atimes {
    public  static  void main(String[] args){
        char[] a = {'a','b','A'};
        int index = 0;
        for(char n:a){
            if(n=='a'||n=='A'){
                index++;
            }
        }

        System.out.println("a或A出现的次数"+index );
    }
}
