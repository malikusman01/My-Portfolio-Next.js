const nodes = [
  { label: "User" },
  { label: "Interface" },
  { label: "API" },
  { label: "Business Logic" },
  { label: "Database" },
  { label: "Infrastructure" },
];

export default function ArchitectureFlow() {
  const nodeHeight = 56;
  const gap = 34;
  const totalHeight = nodes.length * nodeHeight + (nodes.length - 1) * gap;

  return (
    <svg
      viewBox={`0 0 260 ${totalHeight}`}
      className="w-full max-w-[220px]"
      role="img"
      aria-label="System architecture flow: User to Interface to API to Business Logic to Database to Infrastructure"
    >
      {nodes.map((node, i) => {
        const y = i * (nodeHeight + gap);
        const isLast = i === nodes.length - 1;
        return (
          <g key={node.label}>
            <rect
              x="0"
              y={y}
              width="220"
              height={nodeHeight}
              rx="3"
              className="flow-node"
              fill="#141519"
              stroke="#26282D"
            />
            <text
              x="18"
              y={y + nodeHeight / 2 + 4}
              fontSize="12"
              fill="#F3F1EA"
              fontFamily="var(--font-body)"
            >
              {node.label}
            </text>
            <circle cx="200" cy={y + nodeHeight / 2} r="3" fill="#C9A876" />
            {!isLast && (
              <line
                x1="110"
                y1={y + nodeHeight}
                x2="110"
                y2={y + nodeHeight + gap}
                stroke="#C9A876"
                strokeWidth="1.5"
                className="flow-line"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
