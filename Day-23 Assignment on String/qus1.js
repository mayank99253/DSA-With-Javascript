// helper.js (template)
function countAsterisks(s) {
  let inside = false;
  let count = 0 ;
  let i = 0;
  while(i<s.length){
    if(s.charCodeAt(i) === 124){
      inside = !inside
    }
    if(s.charCodeAt(i) === 42 && inside === false){
      count++
    }
    i++
  }

  return count
}

countAsterisks("*|*|*|*|*|*|*|*")
