var WhiteCard = require('./models/WhiteCard.js');
var BlackCard = require('./models/BlackCard.js');

function getDeck() {
  return { black: black(), white: white() };
}

function black() {
  return [
    {question:"_____: Good to the last drop."},
    {question:"_____: kid-tested, mother-approved."},
    {question:"_____? There's an app for that."},
    {question:"_____. Betcha can't have just one!"},
    {question:"_____. High five, bro."},
    {question:"_____. It's a trap!"},
    {question:"_____. That's how I want to die."},
    {question:"_____. Awesome in theory, kind of a mess in practice."},
    {question:"A romantic, candlelit dinner would be incomplete without _____."},
    {question:"A successful job interview begins with a firm handshake and ends with _____."},
    {question:"Action Stations! Action Stations! Set condition one throughout the fleet and brace for _____!"},
    {question:"After Hurricane Katrina, Sean Penn brought _____ to all the people of New Orleans."},
    {question:"After months of debate, the Occupy Wall Street General Assembly could only agree on 'More _____!'"},
    {question:"After the earthquake, Sean Penn brought _____ to the people of Haiti."},
    {question:"Air Canada guidelines now prohibit _____ on airplanes."},
    {question:"Alternative medicine is now embracing the curative powers of _____."},
    {question:"And I would have gotten away with it, too, if it hadn't been for _____!"},
    {question:"And what did you bring for show and tell?"},
    {question:"Anthropologists have recently discovered a primitive tribe that worships _____."},
    {question:"As part of his contract, Prince won’t perform without _____ in his dressing room."},
    {question:"As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _____."},
    {question:"Before I run for president, I must destroy all evidence of my involvement with _____."},
    {question:"BILLY MAYS HERE FOR _____."},
    {question:"But before I kill you, Mr. Bond, I must show you _____."},
    {question:"Call the law offices of Goldstein & Goldstein, because no one should have to tolerate _____ in the workplace."},
    {question:"Charades was ruined for me forever when my mom had to act out _____."},
    {question:"Coming to Broadway this season, _____: The Musical."},
    {question:"Daddy, why is Mommy crying?"},
    {question:"Dear Abby, I'm having some trouble with _____ and would like your advice."},
    {question:"Due to a PR fiasco, Walmart no longer offers _____."},
    {question:"During high school I never really fit in until I found _____ club."},
    {question:"During his midlife crisis, my dad got really into _____."},
    {question:"During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _____."},
    {question:"During sex, I like to think about _____."},
    {question:"Everyone down on the ground! We don't want to hurt anyone. We're just here for _____."},
    {question:"Finally! A service that delivers _____ right to your door."},
    {question:"He who controls _____ controls the world."},
    {question:"Hey baby, come back to my place and I’ll show you _____."},
    {question:"How am I maintaining my relationship status?"},
    {question:"I do not know with which weapons World War III will be fought, but World War IV will be fought with _____."},
    {question:"I drink to forget _____."},
    {question:"I got 99 problems but _____ ain't one."},
    {question:"I have an idea even better than Kickstarter, and it’s called _____starter."},
    {question:"I learned the hard way that you can't cheer up a grieving friend with _____."},
    {question:"I wish I hadn't lost the instruction manual for _____."},
    {question:"I'm sorry, Professor, but I couldn't complete my homework because of _____."},
    {question:"I’m not like the rest of you. I’m too rich and busy for _____."},
    {question:"In 1,000 years, when paper money is but a distant memory, _____ will be our currency."},
    {question:"In an attempt to reach a wider audience, the Royal Ontario Museum has opened an interactive exhibit on _____."},
    {question:"In an attempt to reach a wider audience, the Smithsonian Museum of Natural History has opened an interactive exhibit on _____."},
    {question:"In his new self-produced album, Kanye West raps over the sounds of _____."},
    {question:"In his newest and most difficult stunt, David Blaine must escape from _____."},
    {question:"In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _____."},
    {question:"In L.A. County Jail, word is you can trade 200 cigarettes for _____."},
    {question:"In Michael Jackson's final moments, he thought about _____."},
    {question:"In Rome, there are whisperings that the Vatican has a secret room devoted to _____."},
    {question:"In the distant future, historians will agree that _____ marked the beginning of America's decline."},
    {question:"In the final round of this year’s Omegathon, Omeganauts must face off in a game of _____."},
    {question:"In the new Disney Channel Original Movie, Hannah Montana struggles with _____ for the first time."},
    {question:"In the seventh circle of Hell, sinners must endure _____ for all eternity."},
    {question:"Instead of coal, Santa now gives the bad children _____."},
    {question:"It's a pity that kids these days are all getting involved with _____."},
    {question:"Life for American Indians was forever changed when the White Man introduced them to _____."},
    {question:"Life was difficult for cavemen before _____."},
    {question:"Little Miss Muffet Sat on a tuffet, Eating her curds and _____."},
    {question:"Lovin’ you is easy ’cause you’re _____."},
    {question:"Major League Baseball has banned _____ for giving players an unfair advantage."},
    {question:"Maybe she's born with it. Maybe it's _____."},
    {question:"Members of New York's social elite are paying thousands of dollars just to experience _____."},
    {question:"Money can’t buy me love, but it can buy me _____."},
    {question:"MTV's new reality show features eight washed-up celebrities living with _____."},
    {question:"My country, 'tis of thee, sweet land of _____."},
    {question:"My gym teacher got fired for adding _____ to the obstacle course."},
    {question:"My new favorite porn star is Joey '_____' McGee."},
    {question:"Next from J.K. Rowling: Harry Potter and the Chamber of _____."},
    {question:"Next on ESPN2, the World Series of _____."},
    {question:"Next time on Dr. Phil: How to talk to your child about _____."},
    {question:"O Canada, we stand on guard for _____."},
    {question:"Only two things in life are certain: death and _____."},
    {question:"Press (down)(down)(back)(forward)(B) to unleash _____."},
    {question:"Science will never explain the origin of _____."},
    {question:"Studies show that lab rats navigate mazes 50% faster after being exposed to _____."},
    {question:"test"},
    {question:"The blind date was going horribly until we discovered our shared interest in _____."},
    {question:"The CIA now interrogates enemy agents by repeatedly subjecting them to _____."},
    {question:"The class field trip was completely ruined by _____."},
    {question:"The Five Stages of Grief: denial, anger, bargaining, _____, acceptance."},
    {question:"The healing process began when I joined a support group for victims of _____."},
    {question:"The socialist governments of Scandinavia have declared that access to _____ is a basic human right."},
    {question:"The votes are in, and the new high school mascot is _____."},
    {question:"This is the way the world ends / This is the way the world ends / This is the way the world ends / Not with a bang but with _____."},
    {question:"This is your captain speaking. Fasten your seatbelts and prepare for _____."},
    {question:"This month's Cosmo: 'Spice up your sex life by bringing _____ into the bedroom.'"},
    {question:"This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _____ and his wits."},
    {question:"To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _____."},
    {question:"Tonight on 20/20: What you don't know about _____ could kill you."},
    {question:"TSA guidelines now prohibit _____ on airplanes."},
    {question:"Turns out that _____-Man was neither the hero we needed nor wanted."},
    {question:"War! What is it good for?"},
    {question:"What am I giving up for Lent?"},
    {question:"What are my parents hiding from me?"},
    {question:"What brought the orgy to a grinding halt?"},
    {question:"What did I bring back from Mexico?"},
    {question:"What did the U.S. airdrop to the children of Afghanistan?"},
    {question:"What did Vin Diesel eat for dinner?"},
    {question:"What do old people smell like?"},
    {question:"What does Dick Cheney prefer?"},
    {question:"What don't you want to find in your Chinese food?"},
    {question:"What ended my last relationship?"},
    {question:"What gets better with age?"},
    {question:"What gives me uncontrollable gas?"},
    {question:"What has been making life difficult at the nudist colony?"},
    {question:"What helps Obama unwind?"},
    {question:"What is Batman's guilty pleasure?"},
    {question:"What left this stain on my couch?"},
    {question:"What never fails to liven up the party?"},
    {question:"What will always get you laid?"},
    {question:"What will I bring back in time to convince people that I am a powerful wizard?"},
    {question:"What would grandma find disturbing, yet oddly charming?"},
    {question:"What's a girl's best friend?"},
    {question:"What's my anti-drug?"},
    {question:"What's my secret power?"},
    {question:"What's Teach for America using to inspire inner city students to succeed?"},
    {question:"What's that smell?"},
    {question:"What's that sound?"},
    {question:"What's the Canadian government using to inspire rural students to succeed?"},
    {question:"What's the crustiest?"},
    {question:"What's the gift that keeps on giving?"},
    {question:"What's the most emo?"},
    {question:"What's the new fad diet?"},
    {question:"What's the next Happy Meal® toy?"},
    {question:"What's the next superhero?"},
    {question:"What's there a ton of in heaven?"},
    {question:"When all else fails, I can always masturbate to _____."},
    {question:"When I am a billionare, I shall erect a 50-foot statue to commemorate _____."},
    {question:"When I am the President of the United States, I will create the Department of _____."},
    {question:"When I pooped, what came out of my butt?"},
    {question:"When I'm in prison, I'll have _____ smuggled in."},
    {question:"When Pharaoh remained unmoved, Moses called down a plague of _____."},
    {question:"While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _____."},
    {question:"White people like _____."},
    {question:"Who stole the cookies from the cookie jar?"},
    {question:"Why am I sticky?"},
    {question:"Why can't I sleep at night?"},
    {question:"Why do I hurt all over?"},
    {question:"You have been waylaid by _____ and must defend yourself."},
    {question:"_____ would be woefully incomplete without _____.",draw:2},
    {question:"_____ is a slippery slope that leads to _____.",draw:2},
    {question:"_____: Hours of fun. Easy to use. Perfect for _____!",draw:2},
    {question:"After months of practice with _____, I think I’m finally ready for _____.",draw:2},
    {question:"An international tribunal has found _____ guilty of _____.",draw:2},
    {question:"And the Academy Award for _____ goes to _____.",draw:2},
    {question:"Before _____, all we had was _____.",draw:2},
    {question:"CTV presents _____, the story of _____.",draw:2},
    {question:"Dear Sir or Madam, We regret to inform you that the Office of _____ has denied your request for _____.",draw:2},
    {question:"For my next trick, I will pull _____ out of _____.",draw:2},
    {question:"Having problems with _____? Try _____!",draw:2},
    {question:"I never truly understood _____ until I encountered _____.",draw:2},
    {question:"I spent my whole life working toward _____, only to have it ruined by _____.",draw:2},
    {question:"If God didn't want us to enjoy _____, he wouldn't have given us _____.",draw:2},
    {question:"In a pinch, _____ can be a suitable substitute for _____.",draw:2},
    {question:"In a world ravaged by _____, our only solace is _____.",draw:2},
    {question:"In his new summer comedy, Rob Schneider is _____ trapped in the body of _____.",draw:2},
    {question:"In M. Night Shyamalan's new movie, Bruce Willis discovers that _____ had really been _____ all along.",draw:2},
    {question:"Lifetime® presents _____, the story of _____.",draw:2},
    {question:"Listen, son. If you want to get involved with _____, I won’t stop you. Just steer clear of _____.",draw:2},
    {question:"Michael Bay's new three-hour action epic pits _____ against _____.",draw:2},
    {question:"My life is ruled by a vicious cycle of _____ and _____.",draw:2},
    {question:"My mom freaked out when she looked at my browser history and found _____.com/_____.",draw:2},
    {question:"Rumor has it that Vladimir Putin's favorite dish is _____ stuffed with _____.",draw:2},
    {question:"Step 1: _____. Step 2: _____. Step 3: Profit.",draw:2},
    {question:"That's right, I killed _____. How, you ask? _____.",draw:2},
    {question:"What's the next superhero/sidekick duo?",draw:2},
    {question:"When I was tripping on acid, _____ turned into _____.",draw:2},
    {question:"When you get right down to it, _____ is just _____.",draw:2},
    {question:"With enough time and pressure, _____ will turn into _____.",draw:2},
    {question:"You haven't truly lived until you've experienced _____ and _____ at the same time.",draw:2},
    {question:"_____ + _____ = _____.",pick:2,draw:3},
    {question:"I went from _____ to _____, all thanks to _____.",pick:2,draw:3},
    {question:"Make a haiku.",pick:2,draw:3}

    ];
}

