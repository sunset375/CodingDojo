//package fundamentals.FizzBuzz;


public class FizzBuzzTest {
    public static void main(String[] args){
        FizzBuzz fb = new FizzBuzz();
        String output = fb.fizzBuzz(3);
        System.out.println(output);
        output = fb.fizzBuzz(5);
        System.out.println(output);
        output = fb.fizzBuzz(15);
        System.out.println(output);
        output = fb.fizzBuzz(2);
        System.out.println(output);
    }
    
}
