import hotViralWeekMock from "./hotViralWeekMock.json"
import topTopWeekMock from "./topTopWeekMock.json"
import hotTopWeekMock from "./hotTopWeekMock.json"
import topViralWeekMock from "./topViralWeekMock.json"
import hotViralDayMock from "./hotViralDayMock.json"
import topTopDayMock from "./topTopDayMock.json"
import hotTopDayMock from "./hotTopDayMock.json"
import topViralDayMock from "./topViralDayMock.json"

export type RequestParameters = {
  section: string;
  sort: string;
  window: string;
};

export const getMockResponse = ({section, sort, window}: RequestParameters) => {
  if (section == 'hot' && sort == 'top' && window == 'day') {
    return (hotTopDayMock.data)
  } else  if (section == 'hot' && sort == 'top' && window == 'week') {
    return hotTopWeekMock.data
  } else  if (section == 'hot' && sort == 'viral' && window == 'day') {
    return hotViralDayMock.data
  } else  if (section == 'hot' && sort == 'viral' && window == 'week') {
    return hotViralWeekMock.data
  } else  if (section == 'top' && sort == 'top' && window == 'day') {
    return topTopDayMock.data
  } else  if (section == 'top' && sort == 'top' && window == 'week') {
    return topTopWeekMock.data
  } else  if (section == 'top' && sort == 'viral' && window == 'day') {
    return topViralDayMock.data
  } else  if (section == 'top' && sort == 'viral' && window == 'week') {
    return topViralWeekMock.data
  }
}
