// This function encapsulates obsure domain
// logic. At this point, it is unclear why
// it does what it does. But there are numerous
// test asserting its correctness. It is the core
// part of our business.
let logic = (a, b) => {
	return a + b;
};

module.exports = logic;