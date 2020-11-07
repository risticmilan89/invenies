export const registerSW = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then()
      .catch((err) => console.log(`Ups, something went wront: ${err}`));
  }
};
