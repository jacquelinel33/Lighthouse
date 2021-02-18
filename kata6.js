const repeatNumbers = data => data.map(
  ([print, repeatNum]) => String(print).repeat(repeatNum)
    )
      .join(', ');


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


// 1111111111
// 11, 222
// 10101010, 343434343434, 9292


