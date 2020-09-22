displayFourSushis = () => {
  return this.state.allSushis.slice(
    this.state.currentSushiIndex,
    this.state.currentSushiIndex + 4
  );
};