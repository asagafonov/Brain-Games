#!/usr/bin/env node
import {
  greetUser, askForName, sayHello,
} from '../index.js';

import explainRules from '../games/brain-games-module.js';

greetUser;
sayHello(askForName);
explainRules();
