//!..................CLOSURE...............

function counter(){
let number=0;
  return function increaser(){
    number=number+1
    console.log(number);
    
  }
}

 const increase=counter()
 increase()
 increase()
 increase()

 const moreIncrease=counter()
 moreIncrease()
 moreIncrease()
 moreIncrease()
 increase()
 increase()
 increase()

 //!Callback function and pass different functions

  function teacher(tech,stu){
          tech(stu)
  }
  function student(stu1){
    console.log('Hello,',stu1);
    
  }
  teacher(student,'How are you')