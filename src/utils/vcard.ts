import { Employee } from '../types';

export const generateVCard = (employee: Employee): string => {
  // Split the name into parts
  const nameParts = employee.name.split(' ');
  const lastName = nameParts.pop() || '';
  const firstName = nameParts.join(' ');

  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${employee.name}`,
    `N:${lastName};${firstName};;;`,
    'ORG:CMAC Roofing',
    `TITLE:${employee.position || ''}`,
    `EMAIL;type=WORK;type=pref:${employee.email}`,
    `TEL;type=CELL;type=VOICE;type=pref:${employee.phone}`,
    'URL;type=WORK:https://www.cmacroofing.com',
    'ADR;type=WORK:;;1751 River Run;Fort Worth;TX;76107;United States',
    'NOTE:CMAC Roofing Employee Contact',
    'END:VCARD'
  ].join('\r\n');

  return vCardData;
};

export const downloadVCard = (employee: Employee) => {
  const vCardData = generateVCard(employee);
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${employee.name.replace(/\s+/g, '_')}_CMAC.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}; 