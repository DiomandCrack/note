public class TypeExchange {
    public static void main(String[] args){
        //char 类型和 int类型之间转化

        char c = (char)65536;

        int n;
        //隐式数据类型转换
        n = c;

        //强制数据类型转化
        c=(char)n;

        //整型和浮点型的类型转化问题
        int x = 100;

        long y = x;

        x = (int)y;

        float f = 10000000000l;

        System.out.println(f);
    }

}
