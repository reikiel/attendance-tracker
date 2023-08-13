# attendance-tracker
Track your office attendance

## MVP 1
- Setup local db (mysql)
- Backend logic
- APIs to CRUD data
- simple UI to show one liner % 

Considerations:
- Static data for each week (to calculate on a rolling basis)
- PH/Days on leave not to be counted in total days
- How to "refresh"/"bump" after each new week
- Find calendar template for react

## Future Work
One page UI that has a calendar (5-day) view to show:
1. Days WFH
2. PH/Days on leave (which won't be counted)
3. % of a total of 12 weeks (Days in office/(Total weekdays - leaves - PH) * 100)
4. Be able to click the calendar view and select "WFH/WIO/Sick Leave/Vacation Leave" - Defaults to WIO
5. Be able to select X weeks instead of just 12
6. Be able to 'plan' future weeks to see forecasted %
