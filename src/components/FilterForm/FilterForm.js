import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { Input } from '@chakra-ui/react';
import {
  Wrapper,
  WrapperBrand,
  WrapperPrice,
  WrapperMileage,
  WrapperMileageinput,
} from './FilterForm.styled';
import DropdownFilter from 'components/DropDownFilter/DropDownFilter';

export const FilterForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value, dispatch]);

  const savedFilter = useSelector(selectFilter);

  return (
    <Wrapper>
      <WrapperBrand>
        <p>Find brand</p>
        <DropdownFilter />;
      </WrapperBrand>
      <WrapperPrice>
        <p>Price/1 hour</p>
        <Input
          onChange={event => {
            setValue(event.target.value);
          }}
          type="text"
          placeholder="To $"
          value={savedFilter}
        />
      </WrapperPrice>
      <WrapperMileage>
        <p>Car mileage/km</p>
        <WrapperMileageinput>
          <Input
            onChange={event => {
              setValue(event.target.value);
            }}
            type="text"
            placeholder="From"
            value={savedFilter}
          />
          <Input
            onChange={event => {
              setValue(event.target.value);
            }}
            type="text"
            placeholder="To"
            value={savedFilter}
          />
        </WrapperMileageinput>
      </WrapperMileage>
      <button>Search</button>
    </Wrapper>
  );
};
