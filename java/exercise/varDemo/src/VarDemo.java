public class VarDemo {
    public static void main(String[] args){
        //定义两个整型变量，x，y
        int x = 0,y=0;

        System.out.println("x="+x);
        System.out.println("y="+y);

        //整型和字符型拼接在一起会把字符型转义成ASCII码并相加
        System.out.println(x+'\t'+y+'\n');
        //解决方法 字符型换成字符串 或在最前面加上空字符串 自动识别为字符相加
        System.out.println(""+x+'\t'+y+'\n');

    }
}
