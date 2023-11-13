import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const IMAGE_HEIGHT = Dimensions.get('window').height * 0.4;

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonCanGoBack: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: IMAGE_HEIGHT,
    alignSelf: 'center',
  },
});
