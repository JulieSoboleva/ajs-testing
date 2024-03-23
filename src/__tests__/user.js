import loadUser from '../loadUser';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => { // перед каждым тестом (ещё есть afterEach, beforeAll, afterAll)
  jest.resetAllMocks(); // сброс всех mocks
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/user/1');
});
