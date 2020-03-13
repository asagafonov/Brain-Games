#!/usr/bin/env node
import greet from './greet-user.js';
import brainGames from '../index.js';
import brainEven from './brain-even.js';

const greetUser = () => greet;
greetUser();
brainGames();
brainEven();
