import java.util.ArrayList;
import java.util.Arrays;

public class Basics {

    public void print1To255() {
        for(int i = 1; i<=255; i++){
            System.out.println(i);
        }
    }


    public void printOdd1To255() {
        for(int i = 1; i<=255; i+=2){
            System.out.println(i);
        }
    }

    public void printSum(){
        int sum = 0;
        for(int i = 0; i<=255; i++){
            sum += i;
            System.out.println("New number: " + i + " Sum: " + sum);
        }
    
    }

    public void iterateArr(int[] arr){
        for(int i = 0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }


    public void findMax(int[] arr){
        int max = arr[0];
        for(int i = 0; i<arr.length; i++){
            if(arr[i]> max){
                max = arr[i];
            }
        }
        System.out.println(max);
    }


    public void getAverage(int[] arr){
        int sum = 0;
        for(int i = 0; i<arr.length; i++){
            sum += arr[i];
        }

        System.out.println(sum/arr.length);

    }

    public void arrayOddNumbers(){
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i = 1; i<256; i+=2){
            list.add(i);

        }
        System.out.println(list);

    }


    public void greaterThanY(int[] arr, int y){
        int count = 0;
        for (int i = 0; i<arr.length; i++){
            if(arr[i] > y){
                count++;
            }
        }
        System.out.println(count);
    }


    public void squreTheValues(int[] x){
        ArrayList<Integer> sq = new ArrayList<Integer>();
        for(int i =0; i<x.length; i++){
            x[i] = x[i] * x[i];
            sq.add(x[i]);
        }
        System.out.println(sq);
    }

    public void eliminateNegativeNumbers(int[] arr){
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for(int i = 0; i<arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0; 
            }
            newArr.add(arr[i]);
        }
        System.out.println(newArr);

    }


    public void maxMinAvg(int[] arr){
        ArrayList<Object> newArr = new ArrayList<Object>();
        int min = arr[0];
        int max = arr[0];
        int sum = 0;

        for(int i = 0; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
            
            sum += arr[i];

        }
        double avg = sum/arr.length;

        newArr.add(max);
        newArr.add(min);
        newArr.add(avg);

        System.out.println(newArr);
    }


        public void shiftingValuesInArray(int[] arr){

            for(int i = 0; i<arr.length -1; i++){
                arr[i] = arr[i+1];
                

            }
            arr[arr.length-1] = 0;

            System.out.println(Arrays.toString(arr));
        }

    }


