window.addEventListener("DOMContentLoaded", function () {
  const embedOpts = {
    actions: { export: true, source: true, editor: true }
  };

  vegaEmbed("#mammal_map", "map.vg.json", embedOpts)
    .then(() => console.log("Map loaded"))
    .catch(console.error);

  vegaEmbed("#anomalies", "anomalies.vg.json", embedOpts)
    .then(() => console.log("Anomalies chart loaded"))
    .catch(console.error);
});
