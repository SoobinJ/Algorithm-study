function solution(n, arr1, arr2) {
    var answer = [];
    
    for(var i=0;i<n;i++){
        var str="";
        var b1=(arr1[i].toString(2)).padStart(n,0);
        var b2=(arr2[i].toString(2)).padStart(n,0);

        var sB1=b1.split("");
        var sB2=b2.split("");
        
        for(var j=0;j<n;j++){
            if(sB1[j]==='0'&&sB2[j]==='0'){
                str=str+" ";
            }else{
                str=str+"#";
            }
        }

        answer[i]=str;

    }

    return answer;
}