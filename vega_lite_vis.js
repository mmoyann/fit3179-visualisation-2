var spec = "map.vg.json";
vegaEmbed("#map", spec, {actions: {export: true, source: true, editor: true}})
  .catch(console.error);
vegaEmbed("#anomalies", "anomalies.vg.json", {actions: {export: true, source: true, editor: true}})
  .catch(console.error);
