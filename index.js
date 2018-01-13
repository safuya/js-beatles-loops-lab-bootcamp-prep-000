function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}