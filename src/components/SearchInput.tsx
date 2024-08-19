import { Input } from 'antd';
import { getCoffeeList, setParams, useCoffeeStore } from '../model/coffeeStore';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';
import { useUrlStorage } from '../helpers/useUrlStorage';

export const SearchInput = () => {
  const [params] = useCoffeeStore(useShallow((state) => [state.params]));

  useEffect(() => {
    getCoffeeList(params);
  }, []);

  useUrlStorage(params, setParams);

  return (
    <Input
      value={params.text}
      placeholder='поиск'
      onChange={(e) => setParams({ text: e.target.value })}
    />
  );
};
