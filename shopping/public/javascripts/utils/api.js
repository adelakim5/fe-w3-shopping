// Request json-data

const isError = (res) => res.status !== 200;

const api = (url) => (callback, fn1, fn2) => (arg, ...optionals) =>
  fetch(url)
    .then((res) => (isError(res) ? new Error("response has a problem") : res.json()))
    .then((data) => {
      if (!data) throw new Error("No data");
      callback(fn1, fn2)(data, arg, ...optionals);
    });

export { api };
