// count unique value by use of pointer traversal of sorted array
let arr = [-4, -1, 0, 2, 2, 2, 2, 4, 5, 6, 6, 6];
function uniqo(a) {
  let uni = [];
  let first = 0;
  let second = 1;
  for (let i = 0; i < arr.length; i++) {
    
    if (a[first] != a[second]) {
      uni.push(a[first]);
      first = second;
      second = second + 1;
    } else if (a[first] === a[second]) {
      second += 1;
      
    } else if (second === a.length - 1) {
      uni.push(a[first])
    }

  }
  return uni;
}
//time complexity o(N) ,space complexity o(N)