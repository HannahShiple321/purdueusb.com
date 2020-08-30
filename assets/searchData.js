let searchData=[{index:1,title:"How do I become an Undergrad&shy;uate Teaching Assistant?",description:"Get paid to help students during labs",url:"/wiki/become-uta",category:"campus",date:"March 4, 2020",content:"The process of the hiring UTAs has been standardized in the Computer Science Department to simplify application evaluation.  Typically, applications for the following semester are opened about a month before classes end.  More information can be found on the Department of Computer Science website.",author:"Noah Alderton"},{index:2,title:"How can I rent equipment?",description:"Borrow equipment to tinker with for free",url:"/wiki/rent-equipment",category:"campus",date:"March 4, 2020",content:"There are a few different opportunities to rent equipment for both classwork and personal use.  The Department of Computer Science allows CS/DS students to rent various equipment online.The following devices are available to rent for 1 week at a time:SenseHatRaspberry Pi 3Particle PhotonPebble SmartwatchLittleBitsMyoLeapMotionParrot Rolling Spider MiniDroneOculus Rift DK2HoloLensAdditionally, Purdue Libraries has cameras, camcorders, tripods, and hard drives available to rent for 3 days.To learn more, see the Purdue Libraries Equipment page.",author:"Noah Alderton"},{index:3,title:"Transferring Files via SCP and FileZilla",description:"Copy files to and from Purdue's servers",url:"/wiki/file-transfer",category:"technical",date:"April 1, 2020",content:"IntroductionSometimes there comes a need where you need to transfer a files between your personal computer and one of Purdue\u2019s servers (like data.cs.purdue.edu).  The tutorial will show you how to transfer files between your computer and a remote server (and vice versa) using SCP via command line and FileZilla.  These methods will work on Windows, Mac, and Linux.Solution 1: Command LineStep 1On Windows open \u201cWindows PowerShell.\u201d On Mac or Linux, open your respective Terminal.Step 2In order to transfer your files, we are going to use SCP. SCP works the same regardless of operating system. The SCP program takes the following parameters:scp &lt;source_directory&gt; &lt;destination_directory&gt;For our purposes of transferring homework from data, we are going to use the following command:scp &lt;purdue_username&gt;@data.cs.purdue.edu:&lt;homework_directory&gt; &lt;personal_machine_directory&gt;For example, if I wanted to transfer my hw2.c file to my current directory on my PC, I would run:scp nalderto@data.cs.purdue.edu:~/cs240/hw2/hw2.c .Step 3If everything ran properly, you should be able to access your homework on your personal machine. Keep in mind that this is a\xa0copy\xa0of your homework, so any changes you make on your personal machine will not be reflected on data and vice versa. If we want to transfer a file from our personal machine to data, we would need to run SCP again, flipping the source and destination directories.For example, if I wanted to transfer my hw2.c file from my personal machine to data, I would run:scp hw2.c nalderto@data.cs.purdue.edu:~/cs240/hw2/Solution 2: FileZillaStep 1If you are not comfortable with the command line, there are several graphical user interface programs that are available which provide the same functionality. In this tutorial we are covering FileZilla, as it is compatible with Windows, Mac, and Linux.You can download FileZilla here.Step 2Once you have finished installing FileZilla, open it up. On the top, there should be 4 input boxes. Put in the following information:Host:\xa0sftp://data.cs.purdue.eduUsername: Purdue UsernamePassword: Purdue Career Account Password (same password used to SSH into data)Port: 22Step 3Once the appropriate information is entered, click \u201cQuickconnect\u201d. A dialog might appear about trusting the connect. Go ahead and trust the connection.Step 4You should now be connected to data! Your data filesystem is on the right part of the screen, while your personal computer\u2019s files are on the left. You can drag and drop the files between the machines as you wish!",author:"Noah Alderton"},{index:4,title:"Getting a Lawson Key Fob",description:"Access Lawson after hours",url:"/wiki/lawson-fob",category:"campus",date:"May 9, 2020",content:"As a CS student, you can get a keyfob from the Lawson mailroom which will give you after-hours/weekend access to the Lawson building, as well as the student activities center in HAAS G072.Getting a New KeyfobTo get a keyfob, simply email cs-workstudy@science.purdue.edu. Here\u2019s a template that might be helpful:Subject: Lawson KeyfobTo whom it may concern,I am a computer science student enrolled in [CS courses here]. I would like a keyfob to access the Lawson building after-hours.Thank you, [Your name]Renewing an Existing KeyfobKeyfob access expires every semester. If you don\u2019t renew your keyfob, you won\u2019t be able to get into the building or offices without renewing. To renew your keyfob, simply email cs-workstudy@science.purdue.edu again and request that your fob be renewed. In the email, tell them new CS courses you are enrolled in.",author:"Jay Hankins"},{index:5,title:"SSH Shortcut for Purdue Servers",description:"Tired of typing data.cs.purdue.edu?",url:"/wiki/ssh-shortcut",category:"technical",date:"May 10, 2020",content:"It can be tedious to type ssh &lt;username&gt;@&lt;machine&gt;.cs.purdue.edu over and over again whenever you need to login to a CS machine.Here\u2019s a little shell function which shortens this command to just  with an optional argument of the machine you wish to connect to.InstallationCopy and paste the following code into your shell rc file. This may be ~/.bashrc or ~/.zshrc.&lt;username&gt; () {    ssh &lt;username&gt;@${1:-&lt;default_machine&gt;}.cs.purdue.edu}Make sure to replace any information in between the &lt; and &gt; symbols. For example, my function looks like this:hankinsj () {    ssh hankinsj@${1:-data}.cs.purdue.edu}My username is hankinsj and my default machine is data in this example.Usage$ &lt;username&gt;You can include an optional argument which specifies the machine to connect to. Otherwise, it will connect to your chosen default machine.Example$ hankinsj mc04This will connect me automatically to mc04.cs.purdue.edu.",author:"Jay Hankins"},{index:6,title:"Connecting to Purdue's VPN",description:"Access campus-only resources from anywhere!",url:"/wiki/connect-vpn",category:"technical",date:"May 26, 2020",content:"IntroductionA Virtual Private Networking (VPN) is a method that allows users to securely access an organization\u2019s internal network resources. By using Purdue\u2019s VPN service, you can access resources that are only available on campus anywhere, e.g. printing to any campus printer, remotely accessing Purdue\u2019s servers/UNIX machines (like mc19.cs.purdue.edu) through remote desktop, etc.This tutorial will show you how to connect to Purdue\u2019s VPN using Cisco AnyConnect.Step 1To download Cisco AnyConnect, go to the Purdue Community Hub. After login in, you would want to go to \u201cAntivirus and Security Software\u201d.Step 2Select Cisco AnyConnect for Personally Owned Computers and select the appropriate settings for your computer. After adding the software to your cart, download Cisco AnyConnect.Step 3Once you finished installing Cisco AnyConnect, open it up. You will see that Cisco AnyConnect is ready to connect to the VPN server: webvpn.purdue.edu.There are a couple options you can choose. Due to COVID-19, more people are utilizing Purdue\u2019s VPN services. Purdue has created another VPN server: webvpn2.purdue.edu/ for people to connect to. Whichever VPN server you choose to connect to will work.Step 4After you click \u201cConnect\u201d, a prompt for login in will pop up. Your username is your Purdue username and the password is your BoilerKey password (pin,push).Step 5You should be able to connect to Purdue\u2019s VPN server! A pop-up will notify you that you are connected. Another way to tell is to check is on the task/menu bar. From the picture below, the lock symbol signifies that you are connected.Step 6After using Purdue\u2019s VPN, you want to disconnect. On Windows, right click on the Cisco AnyConnect icon, and click \u201cDisconnect\u201d. On Mac, to disconnect, click on the Cisco AnyConnect icon from the menu bar and select \u201cDisconnect\u201d.",author:"Cindy Ding"},{index:7,title:"Subscribing to the Purdue CS Calendar",description:"Get notified of CS Department events on your calendar",url:"/wiki/cs-calendars",category:"calendar, events",date:"June 28, 2020",content:"Below are links you can use to sync the Purdue Computer Science calendars using your preferred calendar app. The CS department switched to Google Calendar just for you! :tada:Note: We recommend subsribing to the Google Calendar link. Downloadable calendars do not update automatically.Departmental events, such as Town Hall or career workshops:Google Calendar EmbedWebcaliCalendar (.ics)Corporate events, such as recruiting days:Google Calendar EmbedWebcaliCalendar (.ics)CS seminars &amp; colloquiums:Google Calendar EmbedWebcaliCalendar (.ics)Student organization events:Google Calendar EmbedWebcaliCalendar (.ics)",author:"Tyler Hoffman"},{index:8,title:"Optimize your search on our wiki",description:"Save yourself some time!",url:"/wiki/searching-our-wiki",category:"meta",date:"June 29, 2020",content:"Our wiki is built with tools make your searches more powerful and precise. You can use any combination of the operators explained below:WildcardsWildcards let you match any text and are represented by asterisks (*). For example, C* S* matches words starting with C or S. Together they match phrases like Computer Science or Canadian Studies, among other things.FieldsFields relate to meta-information about our articles, such as the date or author. You can use them to search only titles, for example, instead of searching the entire wiki. Search for this article with title:optimize.Available fields: title, description, content, author, category, and date.BoostsYou can use boosts to prioritize certain search terms over others. For example, foo^10 bar tells the website you\u2019re 10x more interested in the search term foo than bar. Articles containing foo would then be higher in the search results.Fuzzy MatchesFuzzy matching allows for some grace if you misspell a term or are off by a few letters. For example, foo~1 matches anything 1 letter away from foo, like boo or food. It will not match words like boot because it has a difference of two letters.Term PresenceTerm presence allows you to explicitly include or exclude phrases in your search query with the symbols + and -, respectively. For example, +foo -bar baz matches only content with foo and without bar, that also may contain baz.By default, a result comes back if any word separated by a space matches some content. This is a limitation of the code our website uses. Searching for +author:Purdue Pete is seen as two separate terms, +author:Purdue and Pete.Nothing\u2019s perfect.Bringing It All TogetherYou can make your search as simple or as complex as you\u2019d like. As an example, if I wanted to search for meta-articles I\u2019ve authored in June, containing the mis-spelled phrase crakatoa, I could type category:meta +author:Zach +Bryant +date:June -crakatoa~1. Except at this time, my only article contains the phrase krakatoa.Thank you for coming to my TED talk.",author:"Zach Bryant"},{index:9,title:"Help Room Information",description:"Extra help for CS 193, CS 180, CS 182, CS 240",url:"/wiki/help-room",category:"tutor",date:"August 29, 2020",content:"All help room sessions are now held virtually through ZoomBelow are the times tutors are available to help:MondayTuesdayWednesdayThursday9:00am - 11:00amGowri HarishPrasha Bora11:00am - 1:00pmGowri Harish1:00pm - 3:00pmAbhishek GunasekarSamantha Coe3:00am - 5:00pmYoungsik YoonJasmine Singh5:00am - 7:00pmAlice Gontijo7:00am - 9:00pmHajera ZemyRewati ShitoleAditya SubramaniamAditya SubramaniamJacky ZhengJasmine SinghRewati ShitoleSamantha CoeHajera ZemyPrasha BoraYoungsik YoonIn order to sign up to get help please fill out this form during one of the appropriate times: https://bit.ly/34P0emDAfter you fill out the form, a tutor will email you with their Zoom meeting link. Once you fill the form out please keep your email open so you know when you receive the link and you are ready to enter the Zoom meeting.The time limit on each call will be around 15-20 mins, but this limit is subject to change based on the popularity of the help room.",author:"Sera Sava\u015f"}];