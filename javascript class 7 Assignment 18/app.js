alert("Welcome To Javascript")
var a = prompt("What's your good name")
alert(a)
var b = prompt("What's your favourite colour")
alert("Ok Noted, " + b +  " is your favourite colour")

// Chap 2

var firstName = prompt("What's your first name")
var lastName = prompt("What's your last name")
var fullName = alert(firstName+ lastName)

var city =prompt("Where  you live ")
alert(" ohh, you live in "  + city)


var hobby = "My favourite hobby is Playing  cricket"
alert(hobby)


// chap # 3

var c = "23"
var d ="21"
alert(c+d)

var num = prompt("How much percentage you got in H.S.C")
if(num>=50){
    alert("pass")
}else{
    alert("Fail")
}

var age =prompt("What is your age")
if(age > 18){
alert("Thank you for sharing info")
}

// // chap #4

var legalName ="$li, ali_Ahmed, ali1"
alert("Legal Variables are like: " + legalName)
var illegalName = "@li, Ali, 1Ali"
alert("Illegal Variables are like: " + illegalName)

var array = ["$li" , "ali_Ahmed", "ali1", "@li" , "Ali ", "1Ali"]
alert(array)

// chap 5

var e = 12
var f = 10
alert(e+f)
alert(e-f)
alert(e*f)
alert(e/f)
alert(e%f)

var g = 15
alert(++g)


// chap 6

var h = 8
alert("Increment of h is: " + ++h)
alert("Decrement of h is: " + --h)
h += 2
alert("+= operator on number:" + h)
h -= 2
alert("-= operator on number: " + h)
h*= 2
alert("*= operator on number: " + h)
h/= 2
alert("/= operator on number: " + h)

alert("Updated h is : " + h)

// chap 7

var i = 3
var j = 4
var k = 5
var result =(i+j)*k
alert("The result of (i + j) * k is: " + result);

var l = 6
var m = 3
var n= 7
var o = 10
var result = ((l-m) + n)*o/2
alert("The result of ( (l-m) + n)*o/2 is: " +result)


// chap # 8

var firstName = "Soban"
var lastName = "Ahmed"
var fullName = firstName + " " + lastName
alert(fullName)

alert("Hello, Welcome ")
var msg1 = "Hello,"
var msg2 = "Welcome"
var msg3 = "Newbie"
var message = msg1+  " " + msg2 +  " "  + msg3
alert(message)


// chap # 9

var q1= prompt("What is your favourite colour")
alert("Your favourite Colour is " + q1)
var q2= prompt("What is your Age")
alert(q2)
var q3= prompt("What is your favourite fruit")
alert(q3)

// chap 10

var p = "11"
if(p>10){
    alert("Your Number is greater than 10")
}
var marks="60"
if(marks>=50){
    alert("pass")
}
var aage= "19"
if(aage<18){
    alert("Minor")
}

// chap 11

var q = 5
var r = 5
if(q>r){
    alert("number 1 is greater")
}
if(q===r){
    alert("numbers are equal")
}

if(q<=r){
    alert("numbers are less than equals to q")
}


// chap 12

var s = 80
var t = 60
if(s>=80){
    alert("A")
}
if(t<=80){
    alert("B")
}else{
    alert("C")
}

var aaage= "19"
if(aaage<=12){
    alert("child")
}
if(aaage < 18){
    alert("Teen")
}else{
    alert("Adult")
}

var temp = 34
if(temp<20){
    alert("Cold")
}
if(temp>27){
    alert("Warm")
}
if(temp>36){
    alert("Hot")
}


// chap 13

var u = 8
var v = u%2
if(v===0){
    alert("True")
}else{
    alert("False")
}
 
var x = 75
if(x>=50 && x<=100){
    alert('Valid Marks')
}
    
var y = 30
var z = y%3
var zz = y%5
var zzz = z +zz 
if(zzz===0){
    alert("yes These ae divisible by 3 & 5")
}else{
    alert("no these are not divisible by 3 & 5")
}



// chap 14

var age =+prompt("Enter your age");
var hasID = confirm("Do you have ID?? click Ok for yes, cancel for No ");
if(age >=18){
if(hasID===true){
    alert("alllowed")
}else{
    alert("Not Allowed")
}
}

var storeNum = prompt("Store a random number")
var eeven = storeNum%2
if(storeNum>0){
    if(eeven===0){
        alert(" It is a Even Number")
    }
}

var storeMarks = prompt("Enter marks ")
var e = confirm("Do you have extra credit? click Ok for yes, cancel for No ")
if(storeMarks>=50){
if (e===true){
    alert("You have passed ")
}
}


// chap 15 

var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
alert(fruits)
var numbers = [10, 20, 30, 40, 50];
alert("First Element: " + " " + numbers[0] + " " +  "Last Element: " + " " + numbers[4])
var  colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
alert(colors);  


// chap 16

var fruit = ["Apple", "Banana", "Mango"];
alert(fruit)
fruit.push("Orange");
alert(fruit)

fruit.pop()
alert(fruit)

fruit.unshift("Pineapple")
fruit.shift()
alert(fruit)


// chap 17

var aA=["Ali"," Noman ", "Shahzaib", "Rayyan"]
alert(aA)
aA[1]="Soban Ahmed"
alert(aA)

aA.splice(2,1)
alert(aA)

aA.slice(0,1)
alert(aA)


// chap 18

for(let i =1; i<=5; ++i){
    alert(i)
}

var arra =["A","B", "C", "D","E","F"]
for(let i =arra; i=arra.length; ++i){
    alert(i)
}



// chap 19

// chap 20



// chap 21

var string = "You have to work hard to become a succesful"
string = string.toUpperCase()
alert(string)

var string2 ="YOU HAVE TO WORK HARD TO BECOME A SUCCESFUL"
string = string.toLowerCase()
alert(string)

var string = "you have to work hard to become a succesful"
string = string.charAt(0).toUpperCase() + string.slice(1);
alert(string)

// chap 22

var string = "you have to work hard to become a succesful"
alert(string.length)
 var part = string.slice(0,3)
alert(part)


// chap 23

var sttring = "If you love me then I love you Too"
var find = sttring.charAt(3)
alert(find)

var text = "If you love me then I love you Too"
var lastindex = text.lastIndexOf("o")
alert(lastindex)


var text = "English is a powerful Language"
var subtext = "power"
if(text.includes(subtext)){
    alert("Substring found!")
}else{
        alert("Substring not  found!")
}


// chap 24


var sstring = "Abdul- sattar Edhi is the greatest man"
var character = sstring.charAt(2)
alert(character)
var laast = sstring.charAt(sstring.length-1)
alert(laast)

var teext = " Hello"
var middle = Math.floor(teext.length / 2)
var aaa = teext.charAt(middle)
alert(aaa)


// chap 25

var sting = "He is beautiful"
alert(sting)
var replace = sting.replace("He", "She")
alert(replace)

var replac = replace.replaceAll("a","@")
alert(replac)

var repla = replac.replace("She","Ayesha")
alert(repla)




