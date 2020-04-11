import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('original.csv')
reader.read();

let manWins = 0

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manWins++
  }
}

console.log(manWins)