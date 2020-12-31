import axios from 'axios';
import isIP from 'validator/lib/isIP';
import isDomain from 'validator/lib/isFQDN';
import {
  HOST_DATA_REQUEST,
  HOST_DATA_SUCCESS,
  HOST_DATA_FAIL,
} from '../constants/hostConstants';
import {
  COORD_DATA_FAIL,
  COORD_DATA_REQUEST,
  COORD_DATA_SUCCESS,
} from '../constants/coordConstants';
import {
  SEARCH_DATA_FAIL,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
} from '../constants/searchDataConstants';

export const fetchData = address => async dispatch => {
  try {
    let URI;

    if (isIP(address)) {
      //IP
      URI = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${address}`;
    } else if (isDomain(address)) {
      // DOMAIN
      URI = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&domain=${address}`;
    } else {
      throw new Error('Invalid parameter');
    }

    dispatch({ type: SEARCH_DATA_REQUEST });

    const { data } = await axios.get(URI);

    const hostData = {
      ip: data.ip,
      location: data.location.city,
      timezone: data.location.timezone,
      isp: data.isp,
    };

    const coordData = {
      lat: data.location.lat,
      lng: data.location.lng,
    };

    dispatch({
      type: HOST_DATA_SUCCESS,
      payload: hostData,
    });

    dispatch({
      type: COORD_DATA_SUCCESS,
      payload: coordData,
    });

    dispatch({
      type: SEARCH_DATA_SUCCESS,
      payload: {
        hostData,
        coordData,
      },
    });

    localStorage.setItem('hostData', JSON.stringify(hostData));
    localStorage.setItem('coordData', JSON.stringify(coordData));
  } catch (error) {
    dispatch({
      type: SEARCH_DATA_FAIL,
      payload: error.message,
    });
  }
};

export const fetchDefaultData = () => async dispatch => {
  try {
    dispatch({ type: HOST_DATA_REQUEST });
    dispatch({ type: COORD_DATA_REQUEST });

    const { data } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
    );

    const hostData = {
      ip: data.ip,
      location: data.location.city,
      timezone: data.location.timezone,
      isp: data.isp,
    };

    const coordData = {
      lat: data.location.lat,
      lng: data.location.lng,
    };

    dispatch({
      type: HOST_DATA_SUCCESS,
      payload: hostData,
    });

    dispatch({
      type: COORD_DATA_SUCCESS,
      payload: coordData,
    });

    localStorage.setItem('hostData', JSON.stringify(hostData));
    localStorage.setItem('coordData', JSON.stringify(coordData));
  } catch (error) {
    dispatch({
      type: HOST_DATA_FAIL,
      payload: error.message,
    });
    dispatch({
      type: COORD_DATA_FAIL,
      payload: error.message,
    });
  }
};
