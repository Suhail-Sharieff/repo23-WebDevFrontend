







const Oldobj = {
    fullname: "suhail",

    marks: 99.99,
    printmark: function () {
        console.log("marks: ", this.marks);

    }
}

//every object has some prototype
//syntax:
//newOjectinWhichWewantCharactersOfoldObject__proto__=oldObjectName;
//ex:

const karan = {
    grade: 10
}
karan.__proto__ = Oldobj
//now laran inheruts oldObj



//class
class emp {
    //constructor
    constructor(params) {
        this.someVal = params;
        
    }



    //method
    emp(grade,marks) {
        this.grade=grade, this.marks=marks
    }

    //method
    func() {
        console.log("this is a func");
    }



}


let suhail =new emp;
let suhail2 =new emp();
suhail.func()
let varun=new emp;
varun.emp()


//inheritance
class parent{
   fun(){
    console.log("this is parent");
   }
}
class child extends parent{
    //update fun() in parent
    fun(){
        console.log("this is child");
    }

    //but when there is one constructor in parent and one in child and u want to invike the one in child use super() inside constructor of child
    //use:
}