----- Notes -----

- when you have dotted lines when you insepect element means you that free space
- when element take line-hight it will center what inside it vertically
- when you need to make tow elements side each other witn no space => display: flex;
- font-family: monospace , sans-serif => default in browser
- when you searh api like include "https://"
- go and debug errors 
- when you type return statement a specific line function will stop excution at that line
- e.target => element  , e.target.value => value of element

------- code Explain ------
[1]  align vertically 
width: 40px;
height: 40px;
line-height: 40px;

[2] how to reset a flexed element to block
.parent {
    flex-wrap : wrap ;
}

.element {
  display : block 
}

[3] tow position fixed in the same place

[4] return statment
let x = 4
if (x = 3) {
   console.log("yes");
   return ;  // will not go for else 
}
else {
  console.log("no");
}



