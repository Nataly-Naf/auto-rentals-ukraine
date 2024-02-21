import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { NameForm } from 'components/NameForm/NameForm';
import { UserMenu } from 'components/UserMenu/UserMenu';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <UserMenu />
      <NameForm />
      <FilterForm />
      {isLoading && !error && <b>Loading in progress...</b>}
      <ContactsList />
    </div>
  );
};
