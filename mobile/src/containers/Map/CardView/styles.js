import * as d from '../../../utilities/Tranform';

const styles = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
  },
  blankView: {
    backgroundColor: 'transparent',
    width: 30,
  },
  greenCircleStyle: {
    top: 80 * d.ratioH,
    left: 10 * d.ratioW,
  },
  restaurantPhotoContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5,
  },
  restaurantPhotoStyle: {
    height: 100 * d.ratioH,
    width: 190 * d.ratioW,
  },
  ratingTextStyle: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  restaurantDetailContainer: {
    marginHorizontal: 15 * d.ratioW,
    marginVertical: 12 * d.ratioH,
  },
  restaurantNameStyle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'rgba(82,82,82,1)',
    paddingBottom: 5 * d.ratioH,
    width: 150 * d.ratioW,
  },
};

export default styles;
