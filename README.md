# GmailPurgeEmailsMatchingQuery
Google Scripts to *delete* e-mails (i.e. move to trash) if they are matching gmail search  patterns.


## deployment

Add this file under your *google app script console* and configure it to run daily : https://script.google.com

You will need to customize the array of search queries it will look for in order to move them to the trash at each run. 
The Search query is concatenated with a "non-matching stars" so that messages of special interested (i.e. with a star) are left as is.

