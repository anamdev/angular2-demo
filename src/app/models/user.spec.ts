import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      username: 'anoop',
      password: "123",
    });
    expect(user.username).toEqual('anoop');
    expect(user.password).toEqual("123");
  });
});
