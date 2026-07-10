const fs = require('fs');
const summary = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/d5165744-a58f-4d8d-9e16-88287d394ad0/scratch/packages_summary.json', 'utf8'));

const destinations = [
  'kedarnath', 'badrinath', 'auli', 'mussoorie', 'rishikesh', 'haridwar', 'nainital', 
  'jim corbett', 'corbett', 'valley of flowers', 'hemkund', 'goa', 'rajasthan', 'udaipur', 
  'jaisalmer', 'jaipur', 'jodhpur', 'munnar', 'alleppey', 'kochi', 'wayanad', 'kerala', 
  'sikkim', 'darjeeling', 'gangtok', 'meghalaya', 'shillong', 'cherrapunji', 'dirang', 
  'tawang', 'kaziranga', 'nepal', 'bhutan', 'thailand', 'bangkok', 'maldives', 'singapore', 
  'bali', 'dubai', 'kashmir', 'srinagar', 'gulmarg', 'pahalgam', 'sonmarg', 'leh', 
  'ladakh', 'nubra', 'pangong', 'spiti', 'kaza', 'dharamshala', 'dalhousie', 'amritsar', 
  'shimla', 'manali', 'tirthan', 'kasol', 'kheerganga', 'jibhi', 'bir billing', 'paragliding'
];

let report = '';
for (let key in summary) {
  const p = summary[key];
  const nameLower = p.name.toLowerCase();
  const highlightsLower = p.highlights.join(' ').toLowerCase();
  const itineraryText = p.itinerary ? p.itinerary.map(d => d.title + ' ' + d.description).join(' ').toLowerCase() : '';

  const missingInHighlights = [];
  const extraInHighlights = [];

  for (let dest of destinations) {
    const inName = nameLower.includes(dest);
    const inItinerary = itineraryText.includes(dest);
    const inHighlights = highlightsLower.includes(dest);

    if (inHighlights && !inName && !inItinerary) {
      extraInHighlights.push(dest);
    }
  }

  if (extraInHighlights.length > 0) {
    report += `=========================================\n`;
    report += `SLUG: ${key}\n`;
    report += `NAME: ${p.name}\n`;
    report += `EXTRA IN HIGHLIGHTS: ${extraInHighlights.join(', ')}\n`;
    report += `CURRENT HIGHLIGHTS:\n${p.highlights.map(h => '  - ' + h).join('\n')}\n`;
    report += `ITINERARY:\n${p.itinerary ? p.itinerary.map(d => `  Day ${d.day}: ${d.title}`).join('\n') : 'NO ITINERARY'}\n\n`;
  }
}

fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/d5165744-a58f-4d8d-9e16-88287d394ad0/scratch/mismatch_report.txt', report);
console.log("Wrote mismatch report to mismatch_report.txt");
console.log("Number of mismatching packages:", report.split('=========================================').length - 1);
