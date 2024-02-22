import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutos } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { FilterForm } from 'components/FilterForm/FilterForm';

import { AutosList } from 'components/AutoCardList/AutoCardList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAutos());
  }, [dispatch]);

  return (
    <div>
      {/* <UserMenu />
      <NameForm />
       */}
      <FilterForm />
      {isLoading && !error && <b>Loading in progress...</b>}
      <AutosList />
    </div>
  );
}