function white() {
  return [
   {answer:"72 virgins"},
   {answer:"8 oz. of sweet Mexican black-tar heroin"},
   {answer:"A Bop It™"},
   {answer:"A Gypsy curse"},
   {answer:"A Super Soaker™ full of cat pee"},
   {answer:"A bag of magic beans"},
   {answer:"A balanced breakfast"},
   {answer:"A beached whale"},
   {answer:"A big black dick"},
   {answer:"A big hoopla about nothing"},
   {answer:"A bleached asshole"},
   {answer:"A bloody pacifier"},
   {answer:"A brain tumor"},
   {answer:"A can of whoop-ass"},
   {answer:"A clandestine butt scratch"},
   {answer:"A cooler full of organs"},
   {answer:"A crappy little hand"},
   {answer:"A death ray"},
   {answer:"A defective condom"},
   {answer:"A disappointing birthday party"},
   {answer:"A drive-by shooting"},
   {answer:"A falcon with a cap on its head"},
   {answer:"A fetus"},
   {answer:"A foul mouth"},
   {answer:"A gassy antelope"},
   {answer:"A gentle caress of the inner thigh"},
   {answer:"A good sniff"},
   {answer:"A homoerotic volleyball montage"},
   {answer:"A hot mess"},
   {answer:"A lifetime of sadness"},
   {answer:"A look-see"},
   {answer:"A low standard of living"},
   {answer:"A mating display"},
   {answer:"A micropenis"},
   {answer:"A middle-aged man on roller skates"},
   {answer:"A mime having a stroke"},
   {answer:"A moment of silence"},
   {answer:"A monkey smoking a cigar"},
   {answer:"A mopey zoo lion"},
   {answer:"A murder most foul"},
   {answer:"A nuanced critique"},
   {answer:"A passionate Latino lover"},
   {answer:"A really cool hat"},
   {answer:"A rival dojo"},
   {answer:"A robust mongoloid"},
   {answer:"A sad handjob"},
   {answer:"A salty surprise"},
   {answer:"A sassy black woman"},
   {answer:"A sausage festival"},
   {answer:"A sea of troubles"},
   {answer:"A snapping turtle biting the tip of your penis"},
   {answer:"A stray pube"},
   {answer:"A thermonuclear detonation"},
   {answer:"A time travel paradox"},
   {answer:"A tiny horse"},
   {answer:"A web of lies"},
   {answer:"A windmill full of corpses"},
   {answer:"A woman scorned"},
   {answer:"A zesty breakfast burrito"},
   {answer:"AIDS"},
   {answer:"AXE Body Spray"},
   {answer:"Aaron Burr"},
   {answer:"Active listening"},
   {answer:"Actually taking candy from a baby"},
   {answer:"Adderall™"},
   {answer:"African children"},
   {answer:"Agriculture"},
   {answer:"Alcoholism"},
   {answer:"All-you-can-eat shrimp for $4.99"},
   {answer:"Altar boys"},
   {answer:"American Gladiators"},
   {answer:"Amputees"},
   {answer:"An M. Night Shyamalan plot twist"},
   {answer:"An Oedipus complex"},
   {answer:"An asymmetric boob job"},
   {answer:"An erection that lasts longer than four hours"},
   {answer:"An honest cop with nothing left to lose"},
   {answer:"An icepick lobotomy"},
   {answer:"Anal beads"},
   {answer:"Another goddamn vampire movie"},
   {answer:"Apologizing"},
   {answer:"Appreciative snapping"},
   {answer:"Arnold Schwarzenegger"},
   {answer:"Asians who aren't good at math"},
   {answer:"Assless chaps"},
   {answer:"Attitude"},
   {answer:"Auschwitz"},
   {answer:"Authentic Mexican cuisine"},
   {answer:"Autocannibalism"},
   {answer:"BATMAN!!"},
   {answer:"Balls"},
   {answer:"Barack Obama"},
   {answer:"Beating your wives"},
   {answer:"Bees"},
   {answer:"Being a busy adult with many important things to do"},
   {answer:"Being a dick to children"},
   {answer:"Being a dinosaur"},
   {answer:"Being a motherfucking sorcerer"},
   {answer:"Being fabulous"},
   {answer:"Being marginalized"},
   {answer:"Being on fire"},
   {answer:"Being rich"},
   {answer:"Bill Nye the Science Guy"},
   {answer:"Bingeing and purging"},
   {answer:"Bitches"},
   {answer:"Black people"},
   {answer:"Bling"},
   {answer:"Booby-trapping the house to foil burglars"},
   {answer:"Boogers"},
   {answer:"Bosnian chicken farmers"},
   {answer:"Breaking out into song and dance"},
   {answer:"Britney Spears at 55"},
   {answer:"Cards Against Humanity"},
   {answer:"Carnies"},
   {answer:"Catapults"},
   {answer:"Centaurs"},
   {answer:"Chainsaws for hands"},
   {answer:"Charisma"},
   {answer:"Cheating in the Special Olympics"},
   {answer:"Child abuse"},
   {answer:"Child beauty pageants"},
   {answer:"Children on leashes"},
   {answer:"Chivalry"},
   {answer:"Christopher Walken"},
   {answer:"Chutzpah"},
   {answer:"Civilian casualties"},
   {answer:"Clams"},
   {answer:"Classist undertones"},
   {answer:"Coat hanger abortions"},
   {answer:"Cockfights"},
   {answer:"College"},
   {answer:"Concealing a boner"},
   {answer:"Consultants"},
   {answer:"Copping a feel"},
   {answer:"Coughing into a vagina"},
   {answer:"Count Chocula"},
   {answer:"Crippling debt"},
   {answer:"Crystal meth"},
   {answer:"Cuddling"},
   {answer:"Customer service representatives"},
   {answer:"Cybernetic enhancements"},
   {answer:"Daddy issues"},
   {answer:"Dancing with a broom"},
   {answer:"Darth Vader"},
   {answer:"Dead babies"},
   {answer:"Dead parents"},
   {answer:"Deflowering the princess"},
   {answer:"Dental dams"},
   {answer:"Dick Cheney"},
   {answer:"Dick fingers"},
   {answer:"Doin' it in the butt"},
   {answer:"Doing the right thing"},
   {answer:"Domino's™ Oreo™ Dessert Pizza"},
   {answer:"Dorito breath"},
   {answer:"Drinking alone"},
   {answer:"Dropping a chandelier on your enemies and riding the rope up"},
   {answer:"Dry heaving"},
   {answer:"Dwarf tossing"},
   {answer:"Dying of dysentery"},
   {answer:"Dying"},
   {answer:"Eating all of the cookies before the AIDS bake-sale"},
   {answer:"Eating an albino"},
   {answer:"Eating the last known bison"},
   {answer:"Edible underpants"},
   {answer:"Elderly Japanese men"},
   {answer:"Embryonic stem cells"},
   {answer:"Emotions"},
   {answer:"Enormous Scandinavian women"},
   {answer:"Erectile dysfunction"},
   {answer:"Estrogen"},
   {answer:"Ethnic cleansing"},
   {answer:"Eugenics"},
   {answer:"Euphoria™ by Calvin Klein"},
   {answer:"Exactly what you'd expect"},
   {answer:"Exchanging pleasantries"},
   {answer:"Expecting a burp and vomiting on the floor"},
   {answer:"Explosions"},
   {answer:"Fabricating statistics"},
   {answer:"Famine"},
   {answer:"Fancy Feast"},
   {answer:"Farting and walking away"},
   {answer:"Fear itself"},
   {answer:"Feeding Rosie O'Donnell"},
   {answer:"Fiery poops"},
   {answer:"Figgy pudding"},
   {answer:"Finding a skeleton"},
   {answer:"Finger painting"},
   {answer:"Fingering"},
   {answer:"Firing a rifle into the air while balls deep in a squealing hog"},
   {answer:"Five-Dollar Footlongs™"},
   {answer:"Flash flooding"},
   {answer:"Flesh-eating bacteria"},
   {answer:"Flightless birds"},
   {answer:"Flying sex snakes"},
   {answer:"Foreskin"},
   {answer:"Forgetting the Alamo"},
   {answer:"Former President George W. Bush"},
   {answer:"Free samples"},
   {answer:"Friction"},
   {answer:"Friendly fire"},
   {answer:"Friends who eat all the snacks"},
   {answer:"Friends with benefits"},
   {answer:"Frolicking"},
   {answer:"Full frontal nudity"},
   {answer:"Gandalf"},
   {answer:"Gandhi"},
   {answer:"Geese"},
   {answer:"Genetically engineered super-soldiers"},
   {answer:"Genghis Khan"},
   {answer:"Genital piercings"},
   {answer:"George Clooney's musk"},
   {answer:"German dungeon porn"},
   {answer:"Getting abducted by Peter Pan"},
   {answer:"Getting drunk on mouthwash"},
   {answer:"Getting in her pants, politely"},
   {answer:"Getting naked and watching Nickelodeon"},
   {answer:"Getting really high"},
   {answer:"Getting so angry that you pop a boner"},
   {answer:"Ghosts"},
   {answer:"Giving 110 percent"},
   {answer:"Gladiatorial combat"},
   {answer:"Glenn Beck being harried by a swarm of buzzards"},
   {answer:"Glenn Beck catching his scrotum on a curtain hook"},
   {answer:"Glenn Beck convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts"},
   {answer:"Global warming"},
   {answer:"Gloryholes"},
   {answer:"GoGurt"},
   {answer:"Goats eating cans"},
   {answer:"Goblins"},
   {answer:"God"},
   {answer:"Golden showers"},
   {answer:"Good grammar"},
   {answer:"Grandma"},
   {answer:"Grave robbing"},
   {answer:"Guys who don't call"},
   {answer:"Half-assed foreplay"},
   {answer:"Harry Potter erotica"},
   {answer:"Heartwarming orphans"},
   {answer:"Her Royal Highness, Queen Elizabeth II"},
   {answer:"Heteronormativity"},
   {answer:"Hipsters"},
   {answer:"Historical revisionism"},
   {answer:"Historically black colleges"},
   {answer:"Home video of Oprah sobbing into a Lean Cuisine"},
   {answer:"Homeless people"},
   {answer:"Hope"},
   {answer:"Hormone injections"},
   {answer:"Horrifying laser hair removal accidents"},
   {answer:"Horse meat"},
   {answer:"Hot Pockets"},
   {answer:"Hot cheese"},
   {answer:"Hot people"},
   {answer:"Hulk Hogan"},
   {answer:"Hurricane Katrina"},
   {answer:"Inappropriate yodeling"},
   {answer:"Incest"},
   {answer:"Insatiable bloodlust"},
   {answer:"Intelligent design"},
   {answer:"Italians"},
   {answer:"Jafar"},
   {answer:"Jean-Claude Van Damme"},
   {answer:"Jerking off into a pool of children's tears"},
   {answer:"Jew-fros"},
   {answer:"Jewish fraternities"},
   {answer:"Jibber-jabber"},
   {answer:"John Wilkes Booth"},
   {answer:"Judge Judy"},
   {answer:"Just the tip"},
   {answer:"Justin Bieber"},
   {answer:"Kamikaze pilots"},
   {answer:"Kanye West"},
   {answer:"Keanu Reeves"},
   {answer:"Keg stands"},
   {answer:"Kids with ass cancer"},
   {answer:"Kim Jong-il"},
   {answer:"Lactation"},
   {answer:"Lady Gaga"},
   {answer:"Lance Armstrong's missing testicle"},
   {answer:"Land mines"},
   {answer:"Laying an egg"},
   {answer:"Leaving an awkward voicemail"},
   {answer:"Leprosy"},
   {answer:"Leveling up"},
   {answer:"Licking things to claim them as your own"},
   {answer:"Literally eating shit"},
   {answer:"Lockjaw"},
   {answer:"Loose lips"},
   {answer:"Lumberjack fantasies"},
   {answer:"Lunchables™"},
   {answer:"Mad hacky-sack skills"},
   {answer:"Making a pouty face"},
   {answer:"Making the penises kiss"},
   {answer:"Man meat"},
   {answer:"Masturbation"},
   {answer:"Mathletes"},
   {answer:"Me time"},
   {answer:"MechaHitler"},
   {answer:"Media coverage"},
   {answer:"Medieval Times Dinner and Tournament"},
   {answer:"Men"},
   {answer:"Menstruation"},
   {answer:"Michael Jackson"},
   {answer:"Michelle Obama's arms"},
   {answer:"Moral ambiguity"},
   {answer:"Morgan Freeman's voice"},
   {answer:"Mouth herpes"},
   {answer:"Mr. Clean, right behind you"},
   {answer:"Muhammad (Praise Be Unto Him)"},
   {answer:"Multiple stab wounds"},
   {answer:"Mutually-assured destruction"},
   {answer:"My collection of high-tech sex toys"},
   {answer:"My genitals"},
   {answer:"My humps"},
   {answer:"My inner demons"},
   {answer:"My machete"},
   {answer:"My relationship status"},
   {answer:"My sex life"},
   {answer:"My soul"},
   {answer:"My vagina"},
   {answer:"Natalie Portman"},
   {answer:"Natural male enhancement"},
   {answer:"Natural selection"},
   {answer:"Nazis"},
   {answer:"Necrophilia"},
   {answer:"Neil Patrick Harris"},
   {answer:"New Age music"},
   {answer:"Nickelback"},
   {answer:"Nicolas Cage"},
   {answer:"Nipple blades"},
   {answer:"Nocturnal emissions"},
   {answer:"Not giving a shit about the Third World"},
   {answer:"Not reciprocating oral sex"},
   {answer:"Nubile slave boys"},
   {answer:"Obesity"},
   {answer:"Object permanence"},
   {answer:"Old-people smell"},
   {answer:"Ominous background music"},
   {answer:"One thousand Slim Jims"},
   {answer:"Oompa-Loompas"},
   {answer:"Opposable thumbs"},
   {answer:"Overcompensation"},
   {answer:"Overpowering your father"},
   {answer:"Oversized lollipops"},
   {answer:"Pabst Blue Ribbon"},
   {answer:"Pac-Man uncontrollably guzzling cum"},
   {answer:"Panda sex"},
   {answer:"Panty raids"},
   {answer:"Parting the Red Sea"},
   {answer:"Party poopers"},
   {answer:"Passable transvestites"},
   {answer:"Passing a kidney stone"},
   {answer:"Passive-aggressive Post-it notes"},
   {answer:"Pedophiles"},
   {answer:"Peeing a little bit"},
   {answer:"Penis envy"},
   {answer:"Picking up girls at the abortion clinic"},
   {answer:"Pictures of boobs"},
   {answer:"Pistol-whipping a hostage"},
   {answer:"Pixelated bukkake"},
   {answer:"Police brutality"},
   {answer:"Pooping back and forth. Forever"},
   {answer:"Poor life choices"},
   {answer:"Poor people"},
   {answer:"Poorly-timed Holocaust jokes"},
   {answer:"Porn stars"},
   {answer:"Powerful thighs"},
   {answer:"Prancing"},
   {answer:"Praying the gay away"},
   {answer:"Preteens"},
   {answer:"Pretending to care"},
   {answer:"Pterodactyl eggs"},
   {answer:"Puberty"},
   {answer:"Public ridicule"},
   {answer:"Pulling out"},
   {answer:"Puppies"},
   {answer:"Queefing"},
   {answer:"Quiche"},
   {answer:"Quivering jowls"},
   {answer:"Racially-biased SAT questions"},
   {answer:"Racism"},
   {answer:"Raptor attacks"},
   {answer:"Re-gifting"},
   {answer:"Repression"},
   {answer:"Republicans"},
   {answer:"Revenge fucking"},
   {answer:"Riding off into the sunset"},
   {answer:"Ripping into a man's chest and pulling out his still-beating heart"},
   {answer:"Road head"},
   {answer:"Robert Downey, Jr"},
   {answer:"RoboCop"},
   {answer:"Ronald Reagan"},
   {answer:"Roofies"},
   {answer:"Ryan Gosling riding in on a white horse"},
   {answer:"Same-sex ice dancing"},
   {answer:"Santa Claus"},
   {answer:"Sarah Palin"},
   {answer:"Saxophone solos"},
   {answer:"Scalping"},
   {answer:"Science"},
   {answer:"Scientology"},
   {answer:"Scrotum tickling"},
   {answer:"Scrubbing under the folds"},
   {answer:"Sean Connery"},
   {answer:"Sean Penn"},
   {answer:"Seduction"},
   {answer:"Self-loathing"},
   {answer:"Seppuku"},
   {answer:"Serfdom"},
   {answer:"Sexting"},
   {answer:"Sexual humiliation"},
   {answer:"Sexual tension"},
   {answer:"Sexy Siamese twins"},
   {answer:"Sexy pillow fights"},
   {answer:"Shaft"},
   {answer:"Shapeshifters"},
   {answer:"Shaquille O'Neal's acting career"},
   {answer:"Sharing needles"},
   {answer:"Skeletor"},
   {answer:"Slow motion"},
   {answer:"Smallpox blankets"},
   {answer:"Smegma"},
   {answer:"Sniffing glue"},
   {answer:"Soiling oneself"},
   {answer:"Soup that is too hot"},
   {answer:"Space muffins"},
   {answer:"Spectacular abs"},
   {answer:"Sperm whales"},
   {answer:"Spontaneous human combustion"},
   {answer:"Statistically validated stereotypes"},
   {answer:"Stephen Hawking talking dirty"},
   {answer:"Stifling a giggle at the mention of Hutus and Tutsis"},
   {answer:"Stranger danger"},
   {answer:"Sudden Poop Explosion Disease"},
   {answer:"Suicidal thoughts"},
   {answer:"Sunshine and rainbows"},
   {answer:"Surprise sex"},
   {answer:"Sweet, sweet vengeance"},
   {answer:"Switching to Geico"},
   {answer:"Swooping"},
   {answer:"Take-backsies"},
   {answer:"Taking off your shirt"},
   {answer:"Tangled Slinkys"},
   {answer:"Tasteful sideboob"},
   {answer:"Teaching a robot to love"},
   {answer:"Team-building exercises"},
   {answer:"Teenage pregnancy"},
   {answer:"Tentacle porn"},
   {answer:"Testicular torsion"},
   {answer:"That thing that electrocutes your abs"},
   {answer:"The American Dream"},
   {answer:"The Amish"},
   {answer:"The Big Bang"},
   {answer:"The Blood of Christ"},
   {answer:"The Care Bear Stare"},
   {answer:"The Chinese gymnastics team"},
   {answer:"The Dance of the Sugar Plum Fairy"},
   {answer:"The Donald Trump Seal of Approval™"},
   {answer:"The Fanta girls"},
   {answer:"The Force"},
   {answer:"The Gulags"},
   {answer:"The Hamburglar"},
   {answer:"The Holy Bible"},
   {answer:"The Hustle"},
   {answer:"The Jews"},
   {answer:"The KKK"},
   {answer:"The Kool-Aid Man"},
   {answer:"The Little Engine That Could"},
   {answer:"The Make-A-Wish Foundation"},
   {answer:"The Pope"},
   {answer:"The Rapture"},
   {answer:"The Rev. Dr. Martin Luther King, Jr"},
   {answer:"The South"},
   {answer:"The Tempur-Pedic Swedish Sleep System™"},
   {answer:"The Three-Fifths compromise"},
   {answer:"The Trail of Tears"},
   {answer:"The Underground Railroad"},
   {answer:"The Virginia Tech Massacre"},
   {answer:"The World of Warcraft"},
   {answer:"The boners of the elderly"},
   {answer:"The chronic"},
   {answer:"The clitoris"},
   {answer:"The economy"},
   {answer:"The folly of man"},
   {answer:"The forbidden fruit"},
   {answer:"The four arms of Vishnu"},
   {answer:"The gays"},
   {answer:"The glass ceiling"},
   {answer:"The hardworking Mexican"},
   {answer:"The harsh light of day"},
   {answer:"The heart of a child"},
   {answer:"The hiccups"},
   {answer:"The homosexual agenda"},
   {answer:"The inevitable heat death of the universe"},
   {answer:"The invisible hand"},
   {answer:"The milk man"},
   {answer:"The miracle of childbirth"},
   {answer:"The placenta"},
   {answer:"The profoundly handicapped"},
   {answer:"The shambling corpse of Larry King"},
   {answer:"The taint; the grundle; the fleshy fun-bridge"},
   {answer:"The terrorists"},
   {answer:"The token minority"},
   {answer:"The true meaning of Christmas"},
   {answer:"The violation of our most basic human rights"},
   {answer:"The Übermensch"},
   {answer:"Third base"},
   {answer:"Tom Cruise"},
   {answer:"Toni Morrison's vagina"},
   {answer:"Too much hair gel"},
   {answer:"Tripping balls"},
   {answer:"Tweeting"},
   {answer:"Two midgets shitting into a bucket"},
   {answer:"Unfathomable stupidity"},
   {answer:"Uppercuts"},
   {answer:"Vehicular manslaughter"},
   {answer:"Viagra"},
   {answer:"Vigilante justice"},
   {answer:"Vigorous jazz hands"},
   {answer:"Vikings"},
   {answer:"Waiting ‘til marriage"},
   {answer:"Waking up half-naked in a Denny's parking lot"},
   {answer:"Waterboarding"},
   {answer:"Wearing underwear inside-out to avoid doing laundry"},
   {answer:"When you fart and a little bit comes out"},
   {answer:"Whipping it out"},
   {answer:"White people"},
   {answer:"White privilege"},
   {answer:"Wifely duties"},
   {answer:"William Shatner"},
   {answer:"Winking at old people"},
   {answer:"Wiping her butt"},
   {answer:"Women in yogurt commercials"},
   {answer:"Women's suffrage"},
   {answer:"Words, words, words"},
   {answer:"World peace"},
   {answer:"YOU MUST CONSTRUCT ADDITIONAL PYLONS"},
   {answer:"Yeast"},
   {answer:"Zeus's sexual appetites"}
  ];
}
// generate initial data for white and black cards

var cards = getDeck();

for(var i = 0; i < cards.white.length; i ++){
  WhiteCard.create(cards.white[i], function(err, data){
  });
}

for(var i = 0; i < cards.black.length; i ++){
  BlackCard.create(cards.black[i], function(err, data){
  });
}
