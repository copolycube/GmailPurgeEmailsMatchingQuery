function cleanUp() {
  /**
  * @var    delayDays int   : Enter # of days before messages are moved to trash
  * @var    mySearch string : Enter the search as tested in Gmail search bar.
  */
  var delayDays = 30 ;
  var conditions_array = ['label:30days_delete',
                          'label:online_store-totoStore', 
                          'from:bonsplans@newsletter.travel.com',
                          'label:paris-freecycle',
                          'label:paris-do-it-in-paris'
                         ]
  var exclusion_query = " -in:starred"
  
  
  function moveSearchedToTrash(mySearch) {
    console.log({message: 'Search e-mail threads matching query: '+mySearch, initialData: mySearch});
    //-- code
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-delayDays);
    var tmp_threads = GmailApp.search(mySearch);
    var threads = [];
  
    var threads = threads.concat(tmp_threads);
    console.log("Number of moved threads to the trash folder="+threads.length)
  
    for (var i = 0; i < threads.length; i++) {
      if (threads[i].getLastMessageDate() < maxDate)
      {
        threads[i].moveToTrash();
      }
    }
  }
  
  for (var i = conditions_array.length-1; i > -1 ; i--) {
    moveSearchedToTrash(conditions_array[i]+exclusion_query)
  }
}
