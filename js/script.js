let person = {
    first_name: 'Mohabbat',
    last_name: 'Ridoy',
    Id: '213-15-4508',

    Fullname : function(){
        return `${this.first_name} ${this.last_name}`
    }

}

console.log(person.Fullname())