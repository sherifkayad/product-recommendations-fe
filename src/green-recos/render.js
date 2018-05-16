export default function renderRecos(recoArray, baseUrl) {
  const base_url = baseUrl ? baseUrl : '';
  return `
    <h3>Related Products</h3>
    ${recoArray.map(id => `<img src="${base_url}/green/images/reco_${id}.jpg" alt="Reco ${id}" />`).join('')}
  `;
}
