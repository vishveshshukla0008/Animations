Draggable.create(".box", {
  //   bounds: {
  //     maxX: 100,
  //     minX: 20,
  //     maxY: 80,
  //     minY: 40,
  //   },

  bounds: ".outer",
  edgeResistance: 1,
  inertia: true,
  dragResistance: 0.5,
});
