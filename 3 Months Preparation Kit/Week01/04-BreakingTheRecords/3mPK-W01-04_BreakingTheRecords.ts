function breakingRecords(scores: number[]): string {
  let maxScore = scores[0];
  let minScore = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let score of scores) {
    if (score > maxScore) {
      maxScore = score;
      maxCount++;
    } else if (score < minScore) {
      minScore = score;
      minCount++;
    }
  }
  console.info(`${maxCount} ${minCount}`);
  return `${maxCount} ${minCount}`;
}

const testScores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const testExpectation = "2 4";

breakingRecords(testScores);
