

let x = prompt('Enter the start');
let y = prompt('Enter the end');
let z = prompt('Enter the step');
let myArray = [];
Number(x)
Number(y)
Number(z)

if(isNaN(x) || isNaN(y) || isNaN(z)){
        
    if(isNaN(Number(x))){
          x = prompt('Enter the start');
    }
    else if(isNaN(Number(y))){
          y =  prompt('Enter the end');
    }
    else if(isNaN(Number(z))){
        z = prompt('Enter the step');
    }
        
    
}   


//let newval = 0


//newval=Number(x)+Number(z);

//document.write('new val is x+z' + newval);

/*myArray.push(x);
myArray.push(y);
myArray.push(z);

myArray.toString();
document.write('my array' + myArray);*/

function order(start,end,step){
    
   // let myCount = Number(start);
    let newval = 0;
    myArray.unshift(Number(start));
   
        
    
    if(Number(start)<Number(end)){

        while (newval < Number(end) ){
            
            newval= Number(start) + Number(step);
            start=Number(start) + Number(step);
                
        
            myArray.push(Number(newval));
        
            //myCount += 1;

        }
    
    
    //document.write('The generated list is' + ' ' + myArray +`\n`)
    }

    else if (Number(start)>Number(end)){
            newval = Number(start);
            while (newval > Number(end)){
            
            newval= Number(start) + Number(step);
            start=Number(start) + Number(step);
                
        
            myArray.push(Number(newval));
        
           //myCount += 1;
        }
        //document.write('The generated list is' + ' ' + myArray +`\n`)
    }
    document.write('The generated list is' + ' ' + myArray +`\n`)
}

  
     
//document.write('The generated list is' + myArray);

function getSum() {
    let sum = myArray.reduce(function(a,b){return a + b});
    
    document.write(`\n The sum of the array is ` + sum);
}


order(x,y,z);
document.write(`\n`);
getSum(myArray);

 





//document.write('here is my array');