function countingMonkeys (n) {


  var result = []

  for (var i = 0; i <= n; i++){
    result.push(i)
  }

  return result.slice(1, result.length)

}

g

module.exports = countingMonkeys;
