import React from 'react';
import TrafficLights from '../challenges/traffic-lights/App';
import GridLights from '../challenges/grid-lights/App';
import { useParams } from 'react-router-dom';

const reactChallengesMap = {
  'traffic-lights': <TrafficLights />,
  'grid-lights': <GridLights />,
};
const Challenges = () => {
  const params = useParams();
  const id = params?.id ?? '';
  return <div className='container'>{reactChallengesMap[id]}</div>;
};

export default Challenges;
