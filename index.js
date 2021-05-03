const fs = require('fs');

function dna() {
  return {
    name: "dna",
    load: function load(id) {
      if (!id.endsWith(".dna")) return null;
      var base64 = fs.readFileSync(id, "base64").replace(/[\r\n]+/gm, "");
      var code = `var dna = "${base64}"; \nexport default dna;`;
      return code.trim();
    },
  };
}

module.exports = dna