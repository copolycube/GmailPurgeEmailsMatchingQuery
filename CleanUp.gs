  /** 
  * This script deletes all the e-mails older than "delayDays" days that matches the "mySearch" gmail search criteria.
  * @var    delayDays int   : Enter # of days before messages are moved to trash
  * @var    mySearch string : Enter the search as tested in Gmail search bar.
  */
  function cleanUp() {
  var delayDays = 30 ;
  var mySearch =  'label:online_store-totoStore OR from:bonsplans@newsletter.travel.com .com OR label:paris-freecycle';
  
  //-- code
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var tmp_threads = GmailApp.search(mySearch);
  var threads = [];
  var threads = threads.concat(tmp_threads);

  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()
      {
        threads[i].moveToTrash();
      }
  }
}
