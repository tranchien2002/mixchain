import * as d from '../../utilities/Tranform';
import { isIphoneX } from '../../utilities/device';

const styles = {
  cardStyle: {
    bottom: 30,
    position: 'absolute',
    alignSelf: 'center',
    width: 315,
  },
  firstViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CB23E',
    borderTopLeftRadius: 2.5,
    borderBottomLeftRadius: 2.5,
    height: 75,
    width: 75,
  },
  secondViewStyle: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 25,
  },
  detailStyle: {
    flexDirection: 'row',
  },
  travelTimeStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distanceStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(153,153,153,1)',
    paddingLeft: 5,
  },
  directStyle: {
    top: 3,
  },
  textStyle: {
    fontSize: 10,
    color: 'rgba(153,153,153,1)',
  },
  circleMarkerStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(63, 175, 40, 0.2)',
  },
  smallMarkerLocation: {
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(63, 175, 40, 0.2)',
  },
  smallCenterMarker: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(63, 175, 40)',
  },
  userMarker: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  largeMarker: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  mediumMarker: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
  },
  smallMarker: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userImageMarker: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
};

export default styles;
