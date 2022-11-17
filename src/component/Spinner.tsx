import {ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/color';

const Spinner = () => {
  return (
    <>
      <ActivityIndicator size={'large'} color={COLORS.appColor} />
    </>
  );
};

export default Spinner;
