function sortPeople(names, heights) {
    if (names.length != heights.length) return;
    let map = new Map();
    let ans = []
    
    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i]);
    }
    let sort = heights.sort((a, b) => b - a)

    for (let i = 0; i < sort.length; i++) {
        ans.push(map.get(sort[i]))
    }

    return ans;

}
sortPeople(["Alice", "Bob", "Charlie"], [165, 180, 170])

// ["Bob","Charlie","Alice"]