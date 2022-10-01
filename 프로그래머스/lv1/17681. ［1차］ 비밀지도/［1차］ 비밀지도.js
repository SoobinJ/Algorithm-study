function solution(n, arr1, arr2) {
    var answer = [];
    
    for(var i=0;i<n;i++){
        var str="";
        var b1=(arr1[i].toString(2)).padStart(n,0);
        var b2=(arr2[i].toString(2)).padStart(n,0);

        var k=b1.split("");
        var t=b2.split("");
        
        for(var j=0;j<n;j++){
            if(k[j]==='0'&&t[j]==='0'){
                str=str+" ";
            }else{
                str=str+"#";
            }
        }

        answer[i]=str;

    }

    return answer;
}