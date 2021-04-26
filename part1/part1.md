## Part 1a
1) Line 9 would print "values added: 20", since add is true, the first conitional would run, which just adds num1 and num2 and logs teh result, and 10+10 = 20, so 20 gets printed
2) Line 13 would print "final result: 20", since after the if conditional ran, it would go straight to line 13, where result still is 20 from the previous conditional, so this line would also log 20. Rsult is a var, so once it was defined, it can be called anywhere after that. 
3) Line 9 would print "values added: 20", since add is true, the first conitional would run, which just adds num1 and num2 and logs teh result, and 10+10 = 20, so 20 gets printed
4) Line 13 wouldn't print anything, since tehre would be an error since result isn't defined on line 13. Since result was declared using "let", that means "result"'s scope is only within the conditional it was defined it, so result doesn't exist on line 13, so we get a ReferenceError.
5) Line 9 wouldn't print anything, since tehre would be an error. When the first conditional gets ran, result is a constant set to 0. Since result is a constant, it cannot be reassigned, but it gets reassigned to num1+num2, so we get a TypeError.
6) Line 13 wouldn't print anything either, fort the same reason why line 9 didn't print, because there is a TypeError, since constant variables can't be reassigned.

## Part 1b
1) Line 12 would print "3", since the for loop stops looping once i is equl to 3, since 3 would no longer be less than the length of prices, which is 3, so on line 12, since i is a var, i still is 3, so 3 gets printed
2) Line 12 would print "150", since discountedPrice always represents the discountedPrice of the 'i'th index. The last index discounted was index 3, where the price was 300, and the discount was 50%, so the discountedPrice is 150.
3) Line 12 would print "150", since finalPrice represents the final price of the last discounted item. So 150 was the last discounted item, and 150*100 = 1500, doesn't need to be rounded. 1500/100 = 150, so finalPrice is 150.
4) The function will return "[50, 100, 150]", since a 50% discount on 100, 200, and 300 would be those prices respectively, and the discounted array represents all the discounted prices from the origonal prices list.
5) There would be a ReferenceError on line 9, since i was defined using let, the score of i is only within the for loop, so on line 12, i is not defined, so we get an error
6) We again get a ReferenceError, sicne discountedPrice was difined in the for loop using let, the scope of the variable is only within the loop, so outside teh loop, it is not defined adn we get an error.
7) Line 14 would print "150", since finalPrice represents the final price of the last discounted item. So 150 was the last discounted item, and 150*100 = 1500, doesn't need to be rounded. 1500/100 = 150, so finalPrice is 150. finalPrice was declared using let, but line 14 is still within the scope of the variable, since finalPrices was defined on line 4, inside the function, and line 14 is still jsut in the function.
8) The function will return "[50, 100, 150]", since a 50% discount on 100, 200, and 300 would be those prices respectively, and the discounted array represents all the discounted prices from the origonal prices list. discounted was defined using let, but like 16 is still within the scope of the variable, so no errors.
9) There would be a ReferenceError on line 11, since i was defined using let, the score of i is only within the for loop, so on line 12, i is not defined, so we get an error
10) Line 12 would print "3", since length is a constant that was set to the length of prices, and since teh length of prices is 3, this would also log 3.
11) The function will return "[50, 100, 150]", since a 50% discount on 100, 200, and 300 would be those prices respectively, and the discounted array represents all the discounted prices from the origonal prices list. discounted was defined using const, and since we never redifined what discounted was, there are no errors.
12) a) student.name<br />
    b) student['Grad Year']<br />
    c) student.greeting()<br />
    d) student['Favorite Teacher'].name<br />
    e) student.courseLoad[1]<br />
13) a) 32, since the string 3 plus the integer 2 just casts the 2 as a string, so it adds teh string 3 to the string 2, which is the string 32.<br />
    b) 1, the string 3 is converted to a number, so 3 - 2  is 1.<br />
    c) 3, null becomes 0 by the numebric conversion rules, so 3 + 0 is 3<br />
    d) 3null null becomes "null" by string conversion rules, so '3' + 'null' is 3null<br />
    e) 4, true becomes 1 my numberic conversion rules, sop 3 + 1 is 4<br />
    f) 0, false becomes 0, and null becomes 0, but numeric conversion rules, so 0 + 0 is 0<br />
    g) 3undefined, since undefined becomes 'undefined' by string conversion rules, so '3' + 'undefined' is 3undefined<br />
    h) NaN, since undefined becomes NaN by numerica conversion, so 3 - NaN is NaN<br />
14) a) true, since '2' becomes the numeric 2, and 2 > 1 is true<br />
    b) false, the string '12' comes before '2' lexographically, so this is a false statement<br />
    c) true, '2' becomes the number 2, and 2 == 2 is true<br />
    d) false, without type conversion, the number 2 is not equal to the string '2', so false<br />
    e) false, since true becomes 1, and 1 == 2 is a false statement<br />
    f) true, Boolean(2) evaluates to true, since is itsn't 0, and true == true is a true statement<br />
15) == compares while ignoring the datatypes of the two variables, whereas === compares, but also compares to make sure the datatypes are the same<br />

17) The modifyArray function will return the newArr = [2, 4, 6], since the function itterates through the origonal array, and just called the doSomething function, which returns the origonalnumber *2, so every number will be multiplies by 2 in the array.<br />
19) This will print 1 4 3 2, line by line. This is because 1 and 4 are printed first, since there is no time delay at all, then 3 gets printed, since the time delay is 0, and finally 2 gets printed, since its delay is 1000, which is the largest
