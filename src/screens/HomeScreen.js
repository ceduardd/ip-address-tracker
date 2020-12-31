import React, { useEffect } from 'react';
import MapView from '../components/map/MapView';
import Loader from '../components/ui/Loader';
import TrackerInfo from '../components/ui/TrackerInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDefaultData } from '../actions/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const hostData = useSelector(state => state.hostData);
  const { loading: loadingHost, host } = hostData;

  const coordData = useSelector(state => state.coordData);
  const { loading: loadingCoord, coord } = coordData;

  const searchData = useSelector(state => state.searchData);
  const { loading } = searchData;

  useEffect(() => {
    if (!host || !coord) {
      dispatch(fetchDefaultData());
    }
  }, [dispatch, host, coord]);

  return loadingHost || loadingCoord ? (
    <div className="loader">
      <Loader />
    </div>
  ) : (
    <>
      <TrackerInfo loading={loading} host={host} />
      <MapView loading={loading} coord={coord} />
    </>
  );
};

export default HomeScreen;
