# attendance-tracker
Track your office attendance

## MVP 1
One page UI that has a calendar (5-day) view to show:
1. Days WFH
2. PH/Days on leave (which won't be counted)
3. % on a average basis, over 12 weeks
4. % of a total of 12 weeks

Considerations:
- Key in data for WFH days on excel, then pull the data for now (on each refresh..?)
- Static data for each week (to calculate on a rolling basis)
- PH/Days on leave not to be counted in total days
- How to "refresh"/"bump" after each new week
- Find calendar template for react

## Future Work
- Be able to click the calendar view and select "WFH/WIO" - Defaults to WIO - Need a DB
- Be able to select X weeks instead of just 12
