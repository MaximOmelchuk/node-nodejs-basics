import { Worker, workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  //   const input = process.argv[2];
  //   const path = "./nthFibonacci.js";
  //   const worker = new Worker(path, { workerData: { value: input } });
  // This function sends result of nthFibonacci computations to main thread
  //   worker.on("message", (result) => {
  //     console.log(result);
  //   });
  //   worker.on("exit", (code) => {
  //     if (code !== 0) throw new Error(`Worker stopped with exit code ${code}`);
  //     else console.log("Worker stopped " + code);
  //   });
  parentPort.postMessage(nthFibonacci(workerData.value));
};

sendResult();
