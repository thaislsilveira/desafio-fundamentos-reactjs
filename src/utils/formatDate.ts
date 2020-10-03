import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const formatDate = (value: Date): string =>
  format(value, 'dd/MM/yyyy', {
    locale: pt,
  });

export default formatDate;
