function myname(name){
    console.log('My name is ' + name)
}

myname('Anish')


const person = {
    name: 'Anish',
    

    myname: function(){
        console.log('My name is ' + this.name)
    }
}
person.myname()