// let isbn = "0306406152";

// let ISBN = Number(isbn)
// console.log(typeof(ISBN));

let n = 12345;
   let reversed = 0;
   while (n > 0) {
      reversed = (reversed * 10) + (n % 10);
      n = Math.floor(n / 10);
   }
   console.log(reversed);


