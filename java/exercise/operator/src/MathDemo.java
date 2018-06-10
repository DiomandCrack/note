public class MathDemo {
    public static void main(String[] args){
        int num1 = 10,num2 = 5;
        int result = num1 + num2;
        System.out.println(num1+"+"+num2 + "="+result);

        result = num1 - num2;

        System.out.println(num1+"-"+num2 + "="+result);

        result = num1 * num2;

        System.out.println(num1+"*"+num2 + "="+result);

        result = num1 / num2;

        System.out.println(num1+"/"+num2 + "="+result);

        //分子分母都是整型时，结果为整除后的结果

        System.out.println(13/5);
        System.out.println("13.0/5 "+13.0/5);

        //求余数
        result=13%num2;

        System.out.println("13%"+num2+"="+result);

        System.out.println("13.5%num2="+(13.5%num2));
    }
}
