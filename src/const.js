import dayjs from 'dayjs';

const POINT_COUNT = 4;

const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_DAY = 86400000;

const DateFormat = {
  // DATETIME_ATTRIBUTE: 'YYYY-MM-DDTHH:mm',
  // DAY: 'DD',
  // MONTH: 'MMM',
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:mm',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SystemMessageLoad = {
  LOAD: 'load',
  FAILED_LOAD: 'Failed to load',
};

const SystemMessageList = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
  [SystemMessageLoad.LOAD]: 'Loading...',
  [SystemMessageLoad.FAILED_LOAD]: 'Failed to load latest route information',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const POINTS_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DEFAULT_POINT = {
  id: '',
  basePrice: 0,
  dateFrom: dayjs(),
  dateTo: dayjs(),
  destination: '',
  isFavorite: false,
  offers: '',
  type: 'flight',
};

const Mode = {
  DEFAULT: 'default',
  EDITING: 'editing'
};

export {
  POINT_COUNT,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  DateFormat,
  FilterType,
  SortType,
  POINTS_TYPE,
  DEFAULT_POINT,
  SystemMessageList,
  SystemMessageLoad,
  Mode,
};
