import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const IMAGE_HEIGHT = Dimensions.get('window').height * 0.3;

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
    paddingTop: 30,
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
  content: {
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    paddingTop: 20,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    paddingVertical: 20,
  },
  wrapperButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textDetails: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.black,
    paddingTop: 30,
  },
  details: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.grayDark,
    paddingTop: 6,
    lineHeight: 28,
  },
});
