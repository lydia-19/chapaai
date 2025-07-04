"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  id: number;
}

const NeuralNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const nodes: Node[] = [];
    const nodeCount = 15;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        id: i,
      });
    }

    // Create node elements
    nodes.forEach((node) => {
      const nodeElement = document.createElement("div");
      nodeElement.className = "neural-node";
      nodeElement.style.left = `${node.x}%`;
      nodeElement.style.top = `${node.y}%`;
      nodeElement.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(nodeElement);
    });

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) +
            Math.pow(nodes[i].y - nodes[j].y, 2),
        );

        if (distance < 25) {
          // Only connect nearby nodes
          const connection = document.createElement("div");
          connection.className = "neural-connection";

          const angle = Math.atan2(
            nodes[j].y - nodes[i].y,
            nodes[j].x - nodes[i].x,
          );
          const length = distance;

          connection.style.left = `${nodes[i].x}%`;
          connection.style.top = `${nodes[i].y}%`;
          connection.style.width = `${length}%`;
          connection.style.transform = `rotate(${angle}rad)`;
          connection.style.animationDelay = `${Math.random() * 4}s`;

          container.appendChild(connection);
        }
      }
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="neural-network" />;
};

export default NeuralNetwork;
