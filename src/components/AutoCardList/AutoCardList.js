import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { AutoCard } from 'components/AutoCard/AutoCard';
import { AutoList } from './AutoCardList.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
// import { selectFilteredContacts } from 'redux/selectors';

export const AutosList = () => {
  const dispatch = useDispatch();

  // const filteredContacts = savedContacts.filter(
  // ({ name }) => name.toLowerCase().includes(savedFilter.toLowerCase())
  // )
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  return (
    <>
      <AutoList>
        {contacts.map(contact => {
          return <AutoCard onCard={contact} />;
        })}
      </AutoList>
      <LoadMoreButton />
    </>
  );
};
