/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = data + 1;
  postMessage(response);
});
