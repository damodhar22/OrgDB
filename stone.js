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

var reader = new BufferedReader( new InputStreamReader(System['in']) );

var testCase = reader.readLine();

for(var i=0;i<testCase;i++) {
    var n = Integer.parseInt(reader.readLine());
    var pos = [];
    var neg = [];
    var zeroCount = 0;

    for(var j=0;j<100005;j++) {
        pos[j] = 0;
        neg[j] = 0;
    }

    var line = [];
    line = reader.readLine().split(" ");

    for(var j=0;j<n;j++) {
        var temp = Integer.parseInt(line[j]);
        if(temp===0) {
            zeroCount++;
        }
        else if(temp>0) {
            pos[temp]++;
        }
        else {
            neg[temp*-1]++;
        }
    }

    var result = 0;

    result = (zeroCount*(zeroCount-1))/2;

    for(var j=0;j<100005;j++) {
        result = result + (pos[j]*neg[j]);
    }
    result = result.toFixed(0);
    System.out.println(result);
}
