import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/autosSlice';
// import { selectFilter } from 'redux/selectors';
import {
  Wrapper,
  WrapperBrand,
  WrapperPrice,
  WrapperMileage,
} from './FilterForm.styled';
import DropdownFilter from 'components/DropDownFilter/DropDownFilter';
import { DropdownPriceFilter } from 'components/DropDownPriceFilter/DropDownPriceFilter';
import { MileageRangeInput } from 'components/MileageFilter/MileageFilter';

export const FilterForm = () => {
  const [value, setValue] = useState('');
  console.log(setValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value, dispatch]);

  // const savedFilter = useSelector(selectFilter);

  return (
    <Wrapper>
      <WrapperBrand>
        <p>Find brand</p>
        <DropdownFilter />;
      </WrapperBrand>
      <WrapperPrice>
        <p>Price/1 hour</p>
        <DropdownPriceFilter />
      </WrapperPrice>
      <WrapperMileage>
        <p>Car mileage/km</p>
        <MileageRangeInput />
      </WrapperMileage>
      <button>Search</button>
    </Wrapper>
  );
};
