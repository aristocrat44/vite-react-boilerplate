import React, { FC, useMemo, PropsWithChildren } from 'react';
import Store, { StoreContext } from '../../Store';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useMemo(() => Store.create({}), []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
