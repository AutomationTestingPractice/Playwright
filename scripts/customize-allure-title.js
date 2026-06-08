const fs = require('fs');

const file = 'allure-report/widgets/summary.json';

const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.reportName = 'Max Customer Portal Automation Report';

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log('Updated reportName successfully');