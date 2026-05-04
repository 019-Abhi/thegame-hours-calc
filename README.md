## HCTG Hours Calculator

A simple React tool designed to help you track your progress toward a specific goal for HCTG or any other hack club event. It takes your target hours, subtracts what you've already done, and looks at your deadline to tell you exactly how much you need to work each day to achieve your goal.

## What it does

I have personally had to use the calendar and calculator a lot of times to find out how many hours i needed to do each day to stay in track for HCTG, so I thought, well, Hack Club is all about shipping projects, so why not make one for this!

This website has the following features:
- Deadline: Automatically calculates the number of days remaining until your target date (specifically for 2026).
- Hour gap: Figures out the "Hours Left" by comparing your current progress against your total goal.
- Daily hours: Breaks down that workload into a manageable "Hours Per Day" metric.
- Safety checks: Includes basic validation to make sure you don't accidentally set a goal lower than your current progress or pick a date that’s already passed.

## How it works

The logic is pretty straightforward. It calculates the difference between your target hours and your current hours reached, as:
                                        Hours left = Target Hours - Current Hours

Then, it divided that by the days remaining:
                                        Hours needed per day = Hours left / No. of Days Left

THe website displays the results in three output boxes: Days Left, Hours Left, Hours/Day


## How to Use

Go to https://thegame-hours-calc.vercel.app/ to check it out yourself!

