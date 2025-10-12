// vega_lite_vis.js
// Embeds both visualisations after the page has loaded.

window.addEventListener("DOMContentLoaded", function () {
  const embedOpts = {
    actions: { export: true, source: true, editor: true }
  };

  // 1) Week 9 map
  vegaEmbed("#mammal_map", "map.vg.json", embedOpts)
    .then(() => console.log("Map loaded"))
    .catch(console.error);

  // 2) Week 10 temperature anomalies chart
  vegaEmbed("#anomalies", "anomalies.vg.json", embedOpts)
    .then(() => console.log("Anomalies chart loaded"))
    .catch(console.error);
});
