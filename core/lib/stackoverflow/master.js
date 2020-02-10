import StackOverflowParser from './parsing.js';

import Stack10 from './stack10.js';

export default {
    name: "StackOverflow",
    baseUrlMatch: StackOverflowParser.isStackOverflow,
    clients: {
        Stack10
    }
};