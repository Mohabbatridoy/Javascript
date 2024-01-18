let person = {
    first_name : "Mohabbat",
    last_name : "Maria",

    full_name : function(){
        return `${this.first_name} Love ${this.last_name}`
    }
}

console.log(person.full_name())