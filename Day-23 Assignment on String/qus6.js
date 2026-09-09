class Solution {
  checkDistances(s, distance) {

    for (let i = 0; i < s.length; i++) {

        let first = -1;
        let second = -1;

        // First occurrence find karo
        for (let j = 0; j < s.length; j++) {
            if (s[j] === s[i]) {
                first = j;
                break;
            }
        }

        // Second occurrence find karo
        for (let j = first + 1; j < s.length; j++) {
            if (s[j] === s[i]) {
                second = j;
                break;
            }
        }

        // Beech ke letters count karo
        let count = second - first - 1;

        // Distance array se compare karo
        let index = s.charCodeAt(i) - 97;

        if (count !== distance[index]) {
            return false;
        }

    }

    return true;
  }
}
