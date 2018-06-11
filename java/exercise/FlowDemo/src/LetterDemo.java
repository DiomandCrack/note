public class LetterDemo {
    public static void main(String[] args){
        //循环输出26个英文字母
        char n = 'a';
        int count = 1;
        while (n<='z'){
            System.out.print(n+" ");
            if(count%13==0){
                System.out.println();
            }
            count++;
            n++;
        }
    }
}
