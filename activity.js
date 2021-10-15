//FIRST 
//1)-FIND ODD IN ARRAY
// ANONYMOUS FUNCTION 
 let Arrays=[1,2,4,11,50,6,71];
 let printOdd=function(arr){
     let odd=arr.filter((item)=>item %2==1)
     console.log(odd);
 }

  printOdd(Arrays)

// IIFE Function
  (function(){
      let odd=Arrays.filter((item)=>item %2==1)
      console.log(odd);
  })
  ()

//CONVERT STRING TO CAPITALS
//ANONYMOUS FUNCTION
let StringArray=["aDarsh","AVANI","AjmaL","DRIsHya"];
 let UPPER=function(Arr){
     Arr.map(s=>{
         console.log(s.toUpperCase());
     })
 }
 UPPER(StringArray); 
//IIFE Function
(function(){
    StringArray.map(s=>{
        console.log(s.toUpperCase());
    
    })
})
    ()


// //SUM OF ALL NUMBERS IN ARRAY
 let numbers=[1,3,4,66,7,9];
let sum=0
let sumOfarray=function(arr){
     arr.map(s=>{
         
         sum=s+sum;
     })
     console.log(sum);
}
sumOfarray(numbers)

//IIFE FUNCTION
(function(){
    let sum1=0
    numbers.map(s=>{
      sum1+=s
    })
    console.log(sum1); 
})
()

//PRIME NUBERS IN AN ARRAY
//ANONYMOUS FUNCTION
let numbers=[2,7,6,9,11,15,21];

let prime=function(arr){
    arr.map(s=>{
        if(s!=2 && s%2 != 0){
            let flag=true
             for(i=3;i<Math.floor(s/2);i++){
                 if(s%i==0) flag =false;
             }
             if(flag) console.log(s);
        }
        else if(s==2) console.log(s);
    } )      
}
prime(numbers); 

//IIFE function
(function (){
    numbers.map(s=>{
        if(s!=2 && s%2 != 0){
            let flag=true
             for(i=3;i<Math.floor(s/2);i++){
                 if(s%i==0) flag =false;
             }
             if(flag) console.log(s);
        }
        else if(s==2) console.log(s);
    } )      

}) ()

//REMOVE DUPLICATE FROM ARRAY
 let ARRAY2=[1,2,3,4,3,5,4,3,1];
 let duplicate=function(Arr){
     var newarray = new Set(Arr);
     return newarray
 }
 console.log(duplicate(ARRAY2));

//IIFE FUNCTION

(function (){
             var newarray = new Set(ARRAY2);
             console.log(newarray);
         
})()


//PALIANDROME 
//IN ANONYMOUS FUNCTION
let array3=["malayalam","pop","hai","level"];
let flag;
let FindPlaindrome=function(){
    array3.map(s=>{
        let elements=s.split("");
        //console.log(elements);
        let reverseElements=elements.reverse();
        //console.log(reverseElements);
        for(i=0;i<elements.length;i++){
            flag=true;
            
              if(elements[i] != reverseElements[elements.length-[i+1]]){
                  flag=false
              }
            }
            if(flag) console.log(s);
          })

    }


FindPlaindrome()

//IIFE FUNCTION
(function (Arr){
    Arr.map(s=>{
                 let elements=s.split("");
                 //console.log(elements);
                 let reverseElements=elements.reverse();
                 //console.log(reverseElements);
                 for(i=0;i<elements.length;i++){
                     flag=true;
                    
                       if(elements[i] != reverseElements[elements.length-[i+1]]){
                           flag=false
                       }
                     }
                     if(flag) console.log(s);
                   })
})(array3)


//MDIAN OF TWO ARRAY
//ANONYMOUS FUNCTION
let Number1=[10,15,16,20,23,29];
let numbers2=[21,25,27,28,30,35];
let lng;
let lengthFind=function(){
    return Number1.length;
}
let Median=function(){
     lng=lengthFind();
    if(lng %2 !==0) oddMedian() 
    else if(lng %2 ==0) evenMedian(numbers2) ,evenMedian(Number1)
    
}
let oddMedian=function(){
    console.log(Number1[lng /2 - .5]); 
    console.log(numbers2[lng /2 - .5]);
}
let evenMedian=function(para){
    
    let num1=para[lng / 2]
    let num2=para[(lng /2)-1]
    console.log((num1+num2)/2);
    
}
Median()


//ROTATE AN ARRAY BY K STEPS
//ASYNC FUNCTION
const RotateArray=[13,5,8,10,56,40];
let Rotating=function(){
    let changing=RotateArray.shift();
     RotateArray.push(changing);
     return RotateArray
}

let rotatedK=function(k){
    for(i=0;i<k;i++){
        var result=Rotating()
    }
    console.log(result);
}
rotatedK(2);
//IIFE FUNCTION
(function (k){
    for(i=0;i<k;i++){
        (function (){
            let changing=RotateArray.shift();
            RotateArray.push(changing);
            return RotateArray 
        }) ();
    }
    console.log(RotateArray);

})(3)

//ARROW FUNCTIONS
//SECOND
//PRINT ODD IN AN ARRAY

let Arrays=[1,2,4,11,50,6,71];
 let printOdd=(arr)=>{
    let odd=arr.filter((item)=>item %2==1)
    console.log(odd);

 }
printOdd(Arrays)

//PRINT CAPITAL OF STRINGS
let StringArray=["aDarsh","AVANI","AjmaL","DRIsHya"];
let UPPER=(Arr)=>{
    Arr.map(s=>{
        console.log(s.toUpperCase());
    })
}
UPPER(StringArray);

//SUM OF ALL NUMBERS IN AN ARRAY
let numbers=[1,3,4,66,7,9];
let sum=0
let sumOfarray=(arr)=>{
    arr.map(s=>{
         
        sum=s+sum;
    })
    console.log(sum);
}
sumOfarray(numbers)

//PRIME NUMBERS IN ANA ARRAY
let Pnumbers=[2,7,6,9,11,15,21];

let prime=(arr)=>{
    arr.map(s=>{
        if(s!=2 && s%2 != 0){
            let flag=true
             for(i=3;i<Math.floor(s/2);i++){
                 if(s%i==0) flag =false;
             }
             if(flag) console.log(s);
        }
        else if(s==2) console.log(s);
    } )      
}
prime(Pnumbers); 

//PALIANDROME IN ARRAY

let array3=["malayalam","pop","hai","level"];
let flag;
let FindPlaindrome=()=>{
    array3.map(s=>{
        let elements=s.split("");
        
        let reverseElements=elements.reverse();
        
        for(i=0;i<elements.length;i++){
            flag=true;
            
              if(elements[i] != reverseElements[elements.length-[i+1]]){
                  flag=false
              }
            }
            if(flag) console.log(s);
          })

    }


FindPlaindrome()




