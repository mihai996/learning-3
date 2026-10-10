export const subjects = {
  microbiologie: {
    name: "Microbiologie",
    short: "MIC",
    color: "#d85f47",
    description: "Microorganisme, procese și relația cu gazda"
  },
  biochimie: {
    name: "Biochimie",
    short: "BIO",
    color: "#297d70",
    description: "Molecule, reacții și integrare metabolică"
  },
  genetica: {
    name: "Genetică",
    short: "GEN",
    color: "#526bb3",
    description: "Informație genetică, ereditate și variație"
  },
  pedologie: {
    name: "Pedologie",
    short: "PED",
    color: "#9a6b35",
    description: "Formarea, proprietățile și clasificarea solurilor"
  }
};

export const requiredFields = [
  "title",
  "subject",
  "order",
  "duration",
  "summary",
  "status"
];
