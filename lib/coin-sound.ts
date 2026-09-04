"use client";

type AudioWindow = typeof window & {
  webkitAudioContext?: typeof AudioContext;
};

export function playCoinRainSound(delaySeconds = 0) {
  const AudioContextClass =
    window.AudioContext || (window as AudioWindow).webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  void context.resume();

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.14, now);
  master.gain.exponentialRampToValueAtTime(
    0.001,
    now + delaySeconds + 1.55,
  );
  master.connect(context.destination);

  [0, 0.08, 0.16, 0.26, 0.38, 0.52, 0.68, 0.86, 1.04].forEach(
    (offset, index) => {
      const start = now + delaySeconds + offset;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(1320 + index * 62, start);
      oscillator.frequency.exponentialRampToValueAtTime(
        680 + index * 24,
        start + 0.13,
      );

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.85, start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.17);

      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start(start);
      oscillator.stop(start + 0.19);
    },
  );

  window.setTimeout(
    () => void context.close(),
    Math.ceil((delaySeconds + 1.9) * 1000),
  );
}
