function solution(s){
    var answer = true;

    var arr=Array.from(s);
    var pCount=0;
    var yCount=0;
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]==="p"||arr[i]==='P'){
            pCount++;
        }
        else if(arr[i]==='y'||arr[i]==='Y'){
            yCount++;
        }else{
            
        }
    }
    if(pCount===yCount){
        answer=true;
    }else{
        answer=false;
    }

    return answer;
}