import { IEndings } from "../types/data";

function getRandomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseTime(time: number) {
  const seconds = Math.floor((time / 1000) % 60);
  return seconds;
}

function getRusEnding(number: number) {
  return function chooseEnding (endings: IEndings) {
    if(number >= 11 && number <= 14) {
      return endings.forFive;
    }
    else if(number % 10 === 1) {
      return endings.forOne;
    }
    else if(number % 10 >= 2 && number % 10 <= 4) {
      return endings.forTwo;
    }
    else {
      return endings.forFive
    }
  }
}

function checkBrackets(testString: string) {
  const roundStack: string[] = [];
  const squareStack: string[] = [];
  const curvedStack: string[] = [];
  let correctCount = 0;
  let falseCount = 0;
  for(const symbol of testString) {
    switch (symbol) {
      case '(':
        roundStack.push(symbol);
        break;
      case '[':
        squareStack.push(symbol);
        break;
      case '{':
        curvedStack.push(symbol);
        break;
      case ')':
        roundStack.pop()
        ? correctCount +=2
        : falseCount += 1
        break;
      case ']':
        squareStack.pop()
        ? correctCount +=2
        : falseCount += 1
        break;
      case '}':
        curvedStack.pop()
        ? correctCount +=2
        : falseCount += 1
        break;
      default:
        break;
    }
  }
  falseCount = falseCount + roundStack.length + squareStack.length + curvedStack.length;
  return {correctCount, falseCount};
}

export {
  getRandomIntFromInterval,
  getRusEnding,
  checkBrackets,
  parseTime,
}