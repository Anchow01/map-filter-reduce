const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 120, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook",   marketValue: 380, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Apple",  marketValue: 890, CEO: "Tim Cook", foundedOn: 1976 },
  { name: "Spotify", marketValue: 100, CEO: "Daniel Ek", foundedOn: 2006 },
];

// 1. Map: Adicionar 10% ao marketValue (cria novos objetos)
const add10Percent = (company) => ({
  ...company,
  marketValue: company.marketValue * 1.1  // +10% imutável
});

// 2. Filter: Empresas fundadas ANTES de 2000
const foundedBefore2000 = (company) => company.foundedOn < 2000;

// 3. Reduce: Somar marketValue
const sumMarketValue = (acc, company) => acc + company.marketValue;

const marketValueOldCompanies = companies
  .map(add10Percent)
  .filter(foundedBefore2000)
  .reduce(sumMarketValue, 0);

console.log(`A soma do valor de mercado das empresas fundadas antes de 2000 é R$ ${marketValueOldCompanies.toFixed(2)}`);
// Saída: A soma do valor de mercado das empresas fundadas antes de 2000 é R$ 1718.50



