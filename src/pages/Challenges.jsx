import React from 'react';
import TrafficLights from '../challenges/traffic-lights/App';
import GridLights from '../challenges/grid-lights/App';
import Stopwatch from '../challenges/stopwatch/App';
import MatchPair from '../challenges/match-pair/App';
import InfiniteScroll from '../challenges/Infinite-scroll/App';
import Accordion from '../challenges/accordion/App';
import Counter from '../challenges/counter/App';
import { useParams } from 'react-router-dom';

const reactChallengesMap = {
  'traffic-lights': <TrafficLights />,
  'grid-lights': <GridLights />,
  stopwatch: <Stopwatch />,
  'match-pair': <MatchPair />,
  'infinite-scroll': <InfiniteScroll />,
  accordion: <Accordion />,
  counter: <Counter />,
};
const Challenges = () => {
  const params = useParams();
  const id = params?.id ?? '';
  return <div className='container'>{reactChallengesMap[id]}</div>;
};

export default Challenges;
