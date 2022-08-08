const plans = [
  {
    name: "Family Health Optima Insurance Plan ",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Diabetes", "Pneumonia"],
    plan_categories: ["Individual", "Seniors"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 1,
    trends: {
      muthu: "muthu: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      dhamu: "dhamu: Recently purchased from mumbai",
      manoj: "manoj: Recently purchased from pune",
    },
  },
  {
    name: "Health Assure",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Diabetes", "Maternity"],
    plan_categories: ["Top-up plan"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 2,
    trends: {
      muthu: "muthu: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      dhamu: "dhamu: Recently purchased from mumbai",
      manoj: "manoj: Recently purchased from pune",
    },
  },
  {
    name: "Star Women Care",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Maternity"],
    plan_categories: ["Family Floater"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 3,
    trends: {},
  },
  {
    name: "Senior Citizens Red Carpet",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Diabetes", "Maternity"],
    plan_categories: ["Individual"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 4,
    trends: {
      muthu: "muthu: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      dhamu: "dhamu: Recently purchased from mumbai",
      manoj: "manoj: Recently purchased from pune",
    },
  },
  {
    name: "Star Cancer Care Platinum",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Cancer"],
    plan_categories: ["Seniors"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 5,
    trends: {
      muthu: "muthu: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      dhamu: "dhamu: Recently purchased from mumbai",
      manoj: "manoj: Recently purchased from pune",
    },
  },
  {
    name: "Critical Illness Multipay",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: [
      "Diabetes",
      "Pneumonia",
      "Stroke",
      "Heart",
      "Maternity",
      "Cancer",
      
    ],
    plan_categories: ["Specialty products", "Seniors"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 6,
    trends: {
      muthu: "muthu: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      dhamu: "dhamu Recently purchased from mumbai",
      manoj: "manoj: Recently purchased from pune",
    },
  },
  {
    name: "Star Comprehensive Insurance Policy",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Heart"],
    plan_categories: ["Family Floater", "Top-up plan"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 7,
    trends: {
      vijay: "vijay: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      ram: "ram: Recently purchased from mumbai",
      vishal: "vishal: Recently purchased from pune",
    },
  },
  {
    name: "Star Super Surplus Insurance Policy",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Stroke"],
    plan_categories: ["Individual", "Seniors", "Family Floater"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 8,
    trends: {
      ankit: "ankit: Recently purchased from chennai",
      siva: "siva: Recently purchased from cbe",
      beem: "beem: Recently purchased from mumbai",
      raju: "raju: Recently purchased from pune",
    },
  },
  {
    name: "Diabetes Safe Insurance Plan",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Heart"],
    plan_categories: ["Individual", "Top-up plan"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 9,
    trends: {
      krish: "krish: Recently purchased from chennai",
      nandha: "nandha: Recently purchased from cbe",
      prabhu: "prabhu: Recently purchased from mumbai",
      manoj: " manoj: Recently purchased from pune",
    },
  },
  {
    name: "Mediclassic (Individual)",
    descriptation:
      "Good health is the greatest wealth. To keep it intact, we ensure that your health is secured with an array of our flexible Health Insurance Policies.",
    benifits: [
      "**Uniform Coverage:** for all family members and uniform across all health insurers.",
      "**Ayush cover:** for hospitalization expenses incurred towards AYUSH treatments ",
      "**Discount on premium:** 20% premium discount for rural Population. ",
    ],
    diseases: ["Diabetes", "Pneumonia", "Stroke"],
    plan_categories: ["Specialty products"],
    productImg:
      "https://star-health-dev.s3.ap-south-1.amazonaws.com/FHO_cbaa10f465.jpg",
    // "images/plant.jpg",
    id: 10,
    trends: {},
  },
];

export function getAllPlants() {
  return plans;
}
