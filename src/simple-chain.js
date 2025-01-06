const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(arguments.length !== 0 ? `( ${value} )` : "( )");

    return this;
  },

  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.chain.length
    ) {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);

      return this;
    }
    // remove line with error and write your code here
  },

  reverseChain() {
    this.chain.reverse();

    return this;
    // remove line with error and write your code here
  },

  finishChain() {
    const str = this.chain.join("~~");

    this.chain = [];

    return str;
  },
};

module.exports = {
  chainMaker,
};
