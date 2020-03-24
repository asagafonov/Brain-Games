#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  generateNumber as generateEquation,
  isEven as findSolution,
} from '../index.js';

launchBrainGame();
