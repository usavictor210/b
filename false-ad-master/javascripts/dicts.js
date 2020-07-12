const dimAchievements = {
  1: 'You gotta start somewhere',
  2: '100 antimatter is a lot',
  3: 'Half life 3 confirmed',
  4: 'L4D: Left 4 Dimensions',
  5: '5 Dimension Antimatter Punch',
  6: 'Perfect Dimension',
  7: 'Not a luck-related achievement',
  8: '90 degrees to infinity',
  9: 'The 9th dimension isn\'t a lie',
  10: 'String theory was right',
  11: 'Palindrome Dimension',
  12: 'I am running out of ideas here',
  13: 'NEW DIMENSIONS?',
  14: 'Doubly lucky',
  15: 'TODO: write achievement description',
  16: '4865786564 2044696d65 6e73696f6e'
}

const AchievementsText = [
  [
    {'text': 'You gotta start somewhere', 'tooltip': 'Buy a single First Dimension.'},
    {'text': '100 antimatter is a lot', 'tooltip': 'Buy a single Second Dimension.'},
    {'text': 'Half life 3 confirmed', 'tooltip': 'Buy a single Third Dimension.'},
    {'text': 'L4D: Left 4 Dimensions', 'tooltip': 'Buy a single Fourth Dimension.'},
    {'text': '5 Dimension Antimatter Punch', 'tooltip': 'Buy a single Fifth Dimension.'},
    {'text': 'Perfect Dimension', 'tooltip': 'Buy a single Sixth Dimension.'}
  ], [
    {'text': 'Not a luck-related achievement', 'tooltip': 'Buy a single Seventh Dimension.'},
    {'text': '90 degrees to infinity', 'tooltip': 'Buy a single Eighth Dimension.'},
    {'text': 'The 9th dimension isn\'t a lie', 'tooltip': 'Buy a single Ninth Dimension.'},
    {'text': 'String theory was right', 'tooltip': 'Buy a single Tenth Dimension.'},
    {'text': 'Palindrome Dimension', 'tooltip': 'Buy a single Eleventh Dimension.'},
    {'text': 'I am running out of ideas here', 'tooltip': 'Buy a single Twelfth Dimension.'},
  ], [
    {'text': 'To infinity!', 'tooltip': 'Big Crunch. Reward: Start with 100 antimatter.'},
    {'text': "Don't you dare sleep", 'tooltip': 'Be offline for over 6 hours in a row.'},
    {'text': 'Antimatter Apocalypse', 'tooltip': 'Get over 10 QtVg (1e80) antimatter.'},
    {'text': "There's no point in doing that", 'tooltip': 'Buy a single First Dimension when you have over 1e150 of them. Reward: First Dimensions are 10% stronger.'},
    {'text': 'I forgot to nerf that', 'tooltip': 'Get any Dimension multiplier over 10 No (10e30). Reward: First Dimensions are 5% stronger.'},
    {'text': "That's a lot of infinities", 'tooltip': 'Get 10 infinities. Reward: Exceeding 1.79e308 antimatter will no longer cover the entire screen with the Big Crunch text, you stay on your current tab after a Big Crunch, and Infinity upgrades  '}
  ], [
    {'text': "You didn't need it anyway", 'tooltip': 'Big Crunch without having any 12th Dimensions. Reward: Dimensions 1-11 are 2% stronger.'},
    {'text': 'One for each dimension', 'tooltip': 'Play for 12 hours. Reward: Dimensions gain an extremely small time multiplier.'},
    {'text': "That's fast!", 'tooltip': 'Big Crunch in under 2 hours. Reward: Start with 1,000 antimatter.'},
    {'text': 'Fake News', 'tooltip': 'Encounter 10 different news messages.'},
    {'text': 'Supersanic', 'tooltip': 'Get over 1e63 antimatter.'},
    {'text': 'Zero Deaths', 'tooltip': 'Big Crunch without Dimension Shifts. Reward: Dimensions 1-4 are 25% stronger.'}
  ], [
    {'text': 'Over in 30 seconds', 'tooltip': 'Have antimatter/sec exceed your current antimatter for 30 consecutive seconds.'},
    {'text': 'Faster than a potato', 'tooltip': 'Get more than 100 Sx (1e23) ticks per second. Reward: Reduce the starting tick interval by 2%.'},
    {'text': 'Multidimensional', 'tooltip': 'Reach 1 T (1e12) of all dimensions except 16th'},
    {'text': 'Daredevil', 'tooltip': 'Complete a challenge.'},
    {'text': 'AntiChallenged', 'tooltip': 'Complete all the challenges. Reward: All dimensions are 10% stronger.'},
    {'text': 'The 9th dimension can be a lie', 'tooltip': 'Big Crunch without having any 9th to 12th Dimensions. Reward: Dimensions 1-8 are 2% stronger.'}
  ], [
    {'text': 'Limit Break', 'tooltip': 'Break Infinity'},
    {'text': 'Age of Automation', 'tooltip': 'Max any 10 autobuyers.'},
    {'text': 'Definitely not worth it', 'tooltip': 'Max all the autobuyers.'},
    {'text': 'Hyper is enough', 'tooltip': 'Reach infinity with only the Hyper Autobuyer on and without clicking anything.'},
    {'text': "That's faster!", 'tooltip': 'Infinity in 10 minutes or less. Reward: Start with 200,000 antimatter.'},
    {'text': "Forever isn't that long", 'tooltip': 'Infinity in 1 minute or less. Reward: Start with 1e10 antimatter.'}
  ], [
    {'text': 'Many Deaths', 'tooltip': 'Complete the Second Dimension Autobuyer challenge in 3 minutes or less. Reward: All dimensions are stronger in the first 3 minutes of an Infinity.'},
    {'text': 'Gift from the Gods', 'tooltip': 'Complete the Eighth Dimension Autobuyer challenge in 3 minutes or less. Reward: Dimension boosts are somewhat stronger'},
    {'text': 'Is this hell?', 'tooltip': 'Complete the Tickspeed Autobuyer challenge in 3 minutes or less. Reward: Boost per 10 dimensions is multiplied by 1.01.'},
    {'text': 'Bulked up', 'tooltip': 'Get all of your dimension bulk buyers to 512 or higher.'},
    {'text': "Oh hey, you're still here", 'tooltip': 'Reach 1e8 IP per minute.'},
    {'text': 'Not-so-challenging', 'tooltip': 'Get the sum of all of your challenge times under 3 minutes. Reward: All dimensions are stronger in first 3 minutes of infinity, but only in challenges.'}
  ], [
    {'text': 'NEW DIMENSIONS?', 'tooltip': 'Buy a single 13th Dimension.'},
    {'text': 'Doubly lucky', 'tooltip': 'Buy a single 14th Dimension.'},
    {'text': 'TODO: write achievement description', 'tooltip': 'Buy a single 15th Dimension.'},
    {'text': '4865786564 2044696d65 6e73696f6e', 'tooltip': 'Buy a single 16th Dimension.'},
    {'text': 'Faster than a squared potato', 'tooltip': 'Reach 1e52 ticks per second. Reward: Reduce the starting tick interval by 4%'},
    {'text': 'You did this again just for the achievement right?', 'tooltip': 'Complete the Third Dimension Autobuyer challenge in 10 seconds or less. Reward: First Dimensions are 50% stronger.'},
  ], [
    {'text': 'ERROR 909: Dimension not found', 'tooltip': 'Get to infinity with only a single first Dimension and nothing else. Reward: First Dimensions are 3 times stronger.'},
    {'text': "Can't hold all these infinities", 'tooltip': 'Get all Dimension multipliers over 1e308. Reward: All dimensions are 10% stronger.'},
    {'text': "This achievement doesn't exist", 'tooltip': 'Get 17.1717e1717 antimatter. Reward: Dimensions are more powerful based on your antimatter amount.'},
    {'text': 'End me', 'tooltip': 'Get the sum of all best challenge times under 5 seconds. Reward: All dimensions are 40% stronger in challenges.'},
    {'text': 'Spreading Cancer', 'tooltip': 'Reach Infinity 10 times while using cancer notation.'},
    {'text': 'How the antitables have turned', 'tooltip': 'Get 16th Dimension multiplier to be highest, 15th Dimension multiplier second highest etc. Reward: Each dimension gains a boost proportional to their tier (16th dimension gets 16%, 15th gets 15%, etc.)'},
  ], [
    {'text': 'Blink of an eye', 'tooltip': 'Get to Infinity in under 200 milliseconds. Reward: Start with 1e25 antimatter, and all dimensions are stronger in the first 300ms of an Infinity.'},
    {'text': 'Challenge Break', 'tooltip': 'Break infinity in a challenge.'},
    {'text': 'Super-antichallenged', 'tooltip': 'Get at least 10 IP in every challenge.'},
    {'text': 'You can get 289 16th dimensions!??', 'tooltip': 'Get exactly 289 16th dimensions. Reward: Tickspeed decreases by 1% for every 16th Dimension you have.'},
    {'text': 'I got a few to spare', 'tooltip': 'Reach 1e35000 antimatter. Reward: Dimensions are more powerful based on your antimatter amount.'},
    {'text': 'All your IP are belong to us', 'tooltip': 'Big Crunch for 1e150 IP. Reward: Additional 4x multiplier to IP'}
  ], [
    {'text': '2 Million Infinities', 'tooltip': 'Infinity 2000000 times. Reward: Infinities more than 5 seconds long give 250 infinitied stat.'},
    {'text': 'Ludicrous Speed', 'tooltip': 'Big Crunch for 1e200 IP in 2 seconds or less. Reward: All dimensions are significantly stronger in the first 5 seconds of an Infinity.'},
    {'text': 'I brake for nobody', 'tooltip': 'Big Crunch for 1e250 IP in 20 seconds or less. Reward: All dimensions are significantly stronger in the first 60 seconds of an Infinity.'},
    {'text': 'MAXIMUM OVERDRIVE', 'tooltip': 'Reach 1e300 IP/min. Reward: Gain an additional 4x multiplier to IP.'},
    {'text': 'Boosting to the max', 'tooltip': 'Get 100 tickspeed boosts.'},
    {'text': "This achievement doesn't exist II", 'tooltip': 'Reach 17.1717e1717 IP. Reward: Gain more IP based on amount of antimatter you had when crunching.'}
  ], [
    {'text': 'Time is relative', 'tooltip': 'Go Eternal.'},
    {'text': 'Fast is also relative', 'tooltip': 'Eternity in under 2 hours. Reward: Start eternities with 1e5 IP.'},
    {'text': 'How can a theorem be relative?', 'tooltip': 'Buy a single Time Theorem'},
    {'text': 'This mile took an Eternity', 'tooltip': 'Get all eternity milestones. Reward: Gain a small bonus to time dimensions based on amount eternitied.'},
    {'text': "That wasn't an eternity", 'tooltip': 'Eternity in under 30 seconds. Reward: Start eternities with 2e25 IP.'},
    {'text': 'EVEN MORE DIMENSIONS?', 'tooltip': 'Buy a single First Time Dimension.'}
  ], [
    {'text': 'Infinite time', 'tooltip': 'Get 308 tickspeed upgrades (in one eternity) from Time Dimensions. Reward: Time Dimensions are affected slightly more by tickspeed.'},
    {'text': 'Do you really need a guide for this?', 'tooltip': 'Eternity with the infinitied stat under 10.'},
    {'text': 'Infinity is eternity', 'tooltip': 'Eternity on your first infinity.'},
    {'text': '90 degrees to eternity', 'tooltip': 'Eternity on your first infinity with only Dimensions 1-8.'},
    {'text': 'The 9th dimension was never a lie, the 9th dimension will never be a lie', 'tooltip': 'Buy a single Ninth Time Dimension.'},
    {'text': 'Time for a break', 'tooltip': 'Break Eternity. Reward: Win the game (if that is even possible).'}
  ]
];

