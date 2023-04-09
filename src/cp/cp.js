import { spawn, exec, fork } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  // const child = spawn("cp ..");
  const child = fork(path.resolve(process.cwd(),"files/script"), [...args]);
  // child.stdout.on('data', (data) => {
  //   console.log(`child stdout:\n${data}`);
  // });
  // child.stdout.on("data", (data) => {
  //   console.log(data.toString());
  // });
  process.stdin.on("data", (data) => {
    console.log(process.send);
    process.send(data.toString());
  });
  process.on("message", (data) => {
    console.log(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
