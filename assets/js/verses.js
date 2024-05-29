
const verses = [
  {
    text: 'Above all, keep loving one another earnestly, since love covers a multitude of sins.',
    verse: '1 Peter 4:8 ESV'
  },
  {
    text: 'I can do all things through him who strengthens me.',
    verse: 'Philippians 4:13 ESV'
  },
  {
    text: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
    verse: 'Jeremiah 29:11 ESV'
  },
  {
    text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    verse: 'John 3:16 ESV'
  },
  {
    text: 'The Lord is my shepherd; I shall not want.',
    verse: 'Psalm 23:1 ESV'
  },
  {
    text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
    verse: 'Galatians 5:22-23 ESV'
  },
  {
    text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
    verse: 'Ephesians 2:8-9 ESV'
  },
  {
    text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    verse: 'Romans 8:28 NIV'
  },
  {
    text: 'The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.',
    verse: 'Numbers 6:24-26 ESV'
  },
  {
    text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
    verse: 'Joshua 1:9 NIV'
  },
  {
    text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
    verse: 'Psalm 27:1 ESV'
  },
  {
    text: 'But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
    verse: 'Isaiah 40:31 ESV'
  },
  {
    text: 'And Jesus said to him, ‘I am the way, and the truth, and the life. No one comes to the Father except through me.’',
    verse: 'John 14:6 ESV'
  },
  {
    text: 'In the beginning, God created the heavens and the earth.',
    verse: 'Genesis 1:1 ESV'
  },
  {
    text: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
    verse: 'Matthew 11:28 ESV'
  },
  {
    text: 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.',
    verse: '2 Corinthians 5:17 ESV'
  },
  {
    text: 'Rejoice in the Lord always; again I will say, Rejoice.',
    verse: 'Philippians 4:4 ESV'
  },
  {
    text: 'For we walk by faith, not by sight.',
    verse: '2 Corinthians 5:7 ESV'
  },
  {
    text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    verse: 'Lamentations 3:22-23 ESV'
  },
  {
    text: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
    verse: 'Philippians 4:6 ESV'
  },
  {
    text: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
    verse: 'Romans 8:38-39 ESV'
  },
  {
    text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
    verse: 'Galatians 2:20 ESV'
  },
  {
    text: 'This is the day that the Lord has made; let us rejoice and be glad in it.',
    verse: 'Psalm 118:24 ESV'
  },
  {
    text: 'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.',
    verse: 'Proverbs 3:5-6 ESV'
  },
  {
    text: 'I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.',
    verse: 'John 16:33 ESV'
  },
  {
    text: 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.',
    verse: 'Galatians 6:9 ESV'
  },
  {
    text: 'So now faith, hope, and love abide, these three; but the greatest of these is love.',
    verse: '1 Corinthians 13:13 ESV'
  },
  {
    text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
    verse: 'Matthew 6:33 ESV'
  },
  {
    text: 'Cast all your anxieties on him, because he cares for you.',
    verse: '1 Peter 5:7 ESV'
  },
  {
    text: 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.',
    verse: 'Joshua 1:9 ESV'
  },
  {
    text: 'For God gave us a spirit not of fear but of power and love and self-control.',
    verse: '2 Timothy 1:7 ESV'
  },
  {
    text: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
    verse: 'Matthew 5:16 ESV'
  },
  {
    text: 'Your word is a lamp to my feet and a light to my path.',
    verse: 'Psalm 119:105 ESV'
  },
  {
    text: 'So faith comes from hearing, and hearing through the word of Christ.',
    verse: 'Romans 10:17 ESV'
  },
  {
    text: 'But the Lord is faithful. He will establish you and guard you against the evil one.',
    verse: '2 Thessalonians 3:3 ESV'
  },
  {
    text: 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.',
    verse: 'Isaiah 26:3 ESV'
  },
  {
    text: 'Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.',
    verse: '1 John 2:15 ESV'
  },
  {
    text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
    verse: 'Romans 6:23 ESV'
  },
  {
    text: 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.',
    verse: '2 Corinthians 5:17 ESV'
  },
  {
    text: 'Jesus Christ is the same yesterday and today and forever.',
    verse: 'Hebrews 13:8 ESV'
  },
  {
    text: 'Therefore encourage one another and build one another up, just as you are doing.',
    verse: '1 Thessalonians 5:11 ESV'
  },
  {
    text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    verse: 'Romans 8:28 NIV'
  },
  {
    text: 'But God shows his love for us in that while we were still sinners, Christ died for us.',
    verse: 'Romans 5:8 ESV'
  },
  {
    text: 'The Lord is near to all who call on him, to all who call on him in truth.',
    verse: 'Psalm 145:18 ESV'
  },
  {
    text: 'Greater love has no one than this, that someone lay down his life for his friends.',
    verse: 'John 15:13 ESV'
  },
  {
    text: 'There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love.',
    verse: '1 John 4:18 ESV'
  },
  {
    text: 'The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.',
    verse: 'Psalm 18:2 ESV'
  },
  {
    text: 'Bear one another’s burdens, and so fulfill the law of Christ.',
    verse: 'Galatians 6:2 ESV'
  },
  {
    text: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
    verse: '1 John 1:9 ESV'
  },
  {
    text: 'And he said to them, ‘Go into all the world and proclaim the gospel to the whole creation.’',
    verse: 'Mark 16:15 ESV'
  },
  {
    text: 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
    verse: 'Isaiah 41:10 ESV'
  },
  {
    text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.',
    verse: '2 Timothy 1:7 NIV'
  },
  {
    text: 'The name of the Lord is a strong tower; the righteous man runs into it and is safe.',
    verse: 'Proverbs 18:10 ESV'
  },
  {
    text: 'He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?',
    verse: 'Micah 6:8 ESV'
  },
  {
    text: 'The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
    verse: 'Zephaniah 3:17 ESV'
  },
  {
    text: 'I sought the Lord, and he answered me and delivered me from all my fears.',
    verse: 'Psalm 34:4 ESV'
  },
  {
    text: 'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.',
    verse: 'Psalm 91:1 ESV'
  },
  {
    text: 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
    verse: '1 Corinthians 15:58 ESV'
  },
  {
    text: 'For God gave us a spirit not of fear but of power and love and self-control.',
    verse: '2 Timothy 1:7 ESV'
  },
  {
    text: 'Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.',
    verse: 'Ephesians 4:32 ESV'
  },
  {
    text: 'The light shines in the darkness, and the darkness has not overcome it.',
    verse: 'John 1:5 ESV'
  },
  {
    text: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
    verse: 'Philippians 4:7 ESV'
  },
  {
    text: 'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.',
    verse: 'Romans 12:2 ESV'
  },
  {
    text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
    verse: 'Psalm 28:7 ESV'
  },
  {
    text: 'He heals the brokenhearted and binds up their wounds.',
    verse: 'Psalm 147:3 ESV'
  },
  {
    text: 'For nothing will be impossible with God.',
    verse: 'Luke 1:37 ESV'
  },
  {
    text: 'Keep your heart with all vigilance, for from it flow the springs of life.',
    verse: 'Proverbs 4:23 ESV'
  },
  {
    text: 'For the Son of Man came to seek and to save the lost.',
    verse: 'Luke 19:10 ESV'
  },
  {
    text: 'You are the light of the world. A city set on a hill cannot be hidden.',
    verse: 'Matthew 5:14 ESV'
  },
  {
    text: 'The Lord will fight for you, and you have only to be silent.',
    verse: 'Exodus 14:14 ESV'
  },
  {
    text: 'No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.',
    verse: '1 Corinthians 10:13 ESV'
  },
  {
    text: 'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.',
    verse: 'Psalm 73:26 ESV'
  },
  {
    text: 'The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him.',
    verse: 'Nahum 1:7 ESV'
  },
  {
    text: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
    verse: 'Matthew 11:28 ESV'
  },
  {
    text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
    verse: 'Matthew 6:33 ESV'
  },
  {
    text: 'For God gave us a spirit not of fear but of power and love and self-control.',
    verse: '2 Timothy 1:7 ESV'
  },
  {
    text: 'Let love be genuine. Abhor what is evil; hold fast to what is good.',
    verse: 'Romans 12:9 ESV'
  },
  {
    text: 'Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.',
    verse: 'Deuteronomy 31:6 ESV'
  },
  {
    text: 'But he said, ‘What is impossible with man is possible with God.’',
    verse: 'Luke 18:27 ESV'
  },
  {
    text: 'The Lord is my shepherd; I shall not want.',
    verse: 'Psalm 23:1 ESV'
  },
  {
    text: 'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
    verse: '1 Thessalonians 5:16-18 ESV'
  },
  {
    text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
    verse: 'Galatians 2:20 ESV'
  },
  {
    text: 'I sought the Lord, and he answered me and delivered me from all my fears.',
    verse: 'Psalm 34:4 ESV'
  },
  {
    text: 'Therefore encourage one another and build one another up, just as you are doing.',
    verse: '1 Thessalonians 5:11 ESV'
  },
  {
    text: 'Your word is a lamp to my feet and a light to my path.',
    verse: 'Psalm 119:105 ESV'
  },
  {
    text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    verse: 'John 3:16 ESV'
  },
  {
    text: 'So now faith, hope, and love abide, these three; but the greatest of these is love.',
    verse: '1 Corinthians 13:13 ESV'
  },
  {
    text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
    verse: 'Psalm 28:7 ESV'
  },
  {
    text: 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.',
    verse: 'Galatians 6:9 ESV'
  }
];