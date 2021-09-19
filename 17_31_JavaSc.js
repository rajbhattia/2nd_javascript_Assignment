//chapter 17 - 20      **Array Loop**\

//1
let multiDim = [];
multiDim[0] = "raj"
multiDim[1] = "Baboo"

//2

var grid = [];
var arr = new Array(3);

for (let i = 0; i <= 2; i++) {
    arr[i] = new Array(3);
}
for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        var a = prompt("enter value");
        arr[i][j] = a;

    }



}
console.log(arr);


//3
var i
for(i=0;i<=10;i++){
    console.log(i,)
}

//4
var tbl_num = +prompt("enter a number to show its multiplication table")
var length = +prompt("enter table multiplication length")
for(let i=1;i<=length;i++){
    result = i * tbl_num
    console.log(tbl_num+ "*" +i+ " " + "=" +result )
}


//5
fruits = ["apple", "banana", "mango", "orange", "strawberr"]
for (var i = 0; i < fruits.length; i++) {

    console.log(fruits[i])
}
 console.log("element in index 0 is " ,fruits[0])
 console.log("element in index 1 is " ,fruits[1])
 console.log("element in index 2 is " ,fruits[2])
 console.log("element in index 3 is " ,fruits[3])


//6    (a)
console.log("counting: ")
for(let i=1;i<=15;i++){

  console.log(i)

}

//6    (b)

arr =[1,2,3,4,5,6,7,8,9,10]
x = arr.reverse()
console.log(x)


//6    (c)
console.log("even: ")
for(let i=0;i<=20;i++){
  // console.log(i)
  if(i%2==0){
   console.log(i)
  }

}

//6    (d)
console.log("odd: ")
for(let i=0;i<=20;i++){
    if(i%2 !=0){
    console.log(i)
  }
}

//6   (e)

console.log("SERIES: ")
for(let i=0;i<=20;i++){
  // console.log(i)
  if(i%2==0){
   console.log(i,"k")
  }

}

//7
A = ["cake", "apple pie", "cookie", "chips", "patties"]
console.log("Welcome to ABC bakery. What do you want tpo order sir/ma'am?")
prompt("")
if( A= "cake"){
  console.log("cokie is available at the index 0 in our backery" )

}
else if( A= "apple pie"){
  console.log("cokie is available at the index 1 in our backery" )

}
else if( A= "cookie"){
  console.log("cokie is available at the index 2 in our backery" )

}
else if( A= "chips"){
  console.log("cokie is available at the index 3 in our backery" )

}
else if( A= "patties"){
  console.log("cokie is available at the index 4 in our backery" )

}
else{
  console.log("we are sorry this no available at our battery")
}




//8

var array = [24, 53, 78, 91, 12]
console.log("array items: " ,array)
var largest=0
for(i=0;i<=largest;i++){
    if(array[i]>largest){
        var largest=array[i]
    }

}
console.log("the largest number is:" ,largest)



//9
a = [24, 53, 78, 91, 12,]
console.log("array items " ,a)
var smallest = a[0]
for(i=0;i<a.length;i++){
    if(a[i]<smallest){
         smallest=a[i]
    }

}
console.log("the smallest number is:" ,smallest)



10

for( let i=1;i<=100;i++){
    if(i%5==0){
        console.log(i)

    }
}



//*********************************************************************************//

//chapter 21-25     string methods

//1

var firstname = prompt("Enter your first name")
var lastname = prompt("Enter your 2nd name")
var Fullname = firstname +" "+ lastname
console.log("Welcom: " ,Fullname)

//2
var str = "my phone is Samsung Glaxy S6 edge plus"
console.log(str)
lngth=str.length
console.log(lngth)

//3
var stgr = "pakistani"
x= stgr.indexOf('n')
console.log("index of 'n':" ,x)


// 4
var str = 'hello world'
last_chr_no = str.indexOf(str.length-1)
console.log("last index of 'l'  is: " ,last_chr_no)

//5
 var str = "pakistani"
 console.log("string" ,str)
 if(str.indexOf(str[3]=='i')){
    console.log("character at index 3:" ,str[3])
 }


//6
var firstname = prompt("Enter your first name")
var lastname = prompt("Enter your 2nd name")
var Fullname = firstname +" "+ lastname
console.log("Welcom: " ,Fullname)


//7 
var txt = "hyderabad"
console.log(txt)
newtxt = txt.replace("hyderabad" , "islamabad")
console.log(newtxt)


//8
var message = "Ali and Sami are best friends. They play cricket and football together.";
new_msg = message.replace("and" , "&" )
console.log(new_msg)


