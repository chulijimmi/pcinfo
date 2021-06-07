/**
 * Execute commands
 * Only accept help and memUsage
 * @param {string} arg
 */
class Execute {
  arg: string;

  constructor(arg: string) {
    this.arg = arg;
  }

  private helpCommand() {
    const headerMessage = 'Help command:';
    process.stdout.write(headerMessage + '\n');
    process.stdout.write('---------------------------------------' + '\n');
    process.stdout.write('memUsage: Display memory usage' + '\n');
    return headerMessage;
  }

  private memUsageCommand() {
    const response = process.memoryUsage();
    const memTotal = response.heapTotal.toFixed(0);
    const memUsed = response.heapUsed.toFixed(0);
    process.stdout.write('Memory usage:' + '\n');
    process.stdout.write('---------------------------------------' + '\n');
    process.stdout.write('total: ' + memTotal + '\n');
    process.stdout.write('used: ' + memUsed + '\n');
    return parseInt(memTotal);
  }

  private emptyCommand() {
    const emptyMessage =
      'options command not exist, please use help for reference';
    process.stdout.write(emptyMessage);
    return emptyMessage;
  }
  public readCommand(): string | number {
    switch (this.arg) {
      case 'help':
        return this.helpCommand();
      case 'memUsage':
        return this.memUsageCommand();
      default:
        return this.emptyCommand();
    }
  }
}

export default Execute;
