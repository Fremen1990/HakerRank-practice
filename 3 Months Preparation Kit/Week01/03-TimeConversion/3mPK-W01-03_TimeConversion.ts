//https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function timeConversion(s: string) {
  const isAM = s.slice(-2);
  const timeHour = s.slice(0, 2);
  const timeRest = s.slice(2, 8);

  if (isAM === "AM") {
    if (Number(timeHour) === 12) {
      console.info(`00${timeRest}`);
      return `00${timeRest}`;
    }
    console.info(`00${timeRest}`);
    return `${timeHour}${timeRest}`;
  } else if (isAM === "PM") {
    if (Number(timeHour) === 12) {
      console.info(`12${timeRest}`);
      return `12${timeRest}`;
    }

    const militaryTime = Number(timeHour) + 12;
    if (militaryTime === 24) {
      console.info(`00${timeRest}`);
      return `00${timeRest}`;
    } else {
      console.info(`${String(militaryTime)}${timeRest}`);
      return `${String(militaryTime)}${timeRest}`;
    }
  }
}

const inputTime = "07:05:45PM";
timeConversion(inputTime);
