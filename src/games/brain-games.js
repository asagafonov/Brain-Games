#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greetUser, askForName, sayHello, explainRules} from '../index.js';

greetUser;
sayHello(askForName);
explainRules();
