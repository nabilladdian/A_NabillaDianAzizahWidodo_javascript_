function myFirst(){
    MyDisplayer("Good bye");
}

function mySecond(){
    myDisplayer("hello");
}

function myDisplayer(message) {
    console.log(message);
}

mySecond(myFirst);