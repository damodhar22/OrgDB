/*
// Below is a sample code to process input from STDIN.
// Equivalent in effect to the Java declaration import java.io.*;
importPackage(java.io);
importPackage(java.lang);
importPackage(java.math);
importPackage(java.util);

var sc = new Scanner(System['in']);

var input = sc.nextInt();
System.out.println(input);
System.out.println('Hello, there!\n');
// End of input processing code.
*/

importPackage(java.io);
importPackage(java.lang);
importPackage(java.math);
importPackage(java.util);

var reader = new BufferedReader( new InputStreamReader(System['in']) );

var testCase = Integer.parseInt(reader.readLine());

for(var i=0;i<testCase;i++) {

    var line = [];
    line = reader.readLine().split(" ");

    var n = Integer.parseInt(line[0]);
    var x = Long.parseLong(line[1]);

    var arr = [];

    line = [];
    line = reader.readLine().split(" ");

    for(var j=0;j<n;j++) {
        arr.push(Long.parseLong(line[j]));
    }

    var result = 0;
    arr.sort();

    for(var a=0;a<arr.length-1;a++) {
    	while(a<arr.length-1 && arr[a] == arr[a+1]) {
    		a++;
    	}
    	if(a>0 && arr[a] == arr[a-1]) {
    		var mul = arr[a]*arr[a];
    		var div = 1;
    		var temp = mul^div;
            if(temp<=x && !(min!=1 && mul>=2000000002)) {
                result++;
            }
    	}

        for(var b=a+1; b<arr.length;b++) {
        	while(b<arr.length-1 && arr[b] == arr[b+1]) {
    			b++;
    		}
    		var max;
    		var min;
    		if(arr[a]>arr[b]) {
    			max=arr[a];
    			min=arr[b];
    		} else {
    			max=arr[b];
    			min=arr[a];
    		}
    		var mul = max*min;
    		var div = max/min;
            var temp = mul^div;
            if(temp<=x && !(min!=1 && mul>=2000000002)) {
                result++;
            }
        }
    }

    print(result);
}
