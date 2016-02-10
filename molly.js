
importPackage(java.io);
importPackage(java.lang);
importPackage(java.math);
importPackage(java.util);

var sc = new Scanner(System['in']);
var kases = sc.nextInt();
for(var kase = 1; kase <= kases; kase++) {
        var N = sc.nextInt();

        var myMap = new HashMap();
        var total=0;
        //System.out.println(total);
        for(var j = 1; j <= N; j++) {
        //	System.out.println("------"+j);
        	var i=sc.nextInt();
        //	System.out.println("------"+-i);
        	if(i==0){
        		total=parseInt(total,10)+1;
        	}
    else if(myMap.containsKey(i))
    {
    	myMap.put(i,parseInt(myMap.get(i),10)+1);
    	if(myMap.containsKey(-i)){

    		total=parseInt(total,10);
    		//System.out.println(total+"uuuuu");
    		//System.out.println(parseInt(myMap.get(-i),10)+"dddd")
    		total+=parseInt(myMap.get(-i),10);
    		//System.out.println(total);
    	}
    }
    else if(myMap.containsKey(-i)){
    	//System.out.println(total);
    		total=parseInt(total,10);
    		//System.out.println(total+"uuuuuccccccccccc");
    		//System.out.println(parseInt(myMap.get(-i),10)+"ddddcccccccccc")
    	total+=parseInt(myMap.get(-i),10);
    	//System.out.println(total);
    	myMap.put(i,1.0);
    }
    else{
    		myMap.put(i,1.0);
    }
}

 System.out.println(total);
}
