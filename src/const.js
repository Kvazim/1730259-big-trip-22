const POINT_COUNT = 4;

const MILLISECONDS_IN_MINUTES = 60000;

const SECONDS_IN_MINUTES = 60;

const HOURS_IN_DAY = 24;

const DateFormat = {
  // DATETIME_ATTRIBUTE: 'YYYY-MM-DDTHH:mm',
  // DAY: 'DD',
  // MONTH: 'MMM',
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:MM',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]'
};

const FILTERS_TYPE = ['everything', 'future', 'present', 'past'];

const DEFAULT_FILTER = FILTERS_TYPE[0];

const SORT_TYPE = ['day', 'event', 'time', 'price', 'offers'];

const DEFAULT_SORT = SORT_TYPE[0];

const POINTS_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export {
  POINT_COUNT,
  MILLISECONDS_IN_MINUTES,
  SECONDS_IN_MINUTES,
  HOURS_IN_DAY,
  DateFormat,
  FILTERS_TYPE,
  DEFAULT_FILTER,
  SORT_TYPE,
  DEFAULT_SORT,
  POINTS_TYPE,
};
