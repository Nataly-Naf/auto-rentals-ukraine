import { useSelector } from 'react-redux';
import { selectAutos } from 'redux/selectors';
import { AutoCard } from 'components/AutoCard/AutoCard';
import { AutoList } from './AutoCardList.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
// import { selectFilteredContacts } from 'redux/selectors';

export const AutosList = () => {
  const autos = useSelector(selectAutos);
  console.log(autos);

  return (
    <>
      <AutoList>
        {autos.map(auto => {
          return <AutoCard onCard={auto} />;
        })}
      </AutoList>
      <LoadMoreButton />
    </>
  );
};
