#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  generateRandomEquation as generateEquation,
  solveEquation as findSolution,
} from '../index.js';

launchBrainGame();
