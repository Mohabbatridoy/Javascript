var inp = parseInt(prompt("Please Enter input: "));
sum = 0;
series = "";


for (var i=1; i<=inp; i++){
    sum = sum + i**2;
    series += (i**2).toString();
    if (i==inp) {continue;}
    series +=" + ";
   

}

if (i>inp){
    series += " + ..... + n"
}
console.log(`${series} = ${sum}`)


