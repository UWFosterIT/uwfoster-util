/* global expect, uwutil */
import './setup';

describe('createNestedFromArray', () => {
  it('should convert an array to a nested object', () => {
    let obj = uwutil.objectBuild.createNestedFromArray(['one', 'two', 'three']);
    expect(obj).to.eql({one: {two: {three: {}}}});
  });

  it('should convert an array to a nested object with specified ending element', () => {
    let obj = uwutil.objectBuild.createNestedFromArray(['one', 'two', 'three'], {start: 0});
    expect(obj).to.eql({one: {two: {three: {start: 0}}}});
  });
});