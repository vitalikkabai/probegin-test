// eslint-disable-next-line
const reportWebVitals = onPerfEntry => {
  // eslint-disable-next-line
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
