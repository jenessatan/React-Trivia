db = db.getSiblingDB("trivia");
db.triviaItems.drop();
db.triviaItems.insertMany([
  {
  question: 'What gourmet ingredient used to be force-fed to prisoners and used as fertilizer?',
  answer: 'Lobster',
  category: 'Food',
  difficulty: 3
},{
  question: 'Who was the first Disney character to fart on-screen?',
  answer: 'Pumba (Lion King, 1994)',
  category: 'Disney',
  difficulty: 1
},
{
  question: 'When did Russia officially classify beer as an alcoholic beverage?',
  answer: '2011',
  category: 'Food',
  difficulty: 2
},
{
  question: 'What is the paper inside of a Hershey\'s Kiss called?',
  answer: 'A nigglywiggly',
  category: 'Food',
  difficulty: 5
}, 
{
  question: 'Who was the first Disney character to sing a duet with a villian?',
  answer: 'Anna (Frozen, 2013)',
  category: 'Disney',
  difficulty: 4
},
{
  question: 'What name did Walt Disney originally plan on giving Mickey Mouse?',
  answer: 'Mortimer',
  category: 'Disney',
  difficulty: 5
}])