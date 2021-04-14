export const util = {
  getKeyOfObject: (o: object) => Object.keys(o)[0],
  getValueOfObject: (o: object) => Object.values(o)[0],
  getKeyAndValueOfObject: (o: object): [any, any] => [util.getKeyOfObject(o), util.getValueOfObject(o)],
};
