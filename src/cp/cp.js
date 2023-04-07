import { spawn, exec } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node script", args, { cwd: "./files" });
  child.stdout.on("data", (data) => {
    console.log(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
