import { useState } from 'react';
import { Divider, Empty } from 'antd';
import { checkBrackets } from '../utils/utils';
import InputGroup from './InputGroup';
import TaskTextCollapse from './TaskTextCollapse';
import Result from './Result';

const BracketsTaskContainer: React.FC = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [falseCount, setFalseCount] = useState<number>(0);

  const handleCheck = (testString: string): void => {
    const res = checkBrackets(testString);
    setCorrectCount(res.correctCount);
    setFalseCount(res.falseCount);
    setShowResult(true);
  }

  return (
    <>
      <TaskTextCollapse header='Условие задачи #1'>
        <p>
          Дана строка, содержащая скобки трёх видов (круглые, квадратные и фигурные) и любые другие символы. Посчитайте сколько скобок расставлено корректно а сколько нет.
        </p>
        <p>
          Например, в строке ([]&#123;&#125;)[] скобки расставлены корректно, а в строке ([]] — нет. В первом случае правильно расставлено 8 скобок. Во втором случае указаны 2 скобки правильно, и 2 не правильно.
        </p>
      </TaskTextCollapse>
      <Divider orientation='center'>Проверка расстановки скобок в строке</Divider>
      <InputGroup handleSubmit={handleCheck} setShowResult={setShowResult} />
      <br />
      { showResult
        ? <Result correctCount={correctCount} falseCount={falseCount}/>
        : <Empty />
      }
    </>
  );
}

export default BracketsTaskContainer;