import { lazy } from 'react';
import Loadable from '../AutoBatching/Loadable';

import Education from './Education';
import WhatDo from './WhatDo';
import Footer from './Footer';
import HowDo from './HowDo';
import Intrest from './Intrest';
import SpeedDialTooltipLeftOpen from './SpeedDialTooltipLeftOpen';
import ContacSpeedDialTooltipRightOpent from './SpeedDialTooltipRightOpen';
import CarouselTech from './CarouselTech';

const NavBar = Loadable(lazy(() => import('./NavBar')));
const Home = Loadable(lazy(() => import('./Home')));
const About = Loadable(lazy(() => import('./About')));
const WorkExperiance = Loadable(lazy(() => import('./WorkExperiance')));
const Skills = Loadable(lazy(() => import('./Skills')));
const Work = Loadable(lazy(() => import('./Work')));
const Thech = Loadable(lazy(() => import('./Thech')));
const Contact = Loadable(lazy(() => import('./Contact')));


export {
  NavBar,
  Home,
  About,
  Contact,
  Work,
  Thech,
  WhatDo,
  HowDo,
  Education,
  Footer,
  WorkExperiance,
  SpeedDialTooltipLeftOpen,
  ContacSpeedDialTooltipRightOpent,
  Intrest,
  Skills,
  CarouselTech,
}