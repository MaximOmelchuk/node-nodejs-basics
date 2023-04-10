import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const child = fork("files/script", args);
  child.on("exit", (code) => {
    process.stdout.write(`Closed with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
