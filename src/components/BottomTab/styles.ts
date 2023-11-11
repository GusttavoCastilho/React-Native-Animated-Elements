import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 80,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    alignItems: 'center',
    gap: 5,
  },
  itemText: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: '#8891A5',
  },
});
