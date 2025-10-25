import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('should return "Hello World!" from getHello()', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
});
