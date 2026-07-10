const fs = require('fs');
const summary = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/d5165744-a58f-4d8d-9e16-88287d394ad0/scratch/packages_summary.json', 'utf8'));

let report = '';
for (let key in summary) {
  const p = summary[key];
  report += `-----------------------------------------\n`;
  report += `SLUG: ${key}\n`;
  report += `NAME: ${p.name}\n`;
  report += `HIGHLIGHTS:\n${p.highlights.map(h => '  - ' + h).join('\n')}\n`;
  report += `ITINERARY:\n${p.itinerary ? p.itinerary.map(d => `  Day ${d.day}: ${d.title} (${d.description.slice(0, 100)}...)`).join('\n') : 'NO ITINERARY'}\n\n`;
}

fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/d5165744-a58f-4d8d-9e16-88287d394ad0/scratch/all_packages_full_report.txt', report);
console.log("Wrote full report to all_packages_full_report.txt");
