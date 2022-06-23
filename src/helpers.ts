function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

// eslint-disable-next-line import/prefer-default-export
export { getWindowDimensions };
