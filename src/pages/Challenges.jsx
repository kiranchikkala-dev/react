import React from 'react';
import TrafficLights from '../challenges/traffic-lights/App';
import GridLights from '../challenges/grid-lights/App';
import Stopwatch from '../challenges/stopwatch/App';
import MatchPair from '../challenges/match-pair/App';
import InfiniteScroll from '../challenges/Infinite-scroll/App';
import Accordion from '../challenges/accordion/App';
import Counter from '../challenges/counter/App';
import TicTaktoe from '../challenges/tictactoe/App';
import Toast from '../challenges/toast/App';
import AdvancedCounter from '../challenges/advanced-counter/App';
import StepperComp from '../challenges/stepper/App';
import TodoList from '../challenges/todo-list/App';
import MultiStep from '../challenges/𝗺𝘂𝗹𝘁𝗶-𝘀𝘁𝗲𝗽-𝘄𝗶𝘇𝗮𝗿𝗱/App';
import { useParams } from 'react-router-dom';

const reactChallengesMap = {
  'traffic-lights': <TrafficLights />,
  'grid-lights': <GridLights />,
  stopwatch: <Stopwatch />,
  'match-pair': <MatchPair />,
  'infinite-scroll': <InfiniteScroll />,
  accordion: <Accordion />,
  counter: <Counter />,
  tictactoe: <TicTaktoe />,
  toast: <Toast />,
  'advanced-counter': <AdvancedCounter />,
  stepper: <StepperComp />,
  'todo-list': <TodoList />,
  'multi-step-wizard': <MultiStep />,
};
const Challenges = () => {
  const params = useParams();
  const id = params?.id ?? '';
  return <div className='container'>{reactChallengesMap[id]}</div>;
};

export default Challenges;
