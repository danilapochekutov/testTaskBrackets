import { useEffect } from 'react';
import { Typography } from 'antd';
import { getRusEnding } from '../utils/utils';
import { IItemProps } from '../types/data';
import useTimer from '../hooks/useTimer';

const Item: React.FC<IItemProps> = (props) => {
  const {item, index, handleDelete} = props;

  const secondsLeft = useTimer(item.finishTime);

  useEffect(() => {
    if(secondsLeft <= 0) {
      handleDelete(item.id);
    }
  }, [secondsLeft, handleDelete, item]);

  return (
    <Typography.Text>
      {`${index}. Исчезнет через ${secondsLeft} секунд${getRusEnding(secondsLeft)({forOne: 'у', forTwo: 'ы', forFive: ''})}`}
    </Typography.Text>
  );
}

export default Item;
