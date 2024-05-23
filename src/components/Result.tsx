import { Card } from "antd";
import { IResultProps } from "../types/data";
import { getRusEnding } from "../utils/utils";

const Result: React.FC<IResultProps> = (props) => {
  const {correctCount, falseCount} = props;

  return (
    <Card title='Результат:' style={{ width: 300, margin: 'auto' }}>
      { correctCount === 0 && falseCount === 0
        ? <p>В строке нет скобок</p>
        : <>
          <p>
            Правильно: {correctCount} скоб{getRusEnding(correctCount)({forOne: 'ка', forTwo: 'ки', forFive: 'ок'})}
          </p>
          <p>
            Неправильно: {falseCount} скоб{getRusEnding(falseCount)({forOne: 'ка', forTwo: 'ки', forFive: 'ок'})}
          </p>
        </> }
    </Card>
  );
}

export default Result;