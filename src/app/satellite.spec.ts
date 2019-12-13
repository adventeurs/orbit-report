import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite('name', 'string', 'launchdate', 'string', true)).toBeTruthy();
  });
});
