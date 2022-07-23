try {
    // ReferenceError
    // myFunction();
    // let x=1;
    // type error
    // null.myFunction();
    // syntax error
    // URIerror
    decodeURIComponent('%');
    
} catch(e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
} finally {
    console.log("runs regardless of result");
}

console.log("program continues");