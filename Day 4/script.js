var request=new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i=0;i<250;i++){
console.log(data[i].flag);
    }
}
