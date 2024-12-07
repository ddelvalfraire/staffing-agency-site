export function GradientSpotlight() {
  return (
    <div className="fixed inset-0 h-[20vh] -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {/* Base moving gradient */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.3)_0%,rgba(147,197,253,0.2)_50%,transparent_100%)]
          animate-[moveLeftRight_20s_linear_infinite] blur-xl"
        />

        {/* Secondary gradient layer */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(192,132,252,0.2)_0%,rgba(99,102,241,0.15)_50%,transparent_100%)]
          animate-[moveLeftRight_15s_linear_infinite_reverse] blur-2xl"
        />

        {/* Fade to white at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white dark:to-black" />
      </div>
    </div>
  );
}
