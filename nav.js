//let na=["saw","pyae","sone"];
//console.log(na);
//na.unshift("sad");
//console.log(na);
//console.log(na.join(","));
//let names=["saw","pyae","sone"];
//let MapNames=names.map(function(aung){
   // return "mr-"+aung;
//});
//console.log(MapNames);
//let people=[
   // {name:"saw",age:18,gender:"M"},
   //  {name:"aung",age:20,gender:"M"},
    //  {name:"soe soe",age:13,gender:"F"},
     //  {name:"myat",age:19,gender:"F"},
    //    {name:"sone",age:11,gender:"M"},
//]
//let human=people.map(person=>{
    //if(person.gender=="M"){
       // person.gender="Male";
    //}
    //else{
       // person.gender="Female";
    //}
    //return person;
//})
//console.table(human);
//let pyae=[1,3,5,6,7,8];
//let c=Math.max(...pyae);
//console.log(c);
//let v=Math.ceil(Math.random()*10);
//console.log(v);
//class Test{
   //static name="Code Hub";
  //static info(){
      //return console.log("my name is "+this.name);
   //}
//}
//Test.info();
//let test =new Test();
//test.info();
class Start{
   carname="";
   carcolor="";
   constructor (carName,carColor){
      this.carname=carName;
      this.carcolor=carColor;
   }
   getcar(){
      console.log("car name is "+this.carname);
      console.log("car color is "+this.carcolor);
   }
}
let car=new Start("Toyota","Black");
car.getcar();
let car2=new Start("BMW","Red");
car2.getcar();
let d=new Date();
console.log(d);
let hour=d.getHours();
let month=d.getMonth();
console.log(d.toLocaleString("ko-KR"));