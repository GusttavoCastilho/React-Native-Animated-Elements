import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#B2BBCE',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.grayDark,
  },
  content: {
    paddingBottom: 20,
  },
  textContent: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    lineHeight: 22,
  },
});
