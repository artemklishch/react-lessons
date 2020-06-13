const logger = (store) => {
  store.subscribe((mutation) => {
    console.log(`called ${mutation.type}`);
  });
};
export default logger;
