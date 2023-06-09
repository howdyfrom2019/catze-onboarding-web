import useTodoList from '@/states/hooks/useTodoList';
import React, { useCallback } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface CardProps {
  id: string;
  contents: string;
  createdAt?: string;
  isDone: boolean;
}

const Card = ({ id, contents, createdAt, isDone }: CardProps) => {
  const [_, dispatch] = useTodoList();

  const onHandleDoneCheck = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDone) return;

    dispatch({ type: 'COMPLETE', id });
  }, [dispatch]);

  return (
    <div className={'flex justify-between items-center rounded-md border-gray2 border-[1px] w-full overflow-hidden'}>
      <div className={clsx('flex flex-col flex-1 gap-2 p-2', isDone ? 'bg-green1' : 'bg-white')}>
        <span className={'font-bold-16 text-black font-sans'}>{contents}</span>
        <span className={'font-bold-12 text-textGray font-sans'}>{createdAt}</span>
      </div>
      <button className={'flex items-center justify-center h-full w-[44px] bg-white'} onClick={onHandleDoneCheck}>
        <Image src={isDone ? './icons/check-circle-checked.svg' : './icons/check-circle.svg'}  alt={'icon_check'} width={'24'} height={'24'} />
      </button>
    </div>
  )
}

export default React.memo(Card);
