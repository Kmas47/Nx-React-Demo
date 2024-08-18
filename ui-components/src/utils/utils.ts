export const playSound = (soundType: OscillatorType) => {
  const context = new window.AudioContext();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = soundType;
  oscillator.frequency.setValueAtTime(500, context.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    context.currentTime + 0.1
  );
  oscillator.stop(context.currentTime + 0.1);
};

export const playPrimarySound = () => {
  return playSound('sine');
};

export const playSecondarySound = () => {
  return playSound('triangle');
};
