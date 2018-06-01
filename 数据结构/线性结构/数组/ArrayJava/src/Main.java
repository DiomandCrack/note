public class Main {

    public static void main(String[] args) {
	// write your code here
        //开辟空间
        int[] arr = new int[10];
        for(int i=0 ; i<arr.length ; i++)
            arr[i] = i;
        //初始值
        int[] scores = new int[]{100, 99, 66};

        for(int i = 0 ; i < scores.length ; i++){
            System.out.println(scores[i]);
        }

        scores[0] = 98;

        for(int score: scores){
            System.out.println(score);
        }


    }
}
