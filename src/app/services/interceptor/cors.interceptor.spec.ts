import { Cors } from './cors.interceptor';

describe('Cors.Interceptor', () => {
  it('should create an instance', () => {
    expect(new Cors()).toBeTruthy();
  });
});
