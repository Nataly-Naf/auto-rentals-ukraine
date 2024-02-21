import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { Input } from '@chakra-ui/react'
import { Wrapper } from './FilterForm.styled';


export const FilterForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value, dispatch]);

  const savedFilter = useSelector(selectFilter);

  return (
    <Wrapper>
      <p>Find contact by name</p>
      <Input
        onChange={event => {
          setValue(event.target.value);
        }}
        type="text"
        placeholder="Find by name"
        value={savedFilter}
      />
    </Wrapper>
  );
};
