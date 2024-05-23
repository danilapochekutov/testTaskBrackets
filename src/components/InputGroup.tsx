import { useState } from 'react';
import { Button, Input, Tooltip } from 'antd';
import { IInputGroupProps } from '../types/data';

const InputGroup: React.FC<IInputGroupProps> = (props) => {
  const { handleSubmit, setShowResult } = props;
  const [stringValue, setStringValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStringValue(e.target.value);
    setShowResult(false);
    setError('');
  }

  function handleClick() {
    if(stringValue.length === 0) {
      return setError('строка не может быть пустой');
    }
    handleSubmit(stringValue);
  }

  return (
    <Tooltip
      title={error}
      color={'red'}
      open={!!error}
      placement='bottom'>
      <Input.Group compact >
        <Input
          style={{ width: 'calc(100% - 112px)' }}
          value={stringValue}
          onChange={handleInputChange}
          type='text'
          size='large'
          placeholder='введите строку'
          status={error && 'error'}
          allowClear
        />
        <Button
          type='primary'
          size='large'
          onClick={handleClick}
          style={{
            borderRadius: 0,
            borderStartEndRadius: '6px',
            borderEndEndRadius: '6px',
          }}>
            Проверить
        </Button>
      </Input.Group>
    </Tooltip>
  );
}

export default InputGroup;