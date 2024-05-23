import { Collapse } from 'antd';
import { ITaskTextProps } from '../types/data';

const TaskTextCollapse: React.FC<ITaskTextProps> = (props) => {
  const{header, children} = props;

  return (
    <Collapse >
      <Collapse.Panel header={header} key='1'>
        {children}
      </Collapse.Panel>
    </Collapse>
  );
}

export default TaskTextCollapse;