const challengeList = [
  'challenge-1', 'challenge-2', 'challenge-3', 'challenge-4',
  'challenge-5', 'challenge-6', 'challenge-7', 'challenge-8',
  'challenge-9', 'challenge-10', 'challenge-11', 'challenge-12',
  'challenge-13', 'challenge-14', 'challenge-15', 'challenge-16',
  'challenge-tickspeed', 'challenge-shift',
  'challenge-bigcrunch', 'challenge-hyper'
];

const challNameDict = {
  'tickspeed': 'Tickspeed Challenge',
  'shift': 'Dimension Shift Challenge',
  'bigcrunch': 'Big Crunch Challenge',
  'hyper': 'Hyper Challenge'
}

const infinityUpgrades = [
  [
    {
      "text": "Dimensions gain a multiplier based on time played in this save file.<br>Currently: {timeProdIncrease}x<br>Cost: 1 IP",
      "name": "prodIncrease",
      "cost": 1
    },
    {
      "text": "Increase the multiplier for buying 10 Dimensions <br>2x -> 2.2x<br>Cost: 1 IP",
      "name": "multIncrease",
      "cost": 1
    },
    {
      "text": "Dimensions gain a multiplier based on the time spent in this Infinity.<br>Currently: {currProdIncrease}x<br>Cost: 3 IP",
      "name": "currProdIncrease",
      "cost": 3
    },
    {
      "text": "You start with the 5th Dimension<br>Cost: 20 IP",
      "name": "5dim",
      "cost": 20
    }
  ],
  [
    {
      "text": "The First and Eighth Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 1 IP",
      "name": "1infStat",
      "cost": 1
    },
    {
      "text": "The Second and Seventh Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 1 IP",
      "name": "2infStat",
      "cost": 1
    },
    {
      "text": "The 1st Dimension is stronger based on your unspent IP.<br>Currently: {unspentBonus}x<br>Cost: 5 IP",
      "name": "1dimBonus",
      "cost": 5
    },
    {
      "text": "You start with the 6th Dimension<br>Cost: 40 IP",
      "name": "6dim",
      "cost": 40
    }
  ],
  [
    {
      "text": "The Third and Sixth Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 1 IP",
      "name": "3infStat",
      "cost": 1
    },
    {
      "text": "The Fourth and Fifth Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 1 IP",
      "name": "4infStat",
      "cost": 1
    },
    {
      "text": "The multiplier from Dimension Shifts to your Dimensions increases by 0.5<br>({dimShiftPower} -> {newDimShiftPower})<br>Cost: 7 IP",
      "name": "dimShiftInc1",
      "cost": 7
    },
    {
      "text": "You start with the 7th Dimension<br>Cost: 80 IP",
      "name": "7dim",
      "cost": 80
    }
  ],
  [
    {
      "text": "Decrease the number of Dimensions needed for a Dimension Shift by 9<br>Cost: 1 IP",
      "name": "dimResetDecrease1",
      "cost": 1
    },
    {
      "text": "Tickspeed Boosts are twice as effective<br>({tickspeedBoostPower} -> {twiceTickspeedBoostPower})<br>Cost: 2 IP",
      "name": "tickspeedBoostInc1",
      "cost": 2
    },
    {
      "text": "You generate IP based on your fastest infinity time*10 (1 IP/10 times as your current fastest infinity time)<br>Currently: {tenTimesFastest}<br>Cost: 10 IP",
      "name": "infAuto1",
      "cost": 10
    },
    {
      "text": "You start with the 8th Dimension<br>Cost: 160 IP",
      "name": "8dim",
      "cost": 160
    }
  ],
  [
    {
      "text": "The Ninth and 16th Dimensions gains a multiplier based on your infinities<br>Currently: {infinitied}x<br>Cost: 12 IP",
      "name": "9infStat",
      "cost": 12
    },
    {
      "text": "The Tenth and 15th Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 12 IP",
      "name": "10infStat",
      "cost": 12
    },
    {
      "text": "All dimensions are 1.1x more powerful for every completed challenge.<br>Currently: {challengeBonus}x<br>Cost: 200 IP",
      "name": "challengeBonus",
      "cost": 200
    },
    {
      "text": "You start with the 9th Dimension<br>Cost: 320 IP",
      "name": "9dim",
      "cost": 320
    }
  ],
  [
    {
      "text": "The Eleventh and 14th Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 12 IP",
      "name": "11infStat",
      "cost": 12
    },
    {
      "text": "The Twelfth and 13th Dimensions gain a multiplier based on your infinities.<br>Currently: {infinitied}x<br>Cost: 12 IP",
      "name": "12infStat",
      "cost": 12
    },
    {
      "text": "The multiplier from Dimension Shifts to your Dimensions increases by another 0.5<br>({dimShiftPower} -> {newDimShiftPower})<br>Cost: 500 IP",
      "name": "dimShiftInc2",
      "cost": 500
    },
    {
      "text": "You start with the 10th Dimension<br>Cost: 640 IP",
      "name": "10dim",
      "cost": 640
    }
  ],
  [
    {
      "text": "The 1st Infinity upgrade is more effective in terms of time (time is counted twice as long).<br>Cost: 1K IP",
      "name": "timeLonger",
      "cost": 1000
    },
    {
      "text": "The multiplier for 10 dimensions is at least ln(ln(infinitied))<br>Currently: {lnLnInfinitied}<br>Cost: 10K IP",
      "name": "mulLn",
      "cost": 10000
    },
    {
      "text": "All dimensions gain a 1.1x multiplier for every completed achievement (in addition to other achievement bonuses)<br>Currently: {achBonus}x<br>Cost: 2K IP",
      "name": "achBonus",
      "cost": 2000
    },
    {
      "text": "You start with the 11th Dimension<br>Cost: 1280 IP",
      "name": "11dim",
      "cost": 1280
    }
  ],
  [
    {
      "text": "Further decrease the number of Dimensions needed for Dimension Shifts by 1<br>Cost: 10K IP",
      "name": "dimResetDecrease2",
      "cost": 10000
    },
    {
      "text": "Tickspeed Boosts are twice as effective<br>({tickspeedBoostPower} -> {twiceTickspeedBoostPower})<br>Cost: 20K IP",
      "name": "tickspeedBoostInc2",
      "cost": 20000
    },
    {
      "text": "You generate IP based on your fastest infinity time (1 every fastest infinity)<br>Currently: {fastest}<br>Cost: 50K IP",
      "name": "infAuto2",
      "cost": 50000
    },
    {
      "text": "You start with the 12th Dimension<br>Cost: 2560 IP",
      "name": "12dim",
      "cost": 2560
    }
  ],
  [
    {
      "text": "Percentages in Challenges 2 and 3 are multiplied by 100<br>Cost: 100K IP",
      "name": "percentMultiply",
      "cost": 100000
    },
    {
      "text": "Fourth-row upgrades apply to challenges<br>Cost: 100K IP",
      "name": "fourthChallenge",
      "cost": 100000
    },
    {
      "text": "Infinity can also be broken in challenges.<br>Cost: 1M IP",
      "name": "challengeBreak",
      "cost": 1000000
    },
    {
      "text": "Gain the ability to unlock new dimensions (up to the 16th dimension) (NOT WORKING)<br>Cost: 1M IP",
      "name": "newDimensions",
      "cost": 1000000
    }
  ]
];

const infinityUpgradesNameList = [].concat.apply([], infinityUpgrades).map(function (x) {
  return x.name;
});
