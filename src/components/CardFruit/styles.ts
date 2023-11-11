import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: 154,
    height: 154,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.black,
  },
  category: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.grayDark,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 4,
  },
  divider: {
    width: '50%',
    height: 1,
    backgroundColor: theme.colors.grayLight,
    marginBottom: 7,
  },
});
