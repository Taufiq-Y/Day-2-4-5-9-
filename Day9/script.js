var request=new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
   var res=data.filter((element=>element.region==='Asia'));
   console.log(res);

   var res1=data.filter((element=>element.population<200000));
   console.log(res1);

   var res3=data.filter((element)=>{
       for(let i in element.currencies){
           if(element.currencies[i].code==='USD'){
               return true;
           }
       }
    });
   console.log(res3);
   var res4=data.reduce((acc,ele)=>acc+ele.population,0);
   console.log(res4);
  
}