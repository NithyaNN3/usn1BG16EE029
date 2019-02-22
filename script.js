/*
//decision making
var age=18;
if(age<13){
    console.log("minor");

}else if(age>=18){
    console.log("major");
}

age>=18?console.log("major"):console.log("minor");
*/
//function
/*function girl(firstname,lastname){

    console.log(firstname+' '+lastname);
}
girl('Ana','Davis');

//array
var names=['blah','blah2','blah3']
console.log(names);

names.push("hbd");
names.unshift("hbd2");
//names.pop();
console.log(names);
console.log(names[2]);
*/
/*
//Challenge 2
var tips=["rest1","rest2","rest3"];
var finalbill=["rest1","rest2","rest3"];

function finalbill(rest1,rest2,rest3){
    console.log(rest1+rest1*0.15,rest2+rest2*0.2,rest3+rest3*0.10);
    console.log()

}
//tips(124,48,268);
finalbill(124,48,268);
*/
var bill=[124,48,268];
var value;
tip=[];
totalbill=[];
for (j=0;j<3;j++){
if(bill[j]<50){
    tip[j]=0.2*bill[j];
    totalbill[j]=tip[j]+bill[j];

}else if(50<=bill[j]<200){
    tip[j]=0.15*bill[j];
    totalbill[j]=tip[j]+bill[j];
    
}else if(bill[j]>200){
    tip[j]=bill[j]*0.10;
    totalbill[j]=tip[j]+bill[j];
}
}
console.log(tip);
console.log(totalbill);


/*
function bill(tips,totalbill){
if(bill<50){
    tips=bill*0.2;
    totalbill=bill+tips;
}else if(200>bill>50){
    tips=bill*0.15;
    totalbill=bill+tips;
}else{
    tips=bill*0.10;
    totalbill=bill+tips;
    console.log(tips+','+bill);
}
}
*/

/*
//Object
var myDetails = {
    firstname:'Nithya',
    lastname:'N',
    doB: 1997,
    family: ['nat','pat'],
    calcAge: function(birthYear){
        return 2019-birthYear;
    }
};
console.log(myDetails.firstname);
var z ='doB';
console.log(myDetails[z]);

myDetails.doB=1999;
console.log(myDetails);

//another way for object creation

var asd = new Object();
asd.firstname = 'jane';
asd.lastname = 'doe';

console.log(asd);

//
console.log('Nithya is '+myDetails.calcAge(1997)+' years old');
*/