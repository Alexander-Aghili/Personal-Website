---
title: 'Public Poll Mobile App'
date: '2022-9-21'
subtitle: 'This is a mobile app that I developed to use as polls between my friends'
---
This was my first ever attempt at create a full stack application on my own and I decided it would be fun to do it as a mobile app instead of as a web app since the world is going mobile.
Below are the lists of technologies, a description of what I learned, how it works, and at the bottom is the link to both github repos.

- Frontend Language: Dart
- Frontend Framework: Flutter
- Backend Language: Java
- Backend Framework: Apache Tomcat
- Session Information: Redis
- Database: MySQL 
- Cloud Service: Digital Ocean
- Image Storage: AWS S3
- API: REST


I learned a lot from this entire process. 
I spent many hours going through logs and directories fixing bugs and improving preformance.
I had limited knowledge of REST APIs going into this, but I learned a great deal working on both the front and backend side of an API.
I also learned how to navigate varying screen dimensions, utilize cloud serices, make decisions about technology usage, and more.

The app includes many pages. There is, of course, a sign up and sign in page. 
Here users will sign in securely. 

![](/static/Projects/images/PublicPoll/Signin.png)

Then there is the home page which includes a feed of all polls not responded to yet.
Refreshing the page is available by scrolling up or clicking the refresh button in the bottom right.
Each poll contains a question, up to 26 possible answers (A-Z), a statistics page to show the results, and includes comments from others.
On the comment page, you can access other people's account page by clicking on their profile picture.

![](/static/Projects/images/PublicPoll/Comment.png)
![](/static/Projects/images/PublicPoll/StatPage.png)

There is a create poll page in which a poll can be created and published.

![](/static/Projects/images/PublicPoll/CreatePollPage.png)

The account page contains the users information and three lists of polls. 
The first is a list of all polls manually saved,  the second is a list of all polls responded to, and the final is a list of all polls created by that user.
There is also a settings button which allows the user to edit personal information, profile picture, or the theme(color) of the app.


![](/static/Projects/images/PublicPoll/AccountPage.png)

Github Repos:

[Frontend](https://github.com/Alexander-Aghili/PublicPollAppFrontEnd)

[Backend](https://github.com/Alexander-Aghili/PublicPollBackEnd)