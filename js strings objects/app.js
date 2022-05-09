// question 1

// let fName = prompt('enter your first name')
// let lName = prompt('enter your last name')


// let fullName =alert("welcome"+" "+fName+" "+lName)
























// question 2

// let mob = prompt('enter mobile model')
// document.write("my favourite phone is: "+mob+"<br>")
// document.write("length of string: "+mob.length)




























// question 3

// let pak = "pakistan"


// document.write("string: "+pak+"<br>")
// document.write("indexof n: "+pak.indexOf("n"))


























// question 4

// let hel = "Hello World"

// document.write("string: "+hel+"<br>")
// document.write("last indexof l is: "+hel.lastIndexOf("l"))




























// question 5

// let pak = "pakistani"

// document.write("string: "+pak+"<br>")
// document.write("indexof 3rd character is: "+pak.charAt(3))































// question 6

// let fName = prompt('enter your first name')
// let lName = prompt('enter your last name')



// let fullName =alert("welcome "+fName.concat(lName))






























// question 7

// let city = "hyderabad"


// let rep = city.replace('hyder','islam')

// document.write("city: "+city+"<br>")
// document.write("after replacement: "+rep)




























// question 8


// let message = "Ali and Sami are best friends. They play cricket and football together";


// let repMessage = message.replace(/and/g,'&')


// document.write("before replacement: "+message+"<br>")
// document.write("after replacement: "+repMessage)































// question 9

// let strNum = "472"

// let conNum = Number(strNum)

// document.write("value "+strNum+ "      "+"<br>")
// document.write("type "+typeof(strNum)+"<br>")

// document.write("value "+conNum+ "      "+"<br>")

// document.write("type "+typeof(conNum))






























// question 10


// let inp = prompt('enter word')

// document.write("user input "+inp+"<br>")

// let cap = inp.toUpperCase()

// document.write("uppercase "+cap)





























// question 11

// let inp = prompt('enter word')

// document.write("user input "+inp+"<br>")

// let capitalize = inp.charAt(0).toUpperCase()+inp.slice(1).toLowerCase()


// document.write("title case "+capitalize)


































// question 12



// let num = 35.36;
// let str = typeof(num);

// document.write(num+" "+str+"<br>")


// let changeNum = num.toString()

// let repAll = changeNum.replace(".","")
// let type = typeof(changeNum);
// document.write(repAll+" "+type)

















// question 13


// var userName = prompt("Enter Your Name: ");
// var message;
// var arr1=[];
// var arr2=[];

// for(var i=0;i<userName.length;i++)
// {
//     arr1[i]=userName.split("&nbsp;");
//     arr2[i]=userName.charCodeAt(i);
//     if(arr2[i]!=33||arr2[i]!=44||arr2[i]!=46||arr2[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr2[i]==33||arr2[i]==44||arr2[i]==46||arr2[i]==64)
//     {
//         alert("Please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Name: ");
//         for(var i=0;i<userName.length;i++)        {
//             arr1[i]=userName.split("&nbsp;");
//             arr2[i]=userName.charCodeAt(i);
//             if(arr2[i]!=33||arr2[i]!=44||arr2[i]!=46||arr2[i]!=64)
//             {
//                 break;
//            }
//         }
//     }

// }
// alert(message);
















// question 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]


// let t = false;


// let search = prompt("enter your item")

// let sen = search.toLowerCase()


// for(i=0;i<A.length;i++){
    
//     if(sen ===A[i]){
//   t=true;
//         alert(A[i]+" is available in our bakery")
// break;
//     }
// }

// if(t === false){
//     alert("item is not available in our bakery");
// }





























// question 15

// let university = "University of Karachi";

// for(let i = 0;i<university.length;i++){
//     document.write(university[i]+"<br>")
// }





























// question 16 

// let lPak = "pakistan"

// document.write(lPak+"<br>")


// let indPakN = lPak.charAt("user input: "+lPak.length - 1)

// document.write("last chracter of input "+indPakN)












// question 17







// var user = "Pakistan";
// var userLastchar = user.charAt(7);
// document.write("<br><br>User Input: " + user);
// document.write("<br>Last Character of Input: " + userLastchar);











// question 18


// let text = "The quick brown fox jumps over the lazy dog"

// document.write(text +"<br>")




// let sp = text.split("the").length

// document.write("there are "+sp+" occurence of word the")
