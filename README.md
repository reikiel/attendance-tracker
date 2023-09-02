# attendance-tracker

Track your office attendance

## MVP 1 -- Done:

-   Connect server to local db (mysql), example script to create tables and insert data under server > data > data.sql
-   12 weeks moving window
-   Backend logic to calculate %
-   Simple UI to show start, end, PH Days, Leave Days, WFH Days, Percentage

## MVP 1 -- Todos

-   Other utility APIs to CRUD data & to insert data using frontend
-   On saturday, start calculating the current week (now it only processes the current week on Sunday)
-   Navbar for:
    1. Home (Calendar + List view)
    2. Adding data

## Future Work

-   UI that has a calendar (5-day) view to show:

    1. Days WFH
    2. PH/Days on leave (which won't be counted)
    3. % of a total of 12 weeks (Days in office/(Total weekdays - leaves - PH) \* 100)
    4. Be able to click the calendar view and select "WFH/WIO/Sick Leave/Vacation Leave" - Defaults to WIO
    5. Be able to select X weeks instead of just 12
    6. Be able to 'plan' future weeks to see forecasted %

-   Better way to handle DB connection (now its opening and closing every query)

Considerations:

-   Find calendar template for react
-   Apparently for half day leaves, if you don't go office on the other half its also counted as WFH day...
