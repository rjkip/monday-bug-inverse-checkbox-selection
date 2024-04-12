# Inverse checkbox selection bug

## Reproduction steps

1. `npm install && npm run`
1. Go to monday Developer Centre
1. Create a new monday app, name it _Inverse checkbox selection_
1. Create a new feature
1. Select _Board View_, _Next_, _Start from scratch_, _Create_
1. Name it _Inverse checkbox selection_
1. Add a new build: `http://localhost:3000`
1. Go to _View Setup_ and add a _Multiple selection_ field
1. Add the following options
   - Text: A, Value: A
   - Text: B, Value: B
   - Text: C, Value: C
   - Deselect _Required for onboarding_
   - Click _Done_, _Save Feature_
1. Go to a monday board and install the newly created board view feature
1. Open the board's settings
1. Check option C

## Expected result

1. Option C is checked

## Actual result

1. Option A and B are checked

## Why is fixing this bug important to me?

I want the user to be able to select from a list of countries. Multiple selection is the only option for such a setting. If the user clicks one country, and monday checks all other countries, that's a horrible experience having to uncheck them all.
