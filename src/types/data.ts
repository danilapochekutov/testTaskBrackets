import { ReactNode } from 'react';

interface IItem {
  id: number,
  finishTime: number,
}
interface IEndings {
  forOne: string,
  forTwo: string,
  forFive: string,
}
interface IItemProps {
  item: IItem,
  index: number,
  handleDelete: (id: number) => void,
}
interface IResultProps {
  correctCount: number,
  falseCount: number,
}
interface IInputGroupProps {
  handleSubmit: (testString: string) => void,
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>,
}
interface ITaskTextProps {
  children: ReactNode,
  header: string,
}

export type {
  IItem,
  IEndings,
  IItemProps,
  IResultProps,
  IInputGroupProps,
  ITaskTextProps,
};
