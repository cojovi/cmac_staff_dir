import { Employee } from '../types';

export const generateVCard = (employee: Employee): string => {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${employee.name}`,
    `N:${employee.name.split(' ').reverse().join(';')}`,
    `ORG:CMAC Roofing`,
    `TITLE:${employee.position}`,
    `EMAIL;type=WORK:${employee.email}`,
    `TEL;type=CELL:${employee.phone}`,
    'URL:https://www.cmacroofing.com',
    'END:VCARD'
  ].join('\n');

  return vCardData;
};

export const downloadVCard = (employee: Employee) => {
  const vCardData = generateVCard(employee);
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${employee.name.replace(' ', '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}; 