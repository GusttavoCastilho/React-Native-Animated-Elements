import {ImageSourcePropType} from 'react-native';

export type Product = {
  id: string;
  title: string;
  category: string;
  image: ImageSourcePropType;
};
