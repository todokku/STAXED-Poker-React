## STAXED Poker React App

Freelance Client wanted a poker club membership application that wasn't third-party and clunky.
Existing wordpress plugins tended to lead users away and charged varying monthly fees.

## Minimum Viable Product:

- Users should be able to signup and have personal membership info persist.
- Users should be able to view Membership Info(balance, qualifierHours, etc)
- Users should be able to see how much time they have left.
- Admin should be able to CRUD user membership info except for password.
- Admin should be able to "Checkin/out" users.
- Admin should be able to update ClubInfo Component for Users to see present status of Club.
- Admin should be able to create other subadmins that have access to admin features.

## Stretch Goals

- Users should be able to RSVP to Calendar.
- Users should be able to see info on other users attending an event.
- Admin should be able to CRUD new events onto the Calendar.

## Challenges

0. First FullStack freelance project with client and working around their criteria and deadlines.
1. First time syncing up a React Frontend w/ Express/Node/PSQL backend. Deciding on File Structure Design.
1. Choosing whether to handle Authentication with Firebse, Auth0, or my own shoddy bcrypt implementation.
1. Mapping out Component Hierarchy & assessing what props Parents need to pass to Child components.
1. Ensuring best practices for handling React Component Lifecycles when handling state and "re-renders"
