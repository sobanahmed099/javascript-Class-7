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


































































