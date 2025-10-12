var spec = "map.vg.json";  // Week 9 map file
vegaEmbed("#mammal_map", spec, {actions: {export: true, source: true, editor: true}})
  .then(() => console.log("✅ Mammal map loaded"))
  .catch(console.error);

var spec2 = "anomalies.vg.json";
vegaEmbed("#anomalies", spec2, {actions: {export: true, source: true, editor: true}})
  .then(() => console.log("✅ Temperature anomalies chart loaded"))
  .catch(console.error);
