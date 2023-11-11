import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperHeader: {
    backgroundColor: theme.colors.primary,
    height: 250,
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextUser: {
    fontSize: 22,
    color: theme.colors.white,
    fontWeight: '600',
    fontFamily: theme.fonts.semiBold,
  },
  wrapperIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerTextShop: {
    fontSize: 50,
    color: theme.colors.white,
    fontWeight: '300',
    paddingTop: 20,
    fontFamily: theme.fonts.regular,
  },
  headerTextCategory: {
    fontSize: 50,
    color: theme.colors.white,
    fontWeight: '900',
    fontFamily: theme.fonts.extraBold,
  },
  fruitsList: {
    paddingVertical: 40,
    gap: 10,
  },
});
