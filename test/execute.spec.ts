import Execute from '../src/execute';

describe('test execute command', () => {
  it('should print empty message', () => {
    const emptyMessage =
      'options command not exist, please use help for reference';
    const execute = new Execute('');
    expect(execute.readCommand()).toBe(emptyMessage);
  });

  it('should print help header message', () => {
    const headerMessage = 'Help command:';
    const execute = new Execute('help');
    expect(execute.readCommand()).toBe(headerMessage);
  });

  it('should greather than 1 memory total', () => {
    const execute = new Execute('memUsage');
    expect(execute.readCommand()).toBeGreaterThan(1);
  });
});
