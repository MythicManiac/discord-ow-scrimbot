import dateFormat = require('dateformat');

export default function formatDatetime(datetime): string {
  var hour = dateFormat(datetime, 'UTC:HH:MM');
  var date = dateFormat(datetime, 'UTC:dS mmmm');
  return `${hour} UTC on ${date}`;
}
