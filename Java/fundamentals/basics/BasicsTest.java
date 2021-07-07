public class BasicsTest {
    public static void main(String[] args){
        Basics test = new Basics();


        test.print1To255();

        test.printOdd1To255();

        test.printSum();

        int[] arr = {1, 3, 5, 7, 9, 13};
        test.iterateArr(arr);


        int[] arr1 = {1, 3, 5, 7, 9, 13, 5, -3};
        test.findMax(arr1);

        int[] arr2 = {1, 3, 5, 7, 9, 13, 5, -3};
        test.getAverage(arr2);


        test.arrayOddNumbers();

        int[] arr3 = {1, 3, 5, 7, 9, 13, 5, -3};
        test.greaterThanY(arr3, 3);

        int[] arr4 = {1, 3, 5, 7, 9, 13, 5, -3};
        test.squreTheValues(arr)4;

        int[] arr5 = {1, 3, -5, 7, -9, 13, 5, -3};
        test.eliminateNegativeNumbers(arr5);


        int[] arr6 = {1, 3, -5, 7, -9, 13, 5, -3};
        test.maxMinAvg(arr6);

        int[] arr7 = {1, 3, 4, 7, -9, 13, 5, -3};
        test.shiftingValuesInArray(arr7);

    }



}
