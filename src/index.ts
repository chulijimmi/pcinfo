import Execute from './execute';
function main() {
  // eslint-disable-next-line no-useless-catch
  try {
    const arg = process.argv;
    const execute = new Execute(arg[2]);
    execute.readCommand();
  } catch (error) {
    throw error;
  }
}

main();
