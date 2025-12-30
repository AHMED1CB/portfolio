export default function Particles() {
  const flakes = Array.from({ length: 50 });

  return (
    <div className="snow-wrapper">
      {flakes.map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${10 + Math.random() * 20}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
