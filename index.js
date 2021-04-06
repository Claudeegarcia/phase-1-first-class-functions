function receivesAFunction(callback) {
callback ()
}

function returnsANamedFunction(){
    return function name(){
        console.log ('returns a named function');
    }
}

//Anonymous function expressions that were created using the keyword function or arrow functions would have "" (an empty string) as their name.
//(function() {}).name; // ""
//(() => {}).name; // ""

function returnsAnAnonymousFunction(){
    return () => {}
}

//ask teacher more about 'foo' cause I don't get it.... 