//9 
var a = "72"
x= typeof(a)
console.log("value:" ,x)
var b = 72
v= typeof(b)
console.log("value:" ,v)


// 10 
var chkp = prompt("enter input")
console.log("user input: " ,chkp)
if(chkp == 'peanuts'){
    casCapit = chkp.toUpperCase()
    console.log("upper case: " ,casCapit)
}


//11
var chkp = prompt("enter input")
console.log("user input: " ,chkp)
if(chkp == 'peanuts'){

    //function net se hrelp
    casCapit = chkp.toCapitilize()
    console.log("upper case: " ,casCapit)
}


//12
var floatingStringNum = "35.36"
//Number is a function to convert string floating point string number("35.35") to floating number
var num = Number(floatingStringNum)
console.log(num)

//13 
var username = prompt("enter username")
var array = username.split("")
for (let index = 0; index < Array.length; index++) {
    if(array[index] == '@' || array[index] == '.' || array[index] == ',' || array[index] == '!') {
        document.write("enter a valid username."+"</br>")
          console.log(index)
          breake
    }
else {
        confirm("is it good username")
    }

}
//14
A = ["cake", "apple pie", "cookie", "chips", "patties"]
console.log("Welcome to ABC bakery. What do you want tpo order sir/ma'am?")
prompt("")
if( A= "cake"){
  console.log("cokie is available at the index 0 in our backery" )

}
else if( A= "apple pie"){
  console.log("cokie is available at the index 1 in our backery" )

}
else if( A= "cookie"){
  console.log("cokie is available at the index 2 in our backery" )

}
else if( A= "chips"){
  console.log("cokie is available at the index 3 in our backery" )

}
else if( A= "patties"){
  console.log("cokie is available at the index 4 in our backery" )

}
else{
  console.log("we are sorry this no available at our battery")
}


//15????????????????????????????????????????????????????????????????????????????
var pass = prompt("enter pass")
pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/;
console.log("pass correct")
 if(pass<6){
console.log("enter valid pass")
}
else if(pass==[0-9]){
    alert("enter a valid pass")
}


1//6
var university = "University of Karachi";
spl = university.split()
console.log(spl)


//17

var str = prompt('hello world')
last_chr_no = str.charAt(str.length-1)
console.log("last index of 'l'  is: " ,last_chr_no)


//18

console.log("TEXT: The quick brown box jumps over the lazy dog There are 2 occurences of the 'word' ")
var str = ("TEXT: The quick brown box jumps over the lazy dog There are 2 occurences of the 'word' ")
countt = str.match('the').length
console.log(countt)





//***************************************************************************/
chapter 26-30    MATH METHOD

//1

var Num = +prompt("enter number")
//a
console.log("Number" ,Num)

//b
n =  Math.round(Num)
console.log("round off value: " ,n)

//c
flr = Math.floor(Num)
console.log("floor value " ,Num)


//d
cl = Math.ceil(Num)
console.log("ceil value " ,cl)




//2

var Num = +prompt("enter number")
//a
console.log("Number" ,Num)

//b
n =  Math.round(Num)
console.log("round off value: " ,n)

//c
flr = Math.floor(Num)
console.log("floor value " ,Num)


//d
cl = Math.ceil(Num)
console.log("ceil value " ,cl)





//3
num = +prompt("enter number")
abs = Math.abs(num)
console.log("The absolute value of " ,num, " id "   ,abs)



//4
var head = 1
var tail = 2
+prompt("enter value")
var toss = Math.random() * 2
var floor = Math.floor(toss)
if (floor==0){
    console.log("random coin value: ,head )

}
else if(floor == 1){
    console.log("random coin value:" ,tail)
}



//5 
var head = 1
var tail = 2
+prompt("enter value")
var toss = Math.random() * 2
var floor = Math.floor(toss)
if (floor==0){
    console.log(head)
    console.log("random coin value: " +" "+ "head")

}
else if(floor == 1){
    console.log (tail)
    console.log("random coin value:" +" "+ "Tail")
}



//6
for( let i=1;i<=99;i++){
var rand = Math.floor(Math.random()*i)+1
console.log(rand)

}


//7
var wgt = +prompt("enter your weight in kilogram")
console.log("your weight is: " ,wgt)


//8
var a = +prompt("enter number from 1 to 10")
secret_num = 6
if(a==6){
    alert("Congratulations! \n Rajesh")
}
else{
    alert("try again!")
}





/////////////////////////////////////   *** END   *** ///////////////////////////////////////

