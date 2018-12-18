import { sampleArray } from '../../src/samplers/array';

describe('sampleArray', () => {
  var res;

  it('should return empty array by default', () => {
    res = sampleArray({});
    expect(res).to.deep.equal([]);
  });

  it('should return elements of correct type', () => {
    res = sampleArray({items: {type: 'number'}});
    expect(res).to.deep.equal([0]);
  });

  it('should return correct number of elements based on minItems', () => {
    res = sampleArray({items: {type: 'number'}, minItems: 3});
    expect(res).to.deep.equal([0, 0, 0]);
  });

  it('should correcly sample tuples', () => {
    res = sampleArray({items: [{type: 'number'}, {type: 'string'}, {}]});
    expect(res).to.deep.equal([0, 'string', null]);
  });
});
