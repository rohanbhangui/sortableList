var users = [
  {id: 1, name:"Rohan Bhangui", age: 18},
  {id: 2, name:"Karan Bhangui", age: 23},
  {id: 3, name:"Greg Methvin", age: 23},
  {id: 4, name:"Harvey Multani", age: 26},
  {id: 5, name:"Safa Tarik", age: 23},
  {id: 6, name:"Jack Attack", age: 19},
  {id: 7, name:"Ikea Summer", age: 45}
];

var data = [
  {
    assets:"$101,686,744,000",
    name:"Union Bank, National Association",
    address:"400 California Street",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:"www.unionbank.com",
    county:"San Francisco",
    parent:"Mitsubishi Ufj Financial Group, Inc.",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$63,529,654,000",
    name:"Bank of the West",
    address:"180 Montgomery Street",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:"www.bankofthewest.com",
    county:"San Francisco",
    parent:"Bnp Paribas",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$37,312,741,000",
    name:"First Republic Bank",
    address:"111 Pine Street",
    city:"San Francisco",
    state:"California",
    zip:94111,
    url:"www.firstrepublic.com",
    county:"San Francisco",
    parent:"\n",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$27,175,000,000",
    name:"Bank of America California, National Association",
    address:"555 California Street",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:" ",
    county:"San Francisco",
    parent:"Bank Of America Corporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$27,033,551,000",
    name:"City National Bank",
    address:"400 North Roxbury Drive",
    city:"Beverly Hills",
    state:"California",
    zip:90210,
    url:"http://cnb.com",
    county:"Los Angeles",
    parent:"City National Corporation",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$25,421,057,000",
    name:"OneWest Bank, FSB",
    address:"888 E. Walnut Street",
    city:"Pasadena",
    state:"California",
    zip:91101,
    url:"www.owb.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$23,300,217,000",
    name:"East West Bank",
    address:"135 N. Los Robles Avenue, 7th Floor",
    city:"Pasadena",
    state:"California",
    zip:91101,
    url:"http://www.eastwestbank.com",
    county:"Los Angeles",
    parent:"East West Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$20,872,490,000",
    name:"Silicon Valley Bank",
    address:"3003 Tasman Drive",
    city:"Santa Clara",
    state:"California",
    zip:95054,
    url:"www.svb.com",
    county:"Santa Clara",
    parent:"Svb Financial Group",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$13,698,000,000",
    name:"Rabobank, National Association",
    address:"915 Highland Pointe Drive, Suite 350",
    city:"Roseville",
    state:"California",
    zip:95678,
    url:"www.rabobankamerica.com",
    county:"Placer",
    parent:"Cooperatieve Centrale Raiffeisen-Boerenleenbank B.A., \"rabobank Nederland\"",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$10,839,704,000",
    name:"California Bank & Trust",
    address:"11622 El Camino Real, Suite 200",
    city:"San Diego",
    state:"California",
    zip:92130,
    url:"http://www.calbanktrust.com",
    county:"San Diego",
    parent:"Zions Bancorporation",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$10,589,063,000",
    name:"Cathay Bank",
    address:"777 North Broadway Street",
    city:"Los Angeles",
    state:"California",
    zip:90012,
    url:"www.cathaybank.com",
    county:"Los Angeles",
    parent:"Cathay General Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$9,981,372,000",
    name:"JPMorgan Bank and Trust Company, National Association",
    address:"560 Mission Street",
    city:"San Francisco",
    state:"California",
    zip:94105,
    url:" ",
    county:"San Francisco",
    parent:"Jpmorgan Chase & Co.",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$7,812,146,000",
    name:"CapitalSource Bank",
    address:"633 West Fifth Street",
    city:"Los Angeles",
    state:"California",
    zip:90071,
    url:"www.capitalsourcebank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$6,701,617,000",
    name:"Pacific Western Bank",
    address:"10250 Constellation Boulevard",
    city:"Los Angeles",
    state:"California",
    zip:90067,
    url:"WWW.PACIFICWESTERNBANK.COM",
    county:"Los Angeles",
    parent:"Capgen Capital Group Ii Lp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$6,421,094,000",
    name:"Citizens Business Bank",
    address:"701 North Haven Avenue",
    city:"Ontario",
    state:"California",
    zip:91764,
    url:"http://www.cbbank.com",
    county:"San Bernardino",
    parent:"Cvb Financial Corp.",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$5,859,610,000",
    name:"BBCN Bank",
    address:"3731 Wilshire Boulevard, Suite 1000",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://bbcnbank.com",
    county:"Los Angeles",
    parent:"Bbcn Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$5,146,143,000",
    name:"Farmers and Merchants Bank of Long Beach",
    address:"302 Pine Avenue",
    city:"Long Beach",
    state:"California",
    zip:90802,
    url:"www.fmb.com",
    county:"Los Angeles",
    parent:"Palomar Enterprises, Llc",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$4,774,897,000",
    name:"Westamerica Bank",
    address:"1108 Fifth Avenue",
    city:"San Rafael",
    state:"California",
    zip:94901,
    url:"WWW.WESTAMERICA.COM",
    county:"Marin",
    parent:"Westamerica Bancorporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$3,599,223,000",
    name:"Luther Burbank Savings",
    address:"804 4th Street",
    city:"Santa Rosa",
    state:"California",
    zip:95404,
    url:"www.lutherburbanksavings.com",
    county:"Sonoma",
    parent:" ",
    region:"Santa Rosa, CA"
  },
  {
    assets:"$3,252,421,000",
    name:"Mechanics Bank",
    address:"3170 Hilltop Mall Road",
    city:"Richmond",
    state:"California",
    zip:94806,
    url:"www.mechanicsbank.com",
    county:"Contra Costa",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$3,190,074,000",
    name:"Opus Bank",
    address:"19900 Macarthur Blvd., 12th Floor",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"www.opusbank.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$3,172,519,000",
    name:"Community Bank",
    address:"790 East Colorado Boulevard",
    city:"Pasadena",
    state:"California",
    zip:91101,
    url:"www.cbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$3,088,864,000",
    name:"Bofi Federal Bank",
    address:"4350 La Jolla Village Drive, Suite 140",
    city:"San Diego",
    state:"California",
    zip:92122,
    url:"www.bofifederalbank.com",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$2,782,400,000",
    name:"Wilshire State Bank",
    address:"3200 Wilshire Boulevard",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://www.wilshirebank.com",
    county:"Los Angeles",
    parent:"Wilshire Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$2,768,560,000",
    name:"Hanmi Bank",
    address:"3660 Wilshire Boulevard, Suite A",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://www.hanmi.com",
    county:"Los Angeles",
    parent:"Hanmi Financial Corporation",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$2,586,693,000",
    name:"Tri Counties Bank",
    address:"63 Constitution Drive",
    city:"Chico",
    state:"California",
    zip:95973,
    url:"http://www.tcbk.com",
    county:"Butte",
    parent:"Trico Bancshares",
    region:"Chico, CA"
  },
  {
    assets:"$2,489,968,000",
    name:"Fremont Bank",
    address:"39150 Fremont Boulevard",
    city:"Fremont",
    state:"California",
    zip:94538,
    url:"http://www.fremontbank.com",
    county:"Alameda",
    parent:"Fremont Bancorporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$2,230,110,000",
    name:"Manufacturers Bank",
    address:"515 South Figueroa Street",
    city:"Los Angeles",
    state:"California",
    zip:90071,
    url:"http://manufacturers-ca.com",
    county:"Los Angeles",
    parent:"Sumitomo Mitsui Financial Group, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$2,124,106,000",
    name:"Bank of Stockton",
    address:"301 East Miner Avenue",
    city:"Stockton",
    state:"California",
    zip:95202,
    url:"www.bankofstockton.com",
    county:"San Joaquin",
    parent:"1867 Western Financial Corporation",
    region:"Stockton-Lodi, CA"
  },
  {
    assets:"$2,096,634,000",
    name:"Pacific Trust Bank, FSB",
    address:"18500 Von Karman Avenue",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"www.pactrustbank.com",
    county:"Orange",
    parent:"First Pactrust Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$2,031,757,000",
    name:"Torrey Pines Bank",
    address:"12220 El Camino Real, Suite 100",
    city:"San Diego",
    state:"California",
    zip:92130,
    url:"http://www.torreypinesbank.com",
    county:"San Diego",
    parent:"Western Alliance Bancorporation",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$2,006,279,000",
    name:"Farmers & Merchants Bank of Central California",
    address:"121 West Pine Street",
    city:"Lodi",
    state:"California",
    zip:95240,
    url:"www.fmbonline.com",
    county:"San Joaquin",
    parent:"Farmers & Merchants Bancorp",
    region:"Stockton-Lodi, CA"
  },
  {
    assets:"$1,941,375,000",
    name:"The Bank of New York Mellon Trust Company, National Association",
    address:"400 South Hope Street",
    city:"Los Angeles",
    state:"California",
    zip:90071,
    url:"www.bnymellon.com",
    county:"Los Angeles",
    parent:"Bank Of New York Mellon Corporation, The",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,812,107,000",
    name:"El Dorado Savings Bank, F.S.B.",
    address:"4040 El Dorado Road",
    city:"Placerville",
    state:"California",
    zip:95667,
    url:"http://www.eldoradosavingsbank.com",
    county:"El Dorado",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$1,702,503,000",
    name:"First American Trust, FSB",
    address:"5 First American Way, 3rd Floor",
    city:"Santa Ana",
    state:"California",
    zip:92707,
    url:"www.firstamtrust.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,688,193,000",
    name:"Exchange Bank",
    address:"545 Fourth Street",
    city:"Santa Rosa",
    state:"California",
    zip:95401,
    url:"http://www.exchangebank.com",
    county:"Sonoma",
    parent:"Frank P. Doyle Trust, Article Ix",
    region:"Santa Rosa, CA"
  },
  {
    assets:"$1,657,402,000",
    name:"Preferred Bank",
    address:"601 South Figueroa Street",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.preferredbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,554,290,000",
    name:"Pacific Premier Bank",
    address:"17901 Von Karman Ave Suite 1200",
    city:"Irvine",
    state:"California",
    zip:92614,
    url:"http://www.ppbi.com",
    county:"Orange",
    parent:"Pacific Premier Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,524,232,000",
    name:"Chinatrust Bank (U.S.A.)",
    address:"801 South Figueroa Street, Suite 2300",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.chinatrustusa.com",
    county:"Los Angeles",
    parent:"Ctbc Financial Holding Co., Ltd.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,464,447,000",
    name:"Bridge Bank, National Association",
    address:"55 Almaden Blvd",
    city:"San Jose",
    state:"California",
    zip:95113,
    url:"http://www.bridgebank.com",
    county:"Santa Clara",
    parent:"Carpenter Bank Partners, Inc.",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$1,428,466,000",
    name:"Bank of Marin",
    address:"504 Redwood Boulevard",
    city:"Novato",
    state:"California",
    zip:94947,
    url:"http://www.bankofmarin.com",
    county:"Marin",
    parent:"Bank Of Marin Bancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$1,415,090,000",
    name:"Banamex USA",
    address:"2029 Century Park East, Suite 4200",
    city:"Century City",
    state:"California",
    zip:90067,
    url:"http://www.BanamexUSA.com",
    county:"Los Angeles",
    parent:"Citigroup Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,397,042,000",
    name:"Heritage Bank of Commerce",
    address:"150 Almaden Boulevard",
    city:"San Jose",
    state:"California",
    zip:95113,
    url:"www.heritagebankofcommerce.com",
    county:"Santa Clara",
    parent:"Heritage Commerce Corp",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$1,375,355,000",
    name:"Bank of the Sierra",
    address:"90 North Main Street",
    city:"Porterville",
    state:"California",
    zip:93257,
    url:"www.bankofthesierra.com",
    county:"Tulare",
    parent:"Sierra Bancorp",
    region:"Visalia-Porterville, CA"
  },
  {
    assets:"$1,300,123,000",
    name:"American Business Bank",
    address:"523 West 6th Street, Suite 900",
    city:"Los Angeles",
    state:"California",
    zip:90014,
    url:"http://WWW.AMERICANBUSINESSBANK.COM",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,276,252,000",
    name:"California United Bank",
    address:"15821 Ventura Boulevard, Suite 100",
    city:"Encino",
    state:"California",
    zip:91436,
    url:"www.cunb.com",
    county:"Los Angeles",
    parent:"Cu Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,238,968,000",
    name:"Mizrahi Tefahot Bank, Ltd.",
    address:"800 Wilshire Boulevard, 14th Floor, Suite 1410",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:" ",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,238,176,000",
    name:"Grandpoint Bank",
    address:"355 South Grand Avenue. Suite 2400",
    city:"Los Angeles",
    state:"California",
    zip:90071,
    url:"www.grandpointbank.com",
    county:"Los Angeles",
    parent:"Grandpoint Capital, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,210,981,000",
    name:"Provident Savings Bank, F.S.B.",
    address:"3756 Central Ave",
    city:"Riverside",
    state:"California",
    zip:92506,
    url:"www.myprovident.com",
    county:"Riverside",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$1,168,223,000",
    name:"River City Bank",
    address:"2485 Natomas Park Drive",
    city:"Sacramento",
    state:"California",
    zip:95833,
    url:"www.rivercitybank.com",
    county:"Sacramento",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$1,160,956,000",
    name:"Far East National Bank",
    address:"977 N. Broadway",
    city:"Los Angeles",
    state:"California",
    zip:90012,
    url:"http://FAREASTNATIONALBANK.COM",
    county:"Los Angeles",
    parent:"Sinopac Financial Holdings Company Limited",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$1,095,022,000",
    name:"Heritage Oaks Bank",
    address:"545 Twelfth Street",
    city:"Paso Robles",
    state:"California",
    zip:93446,
    url:"http://www.heritageoaksbank.com",
    county:"San Luis Obispo",
    parent:"Heritage Oaks Bancorp",
    region:"San Luis Obispo-Paso Robles-Arroyo Grande, CA"
  },
  {
    assets:"$1,073,139,000",
    name:"Montecito Bank & Trust",
    address:"1000 State Street",
    city:"Santa Barbara",
    state:"California",
    zip:93101,
    url:"www.montecito.com",
    county:"Santa Barbara",
    parent:"Montecito Bancorp",
    region:"Santa Maria-Santa Barbara, CA"
  },
  {
    assets:"$952,647,000",
    name:"Redding Bank of Commerce",
    address:"1951 Churn Creek Road",
    city:"Redding",
    state:"California",
    zip:96002,
    url:"www.reddingbankofcommerce.com",
    county:"Shasta",
    parent:"Bank Of Commerce Holdings",
    region:"Redding, CA"
  },
  {
    assets:"$935,616,000",
    name:"Pacific Mercantile Bank",
    address:"949 South Coast Drive, 3rd. Floor",
    city:"Costa Mesa",
    state:"California",
    zip:92626,
    url:"http://www.pmbank.com",
    county:"Orange",
    parent:"Carpenter Bank Partners, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$928,583,000",
    name:"Savings Bank of Mendocino County",
    address:"200 North School Street",
    city:"Ukiah",
    state:"California",
    zip:95482,
    url:"WWW.SAVINGSBANK.COM",
    county:"Mendocino",
    parent:" ",
    region:"Ukiah, CA"
  },
  {
    assets:"$912,844,000",
    name:"North Valley Bank",
    address:"1327 South Street",
    city:"Redding",
    state:"California",
    zip:96001,
    url:"http://www.novb.com",
    county:"Shasta",
    parent:"North Valley Bancorp",
    region:"Redding, CA"
  },
  {
    assets:"$900,793,000",
    name:"First National Bank of Northern California",
    address:"6600 Mission Street",
    city:"Daly City",
    state:"California",
    zip:94014,
    url:"http://fnbnorcal.com",
    county:"San Mateo",
    parent:"Fnb Bancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$890,846,000",
    name:"First Foundation Bank",
    address:"18101 Von Karman Avenue, Suite 750",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"http://www.ff-inc.com",
    county:"Orange",
    parent:"First Foundation Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$870,482,000",
    name:"Central Valley Community Bank",
    address:"7100 N. Financial Drive, Suite101",
    city:"Fresno",
    state:"California",
    zip:93720,
    url:"www.cvcb.com",
    county:"Fresno",
    parent:"Central Valley Community Bancorp",
    region:"Fresno, CA"
  },
  {
    assets:"$868,268,000",
    name:"Malaga Bank F.S.B.",
    address:"2514 Via Tejon",
    city:"Palos Verdes Peninsula",
    state:"California",
    zip:90274,
    url:"www.malagabank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$867,335,000",
    name:"Simplicity Bank",
    address:"1359 N. Grand Avenue",
    city:"Covina",
    state:"California",
    zip:91724,
    url:"www.simplicitybank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$844,664,000",
    name:"First Northern Bank of Dixon",
    address:"195 North First Street",
    city:"Dixon",
    state:"California",
    zip:95620,
    url:"www.thatsmybank.com",
    county:"Solano",
    parent:"First Northern Community Bancorp",
    region:"Vallejo-Fairfield, CA"
  },
  {
    assets:"$774,374,000",
    name:"State Bank of India (California)",
    address:"707 Wilshire Boulevard, Suite 2900",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"www.sbical.com",
    county:"Los Angeles",
    parent:"State Bank Of India",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$737,284,000",
    name:"California Republic Bank",
    address:"18400 Von Karmen Ave, Ste 1100",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"http://crbnk.com",
    county:"Orange",
    parent:"California Republic Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$716,111,000",
    name:"1st Enterprise Bank",
    address:"818 West Seventh Street, Suite 220",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.1stenterprisebank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$712,249,000",
    name:"Royal Business Bank",
    address:"660 S. Figueroa Street, Suite 1888",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.royalbusinessbankusa.com",
    county:"Los Angeles",
    parent:"Rbb Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$680,841,000",
    name:"Pacific City Bank",
    address:"3701 Wilshire Boulevard, Suite 100",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://www.paccitybank.com",
    county:"Los Angeles",
    parent:"Pacific City Financial Corporation",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$679,833,000",
    name:"Sunwest Bank",
    address:"2050 Main Street",
    city:"Irvine",
    state:"California",
    zip:92614,
    url:"http://www.sunwestbank.com",
    county:"Orange",
    parent:"Western Acquisitions, L.L.c.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$678,317,000",
    name:"First Community Bank",
    address:"438 First Street",
    city:"Santa Rosa",
    state:"California",
    zip:95404,
    url:"http://www.fcbconnect.com",
    county:"Sonoma",
    parent:"First Community Holdings",
    region:"Santa Rosa, CA"
  },
  {
    assets:"$644,179,000",
    name:"Oak Valley Community Bank",
    address:"125 North Third Avenue",
    city:"Oakdale",
    state:"California",
    zip:95361,
    url:"http://www.ovcb.com",
    county:"Stanislaus",
    parent:"Oak Valley Bancorp",
    region:"Modesto, CA"
  },
  {
    assets:"$642,660,000",
    name:"Silvergate Bank",
    address:"4275 Executive Square, Suite800",
    city:"La Jolla",
    state:"California",
    zip:92037,
    url:"http://www.silvergatebank.com",
    county:"San Diego",
    parent:"Silvergate Capital Corporation",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$636,090,000",
    name:"United Security Bank",
    address:"2151 West Shaw Avenue",
    city:"Fresno",
    state:"California",
    zip:93711,
    url:"http://www.unitedsecuritybank.com",
    county:"Fresno",
    parent:"United Security Bancshares",
    region:"Fresno, CA"
  },
  {
    assets:"$613,199,000",
    name:"Pacific Coast Bankers' Bank",
    address:"1676 N. California Blvd., Suite 300",
    city:"Walnut Creek",
    state:"California",
    zip:94596,
    url:"http://www.pcbb.com",
    county:"Contra Costa",
    parent:"Pacific Coast Bankers' Bancshares",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$587,550,000",
    name:"REGENTS BANK, NATIONAL ASSOCIATION",
    address:"875 Prospect Street",
    city:"La Jolla",
    state:"California",
    zip:92037,
    url:"http://www.regentsbank.com",
    county:"San Diego",
    parent:"Grandpoint Capital, Inc.",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$578,032,000",
    name:"American River Bank",
    address:"1545 River Park Drive",
    city:"Sacramento",
    state:"California",
    zip:95815,
    url:"www.americanriverbank.com",
    county:"Sacramento",
    parent:"American River Bankshares",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$576,356,000",
    name:"EverTrust Bank",
    address:"2 North Lake Ave., Suite 1030",
    city:"Pasadena",
    state:"California",
    zip:91101,
    url:"http://www.evertrustbank.com",
    county:"Los Angeles",
    parent:"Industrial Bank Of Taiwan Co., Ltd.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$553,445,000",
    name:"Premier Valley Bank",
    address:"255 East River Park Circle Suite 180",
    city:"Fresno",
    state:"California",
    zip:93720,
    url:"WWW.PREMIERVALLEYBANK.COM",
    county:"Fresno",
    parent:" ",
    region:"Fresno, CA"
  },
  {
    assets:"$548,246,000",
    name:"Saehan Bank",
    address:"3580 Wilshire Boulevard, Suite 600",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://www.saehanbank.com",
    county:"Los Angeles",
    parent:"Saehan Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$540,886,000",
    name:"Five Star Bank",
    address:"6810 Five Star Boulevard",
    city:"Rocklin",
    state:"California",
    zip:95677,
    url:"http://fivestarbank.com",
    county:"Placer",
    parent:"Five Star Bancorp",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$539,472,000",
    name:"Scott Valley Bank",
    address:"515 South Broadway",
    city:"Yreka",
    state:"California",
    zip:96097,
    url:"http://www.scottvalleybank.com",
    county:"Siskiyou",
    parent:"Learner Financial Corporation",
    region:" "
  },
  {
    assets:"$532,785,000",
    name:"Community West Bank, National Association",
    address:"5827 Hollister Avenue",
    city:"Goleta",
    state:"California",
    zip:93117,
    url:"http://www.communitywestbank.com",
    county:"Santa Barbara",
    parent:"Community West Bancshares",
    region:"Santa Maria-Santa Barbara, CA"
  },
  {
    assets:"$519,679,000",
    name:"Commonwealth Business Bank",
    address:"3534 Wilshire Boulevard. Suite 700",
    city:"Los Angeles",
    state:"California",
    zip:90010,
    url:"http://www.cwbbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$512,200,000",
    name:"First General Bank",
    address:"1744 South Nogales Street",
    city:"Rowland Heights",
    state:"California",
    zip:91748,
    url:"http://www.firstgeneralbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$496,032,000",
    name:"Bank of Agriculture and Commerce",
    address:"2021 West March Lane",
    city:"Stockton",
    state:"California",
    zip:95202,
    url:"www.bankbac.com",
    county:"San Joaquin",
    parent:"Bac Financial Inc.",
    region:"Stockton-Lodi, CA"
  },
  {
    assets:"$491,494,000",
    name:"Plumas Bank",
    address:"336 West Main Street",
    city:"Quincy",
    state:"California",
    zip:95971,
    url:"http://www.plumasbank.com",
    county:"Plumas",
    parent:"Plumas Bancorp",
    region:" "
  },
  {
    assets:"$490,140,000",
    name:"Security Bank of California",
    address:"3403 Tenth Street, Suite 100",
    city:"Riverside",
    state:"California",
    zip:92501,
    url:"http://www.securitybankca.com",
    county:"Riverside",
    parent:"Security California Bancorp",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$489,304,000",
    name:"1st Century Bank,  National Association",
    address:"1875 Century Park East, Suite 1400",
    city:"Los Angeles",
    state:"California",
    zip:90067,
    url:"http://www.1cbank.com/",
    county:"Los Angeles",
    parent:"1st Century Bancshares, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$483,502,000",
    name:"First Commercial Bank (USA)",
    address:"200 East Main Street",
    city:"Alhambra",
    state:"California",
    zip:91801,
    url:"http://bankfcb.com",
    county:"Los Angeles",
    parent:"First Financial Holding Co., Ltd.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$481,240,000",
    name:"Bank of Manhattan, N.A.",
    address:"2141 Rosecrans Avenue, Suite 1160",
    city:"El Segundo",
    state:"California",
    zip:90245,
    url:"www.bankofmanhattan.com",
    county:"Los Angeles",
    parent:"Carpenter Bank Partners, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$466,477,000",
    name:"Bank of the Orient",
    address:"233 Sansome Street",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:"www.bankorient.com",
    county:"San Francisco",
    parent:"Orient Bancorporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$466,231,000",
    name:"Bank of Sacramento",
    address:"1750 Howe Avenue, Suite 100",
    city:"Sacramento",
    state:"California",
    zip:95825,
    url:"http://www.bankofsacramento.com",
    county:"Sacramento",
    parent:"Greater Sacramento Bancorp",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$464,547,000",
    name:"California First National Bank",
    address:"28 Executive Park",
    city:"Irvine",
    state:"California",
    zip:92614,
    url:"WWW.CALFIRST.COM",
    county:"Orange",
    parent:"California First National Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$463,926,000",
    name:"Plaza Bank",
    address:"18200 Von Karman Avenue., Suite 500",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"http://www.plazabank.net",
    county:"Orange",
    parent:"Carpenter Bank Partners, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$460,733,000",
    name:"The Bank of Hemet",
    address:"3715 Sunnyside Drive",
    city:"Riverside",
    state:"California",
    zip:92506,
    url:"http://www.bankofhemet.com",
    county:"Riverside",
    parent:"Hemet Bancorp",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$456,824,000",
    name:"Metro United Bank",
    address:"7320 Clairemont Mesa Boulevard",
    city:"San Diego",
    state:"California",
    zip:92111,
    url:"http://www.metrounitedbank.com",
    county:"San Diego",
    parent:"Metrocorp Bancshares, Inc.",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$444,938,000",
    name:"Mission Community Bank",
    address:"3380 S. Higuera Street",
    city:"San Luis Obispo",
    state:"California",
    zip:93401,
    url:"http://www.missioncommunitybank.com",
    county:"San Luis Obispo",
    parent:"Carpenter Bank Partners, Inc.",
    region:"San Luis Obispo-Paso Robles-Arroyo Grande, CA"
  },
  {
    assets:"$439,961,000",
    name:"The Private Bank of California",
    address:"10100 Santa Monica Boulevard, Suite 2500",
    city:"Century City",
    state:"California",
    zip:90067,
    url:"http://www.beachbusinessbank.com",
    county:"Los Angeles",
    parent:"First Pactrust Bancorp, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$439,033,000",
    name:"GBC International Bank",
    address:"5670 Wilshire Boulevard, Suite 1780",
    city:"Los Angeles",
    state:"California",
    zip:90036,
    url:"http://www.gbcib.com",
    county:"Los Angeles",
    parent:"Gbc Holdings, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$433,186,000",
    name:"Presidio Bank",
    address:"One Montgomery Tower",
    city:"San Francisco",
    state:"California",
    zip:94111,
    url:"http://www.presidiobank.com",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$432,436,000",
    name:"Avidbank",
    address:"400 Emerson Street",
    city:"Palo Alto",
    state:"California",
    zip:94301,
    url:"http://www.avidbank.com",
    county:"Santa Clara",
    parent:"Avidbank Holdings, Inc.",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$432,067,000",
    name:"Summit State Bank",
    address:"500 Bicentennial Way",
    city:"Santa Rosa",
    state:"California",
    zip:95403,
    url:"http://www.summitstatebank.com",
    county:"Sonoma",
    parent:" ",
    region:"Santa Rosa, CA"
  },
  {
    assets:"$418,435,000",
    name:"American Security Bank",
    address:"1401 Dove Street, Suite 100",
    city:"Newport Beach",
    state:"California",
    zip:92660,
    url:"http://www.amsecbank.com",
    county:"Orange",
    parent:"America Bancshares, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$411,573,000",
    name:"Wells Fargo Bank, Ltd.",
    address:"707 Wilshire Boulevard",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:" ",
    county:"Los Angeles",
    parent:"Wells Fargo & Company",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$400,904,000",
    name:"TomatoBank, National Association",
    address:"1420 East Valley Boulevard",
    city:"Alhambra",
    state:"California",
    zip:91801,
    url:"http://www.tomatobank.com",
    county:"Los Angeles",
    parent:"Tfc Holding Company",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$381,152,000",
    name:"Santa Cruz County Bank",
    address:"720 Front St",
    city:"Santa Cruz",
    state:"California",
    zip:95060,
    url:"http://www.sccountybank.com",
    county:"Santa Cruz",
    parent:" ",
    region:"Santa Cruz-Watsonville, CA"
  },
  {
    assets:"$381,074,000",
    name:"First Credit Bank",
    address:"9255 Sunset Boulevard",
    city:"Los Angeles",
    state:"California",
    zip:90069,
    url:" ",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$369,528,000",
    name:"1st Capital Bank",
    address:"5 Harris Court, Building N, Suite #3",
    city:"Monterey",
    state:"California",
    zip:93940,
    url:"www.1stcapitalbank.com",
    county:"Monterey",
    parent:" ",
    region:"Salinas, CA"
  },
  {
    assets:"$369,209,000",
    name:"Valley Republic Bank",
    address:"5000 California Avenue, Suite 110",
    city:"Bakersfield",
    state:"California",
    zip:93309,
    url:"http://www.valleyrepublicbank.com",
    county:"Kern",
    parent:" ",
    region:"Bakersfield, CA"
  },
  {
    assets:"$368,286,000",
    name:"Valley Business Bank",
    address:"701 West Main Street",
    city:"Visalia",
    state:"California",
    zip:93291,
    url:"www.valleybusinessbank.net",
    county:"Tulare",
    parent:"Valley Commerce Bancorp",
    region:"Visalia-Porterville, CA"
  },
  {
    assets:"$362,706,000",
    name:"First Choice Bank",
    address:"17414 Carmenita Road",
    city:"Cerritos",
    state:"California",
    zip:90703,
    url:"www.firstchoicebankca.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$359,886,000",
    name:"Mission Bank",
    address:"1330 Truxtun Avenue",
    city:"Bakersfield",
    state:"California",
    zip:93301,
    url:"http://www.missionbank.com",
    county:"Kern",
    parent:"Mission Bancorp",
    region:"Bakersfield, CA"
  },
  {
    assets:"$349,232,000",
    name:"California Bank of Commerce",
    address:"3595 Mt. Diablo Blvd., 2nd Floor",
    city:"Lafayette",
    state:"California",
    zip:94549,
    url:"http://www.californiabankofcommerce.com",
    county:"Contra Costa",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$345,481,000",
    name:"Broadway Federal Bank, f.s.b.",
    address:"4835 Venice Boulevard",
    city:"Los Angeles",
    state:"California",
    zip:90019,
    url:"www.broadwayfederalbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$342,007,000",
    name:"National Bank of California",
    address:"12121 Wilshire Blvd 14th Fl",
    city:"Los Angeles",
    state:"California",
    zip:90025,
    url:"http://www.nbcal.com",
    county:"Los Angeles",
    parent:"Ncal Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$338,752,000",
    name:"Commerce West Bank",
    address:"2111 Business Center Drive",
    city:"Irvine",
    state:"California",
    zip:92612,
    url:"www.cwbk.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$332,020,000",
    name:"Universal Bank",
    address:"3455 Nogales Street, Suite #105",
    city:"West Covina",
    state:"California",
    zip:91792,
    url:"www.universalbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$325,699,000",
    name:"Bay Commercial Bank",
    address:"500 Ygnacio Valley Road Suite 130",
    city:"Walnut Creek",
    state:"California",
    zip:94596,
    url:"http://www.baycommercialbank.com",
    county:"Contra Costa",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$316,783,000",
    name:"Pacific Enterprise Bank",
    address:"17748 Sky Park Circle",
    city:"Irvine",
    state:"California",
    zip:92614,
    url:"www.pacificenterprisebank.com",
    county:"Orange",
    parent:"Pacific Enterprise Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$313,340,000",
    name:"San Diego Private Bank",
    address:"801 Orange Avenue, Suite 101",
    city:"Coronado",
    state:"California",
    zip:92118,
    url:"http://www.sandiegoprivatebank.net",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$288,986,000",
    name:"American Plus Bank, N.A.",
    address:"630 West Duarte Road",
    city:"Arcadia",
    state:"California",
    zip:91007,
    url:"http://www.bankaplus.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$279,694,000",
    name:"One PacificCoast Bank, FSB",
    address:"1438 Webster Street, Suite 100",
    city:"Oakland",
    state:"California",
    zip:94612,
    url:"www.opcb.com",
    county:"Alameda",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$277,673,000",
    name:"Independence Bank",
    address:"4525 Macarthur Boulevard",
    city:"Newport Beach",
    state:"California",
    zip:92660,
    url:"http://www.independence-bank.net",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$271,895,000",
    name:"United Labor Bank, F.S.B.",
    address:"100 Hegenberger Road, Suite 110",
    city:"Oakland",
    state:"California",
    zip:94621,
    url:"http://www.laborbank.com",
    county:"Alameda",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$270,084,000",
    name:"Mega Bank",
    address:"245 West Valley Boulevard",
    city:"San Gabriel",
    state:"California",
    zip:91776,
    url:"http://megabankusa.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$264,161,000",
    name:"Wedbush Bank",
    address:"1000 Wilshire Boulevard, Suite 1150",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"www.wedbushbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$263,693,000",
    name:"Bank of Alameda",
    address:"2130 Otis Drive",
    city:"Alameda",
    state:"California",
    zip:94501,
    url:"http://www.bankofalameda.com",
    county:"Alameda",
    parent:"Norcal Community Bancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$262,886,000",
    name:"United American Bank",
    address:"101 South Ellsworth Avenue, Suite 110",
    city:"San Mateo",
    state:"California",
    zip:94401,
    url:"http://www.unitedamericanbank.com",
    county:"San Mateo",
    parent:"Atbancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$260,671,000",
    name:"Focus Business Bank",
    address:"10 Almaden Boulevard, Suite 150",
    city:"San Jose",
    state:"California",
    zip:95113,
    url:"http://www.focusbusinessbank.com",
    county:"Santa Clara",
    parent:" ",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$255,363,000",
    name:"Mission Valley Bank",
    address:"9116 Sunland Boulevard",
    city:"Sun Valley",
    state:"California",
    zip:91352,
    url:"www.missionvalleybank.com",
    county:"Los Angeles",
    parent:"Mission Valley Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$247,318,000",
    name:"Seacoast Commerce Bank",
    address:"11939 Rancho Bernardo Road, Suite 200",
    city:"San Diego",
    state:"California",
    zip:92128,
    url:"http://www.sccombank.com",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$247,306,000",
    name:"Redwood Capital Bank",
    address:"402 G Street",
    city:"Eureka",
    state:"California",
    zip:95501,
    url:"http://www.rdwo.com",
    county:"Humboldt",
    parent:"Redwood Capital Bancorp",
    region:"Eureka-Arcata-Fortuna, CA"
  },
  {
    assets:"$246,050,000",
    name:"Open Bank",
    address:"1000 Wilshire Boulevard, Suite 100",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.myopenbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$245,796,000",
    name:"Community Commerce Bank",
    address:"358 W Foothill Blvd",
    city:"Claremont",
    state:"California",
    zip:91711,
    url:"http://www.ccombank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$235,610,000",
    name:"Commerce National Bank",
    address:"4040 Macarthur Boulevard, Suite 100",
    city:"Newport Beach",
    state:"California",
    zip:92660,
    url:"www.commercenatbank.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$234,049,000",
    name:"Bank of Santa Clarita",
    address:"23780 Magic Mountain Parkway",
    city:"Santa Clarita",
    state:"California",
    zip:91355,
    url:"http://www.bankofsantaclarita.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$225,484,000",
    name:"AltaPacific Bank",
    address:"3725 Westwind Blvd, Suite 100",
    city:"Santa Rosa",
    state:"California",
    zip:95403,
    url:"www.apbconnect.com",
    county:"Sonoma",
    parent:"Altapacific Bancorp",
    region:"Santa Rosa, CA"
  },
  {
    assets:"$222,182,000",
    name:"New OMNI Bank, National Association",
    address:"1235 South Garfield Avenue",
    city:"Alhambra",
    state:"California",
    zip:91801,
    url:"http://newomnibank.com",
    county:"Los Angeles",
    parent:"Ckh Capital, Inc.",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$216,963,000",
    name:"Gateway Bank, F.S.B.",
    address:"919 Clement Street",
    city:"San Francisco",
    state:"California",
    zip:94118,
    url:"www.gatewayfsb.com",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$214,916,000",
    name:"Liberty Bank",
    address:"500 Linden Avenue",
    city:"South San Francisco",
    state:"California",
    zip:94080,
    url:"http://www.libertybk.com",
    county:"San Mateo",
    parent:"Liberty Bancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$212,499,000",
    name:"Fresno First Bank",
    address:"7690 N. Palm Avenue, Ste. 101",
    city:"Fresno",
    state:"California",
    zip:93711,
    url:"www.fresnofirstbank.com",
    county:"Fresno",
    parent:" ",
    region:"Fresno, CA"
  },
  {
    assets:"$210,520,000",
    name:"Monterey County Bank",
    address:"601 Munras Avenue",
    city:"Monterey",
    state:"California",
    zip:93940,
    url:"http://montereycountybank.com",
    county:"Monterey",
    parent:"Northern California Bancorp, Inc.",
    region:"Salinas, CA"
  },
  {
    assets:"$203,442,000",
    name:"Balboa Thrift and Loan Association",
    address:"865 Amena Court",
    city:"Chula Vista",
    state:"California",
    zip:91910,
    url:"http://www.balboathrift.com",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$202,998,000",
    name:"Community 1st Bank",
    address:"649 Lincoln Way",
    city:"Auburn",
    state:"California",
    zip:95603,
    url:"www.community1bank.com",
    county:"Placer",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$202,921,000",
    name:"County Commerce Bank",
    address:"3260 Telegraph Road",
    city:"Ventura",
    state:"California",
    zip:93003,
    url:"http://www.countycommercebank.com",
    county:"Ventura",
    parent:" ",
    region:"Oxnard-Thousand Oaks-Ventura, CA"
  },
  {
    assets:"$200,080,000",
    name:"New Resource Bank",
    address:"405 Howard Street, Suite 110",
    city:"San Francisco",
    state:"California",
    zip:94105,
    url:"http://www.newresourcebank.com",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$195,393,000",
    name:"Commercial Bank of California",
    address:"695 Town Center Drive, Suite 100",
    city:"Costa Mesa",
    state:"California",
    zip:92626,
    url:"http://WWW.COMBANCAL.COM",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$194,256,000",
    name:"Pacific Valley Bank",
    address:"422 Main Street",
    city:"Salinas",
    state:"California",
    zip:93901,
    url:"http://www.pacificvalleybank.com",
    county:"Monterey",
    parent:" ",
    region:"Salinas, CA"
  },
  {
    assets:"$193,784,000",
    name:"EH National Bank",
    address:"9701 Wilshire Boulevard",
    city:"Beverly Hills",
    state:"California",
    zip:90210,
    url:"http://www.ehnbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$193,067,000",
    name:"Bank of Southern California, N.A.",
    address:"12265 El Camino Real, Suite 100",
    city:"San Diego",
    state:"California",
    zip:92130,
    url:"http://www.banksocal.com",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$188,396,000",
    name:"Orange County Business Bank",
    address:"17901 Von Karman Avenue, Suite 150",
    city:"Irvine",
    state:"California",
    zip:92614,
    url:"http://ocbusinessbank.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$188,337,000",
    name:"The Merchants National Bank of Sacramento",
    address:"1015 Seventh Street",
    city:"Sacramento",
    state:"California",
    zip:95814,
    url:"http://www.merchantsnational.com",
    county:"Sacramento",
    parent:"Merchants Holding Company",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$187,321,000",
    name:"Summit Bank",
    address:"2969 Broadway",
    city:"Oakland",
    state:"California",
    zip:94611,
    url:"www.summitbanking.com",
    county:"Alameda",
    parent:"Summit Bancshares, Inc.",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$180,188,000",
    name:"American Riviera Bank",
    address:"1033 Anacapa Street",
    city:"Santa Barbara",
    state:"California",
    zip:93101,
    url:"www.americanrivierabank.com",
    county:"Santa Barbara",
    parent:" ",
    region:"Santa Maria-Santa Barbara, CA"
  },
  {
    assets:"$180,097,000",
    name:"Mission National Bank",
    address:"3060 Sixteenth Street",
    city:"San Francisco",
    state:"California",
    zip:94103,
    url:"http://www.mnbsf.com",
    county:"San Francisco",
    parent:"Mnb Holdings Corporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$178,615,000",
    name:"Bank of Rio Vista",
    address:"101 Main Street",
    city:"Rio Vista",
    state:"California",
    zip:94571,
    url:"http://www.bankofriovista.com",
    county:"Solano",
    parent:" ",
    region:"Vallejo-Fairfield, CA"
  },
  {
    assets:"$177,137,000",
    name:"Pinnacle Bank",
    address:"18181 Butterfield Blvd., Ste 135",
    city:"Morgan Hill",
    state:"California",
    zip:95037,
    url:"http://www.pinnaclebankonline.com",
    county:"Santa Clara",
    parent:" ",
    region:"San Jose-Sunnyvale-Santa Clara, CA"
  },
  {
    assets:"$175,741,000",
    name:"Community Bank of Santa Maria",
    address:"1421 South Broadway",
    city:"Santa Maria",
    state:"California",
    zip:93454,
    url:"http://WWW.YOURCBSM.COM",
    county:"Santa Barbara",
    parent:" ",
    region:"Santa Maria-Santa Barbara, CA"
  },
  {
    assets:"$172,676,000",
    name:"First Federal Savings and Loan Association of San Rafael",
    address:"1030 Third St",
    city:"San Rafael",
    state:"California",
    zip:94901,
    url:"www.ffsavings.com",
    county:"Marin",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$171,236,000",
    name:"Frontier Bank, FSB",
    address:"74175 El Paseo Drive",
    city:"Palm Desert",
    state:"California",
    zip:92260,
    url:"www.elpaseobank.com",
    county:"Riverside",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$170,458,000",
    name:"Community Bank of the Bay",
    address:"180 Grand Avenue",
    city:"Oakland",
    state:"California",
    zip:94612,
    url:"www.communitybankbay.com",
    county:"Alameda",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$163,020,000",
    name:"Pacific Commerce Bank",
    address:"420 East 3rd Street, Suite 100",
    city:"Los Angeles",
    state:"California",
    zip:90013,
    url:"www.pacificcommercebank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$160,089,000",
    name:"Lighthouse Bank",
    address:"111 Mission Street",
    city:"Santa Cruz",
    state:"California",
    zip:95060,
    url:"http://www.lighthousebank.net",
    county:"Santa Cruz",
    parent:" ",
    region:"Santa Cruz-Watsonville, CA"
  },
  {
    assets:"$159,907,000",
    name:"Uniti Bank",
    address:"6301 Beach Boulevard, Suite 100",
    city:"Buena Park",
    state:"California",
    zip:90621,
    url:"http://www.unitibank.com",
    county:"Orange",
    parent:"Uniti Financial Corporation",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$157,946,000",
    name:"The Bank of Santa Barbara",
    address:"12 East Figueroa Street",
    city:"Santa Barbara",
    state:"California",
    zip:93101,
    url:"http://WWW.THEBANKOFSANTABARBARA.COM",
    county:"Santa Barbara",
    parent:" ",
    region:"Santa Maria-Santa Barbara, CA"
  },
  {
    assets:"$157,884,000",
    name:"ProAmerica Bank",
    address:"888 W 6th",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.PROAMERICABank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$156,899,000",
    name:"Capital Bank",
    address:"31351 Rancho Viejo Road, Suite 101",
    city:"San Juan Capistrano",
    state:"California",
    zip:92675,
    url:"www.mycapitalbank.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$155,498,000",
    name:"Community Business Bank",
    address:"710 Riverpointe Ct",
    city:"West Sacramento",
    state:"California",
    zip:95605,
    url:"http://www.communitybizbank.com",
    county:"Yolo",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$154,798,000",
    name:"Founders Community Bank",
    address:"237 Higuera Street",
    city:"San Luis Obispo",
    state:"California",
    zip:93401,
    url:"http://www.founderscommunitybank.com",
    county:"San Luis Obispo",
    parent:"Founders Bancorp",
    region:"San Luis Obispo-Paso Robles-Arroyo Grande, CA"
  },
  {
    assets:"$154,264,000",
    name:"American Continental Bank",
    address:"17700 Castleton Street, Suite 100",
    city:"City Of Industry",
    state:"California",
    zip:91748,
    url:"http://www.americancontinentalbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$147,636,000",
    name:"First National Bank of Southern California",
    address:"3727 Arlington Avenue",
    city:"Riverside",
    state:"California",
    zip:92506,
    url:"www.fnbsocal.com",
    county:"Riverside",
    parent:"Duke Financial Group, Inc.",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$146,941,000",
    name:"River Valley Community Bank",
    address:"1629 Colusa Highway",
    city:"Yuba City",
    state:"California",
    zip:95993,
    url:"http://rivervalleycommunitybank.com",
    county:"Sutter",
    parent:" ",
    region:"Yuba City, CA"
  },
  {
    assets:"$146,369,000",
    name:"Ojai Community Bank",
    address:"402 West Ojai Avenue",
    city:"Ojai",
    state:"California",
    zip:93023,
    url:"http://www.ojaicommunitybank.com",
    county:"Ventura",
    parent:" ",
    region:"Oxnard-Thousand Oaks-Ventura, CA"
  },
  {
    assets:"$144,227,000",
    name:"South County Bank, National Association",
    address:"22342 Avenida Empresa",
    city:"Rancho Santa Margarita",
    state:"California",
    zip:92688,
    url:"http://www.southcountybank.com",
    county:"Orange",
    parent:"Calwest Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$143,587,000",
    name:"Valley Community Bank",
    address:"465 Main Street",
    city:"Pleasanton",
    state:"California",
    zip:94566,
    url:"http://www.vcb-ca.com",
    county:"Alameda",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$143,531,000",
    name:"Bank of Napa, N.A.",
    address:"2007 Redwood Road, Suite 101",
    city:"Napa",
    state:"California",
    zip:94558,
    url:"www.thebankofnapa.com",
    county:"Napa",
    parent:" ",
    region:"Napa, CA"
  },
  {
    assets:"$139,799,000",
    name:"Northern California National Bank",
    address:"1717 Mangrove Avenue, Suite 100",
    city:"Chico",
    state:"California",
    zip:95926,
    url:"http://www.norcalbank.com",
    county:"Butte",
    parent:" ",
    region:"Chico, CA"
  },
  {
    assets:"$137,522,000",
    name:"International City Bank, National Association",
    address:"249 E Ocean Boulevard",
    city:"Long Beach",
    state:"California",
    zip:90802,
    url:"http://www.icb.biz",
    county:"Los Angeles",
    parent:"Pedcor Capital, Llc",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$137,162,000",
    name:"First Mountain Bank",
    address:"40865 Big Bear Boulevard",
    city:"Big Bear Lake",
    state:"California",
    zip:92315,
    url:"http://www.firstmountainbank.com",
    county:"San Bernardino",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$136,650,000",
    name:"Golden Valley Bank",
    address:"190 Cohasset Road, Suite 170",
    city:"Chico",
    state:"California",
    zip:95926,
    url:"WWW.GOLDENVALLEYBANK.COM",
    county:"Butte",
    parent:" ",
    region:"Chico, CA"
  },
  {
    assets:"$136,332,000",
    name:"Bank of San Francisco",
    address:"575 Market Street, Suite 900",
    city:"San Francisco",
    state:"California",
    zip:94105,
    url:"http://bankofsf.com",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$135,883,000",
    name:"Golden Pacific Bank, National Association",
    address:"519 \"d\" Street",
    city:"Marysville",
    state:"California",
    zip:95901,
    url:"www.goldenpacificbank.com",
    county:"Yuba",
    parent:"Golden Pacific Bancorp, Inc.",
    region:"Yuba City, CA"
  },
  {
    assets:"$134,392,000",
    name:"Folsom Lake Bank",
    address:"905 Sutter Street, Suite 100",
    city:"Folsom",
    state:"California",
    zip:95630,
    url:"http://www.folsomlakebank.com",
    county:"Sacramento",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$133,802,000",
    name:"Premier Business Bank",
    address:"700 South Flower Street, Suite 2000",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.ibankpremier.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$133,758,000",
    name:"Santa Clara Valley Bank, National Association",
    address:"901 East Main Street",
    city:"Santa Paula",
    state:"California",
    zip:93060,
    url:" ",
    county:"Ventura",
    parent:" ",
    region:"Oxnard-Thousand Oaks-Ventura, CA"
  },
  {
    assets:"$133,441,000",
    name:"Murphy Bank",
    address:"5180 North Palm Avenue",
    city:"Fresno",
    state:"California",
    zip:93704,
    url:"http://www.murphybank.com",
    county:"Fresno",
    parent:" ",
    region:"Fresno, CA"
  },
  {
    assets:"$129,526,000",
    name:"Finance and Thrift Company",
    address:"268 North Main Street",
    city:"Porterville",
    state:"California",
    zip:93257,
    url:"http://www.financeandthrift.com",
    county:"Tulare",
    parent:" ",
    region:"Visalia-Porterville, CA"
  },
  {
    assets:"$129,002,000",
    name:"Premier Service Bank",
    address:"3637 Arlington Avenue, Suite B",
    city:"Riverside",
    state:"California",
    zip:92506,
    url:"http://www.premierservicebank.com",
    county:"Riverside",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$128,049,000",
    name:"Metropolitan Bank",
    address:"250 East 18th Street",
    city:"Oakland",
    state:"California",
    zip:94606,
    url:" ",
    county:"Alameda",
    parent:"Met Financial Corporation",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$127,615,000",
    name:"America California Bank",
    address:"417 Montgomery Street",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:"http://www.acbank.com",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$127,584,000",
    name:"Pacific Alliance Bank",
    address:"8400 East Valley Boulevard",
    city:"Rosemead",
    state:"California",
    zip:91770,
    url:"www.pacificalliancebank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$125,935,000",
    name:"Vibra Bank",
    address:"530 Broadway",
    city:"Chula Vista",
    state:"California",
    zip:91910,
    url:"www.vibrabank.com",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$125,189,000",
    name:"Trans-Pacific National Bank",
    address:"55 Second Street",
    city:"San Francisco",
    state:"California",
    zip:94105,
    url:"http://www.tpnb.com",
    county:"San Francisco",
    parent:"Trans Pacific Bancorp",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$124,986,000",
    name:"Eastern International Bank",
    address:"688 New High Street",
    city:"Los Angeles",
    state:"California",
    zip:90012,
    url:" ",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$123,715,000",
    name:"Community Bank of San Joaquin",
    address:"22 West Yokuts Avenue",
    city:"Stockton",
    state:"California",
    zip:95207,
    url:"http://www.cbsjbank.com",
    county:"San Joaquin",
    parent:"Bank On It, Inc.",
    region:"Stockton-Lodi, CA"
  },
  {
    assets:"$121,838,000",
    name:"Partners Bank of California",
    address:"27201 Puerta Real, Suite 160",
    city:"Mission Viejo",
    state:"California",
    zip:92691,
    url:"http://partnersbankca.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$119,686,000",
    name:"Americas United Bank",
    address:"801 North Brand Boulevard, Suite #1150",
    city:"Glendale",
    state:"California",
    zip:91203,
    url:"http://www.aubank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$118,279,000",
    name:"Cornerstone Community Bank",
    address:"237 South Main Street",
    city:"Red Bluff",
    state:"California",
    zip:96080,
    url:"http://www.bankcornerstone.com",
    county:"Tehama",
    parent:" ",
    region:"Red Bluff, CA"
  },
  {
    assets:"$117,437,000",
    name:"Coast National Bank",
    address:"500 Marsh Street",
    city:"San Luis Obispo",
    state:"California",
    zip:93401,
    url:"www.coastnationalbank.com",
    county:"San Luis Obispo",
    parent:"Coast Bancorp",
    region:"San Luis Obispo-Paso Robles-Arroyo Grande, CA"
  },
  {
    assets:"$116,993,000",
    name:"Chino Commercial Bank, N.A.",
    address:"14245 Pipeline Avenue",
    city:"Chino",
    state:"California",
    zip:91710,
    url:"http://www.chinocommercialbank.com",
    county:"San Bernardino",
    parent:"Chino Commercial Bancorp",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$112,886,000",
    name:"United Pacific Bank",
    address:"1630 South Azusa Avenue",
    city:"City Of Industry",
    state:"California",
    zip:91748,
    url:"http://upbnet.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$110,423,000",
    name:"Suncrest Bank",
    address:"400 West Center Avenue",
    city:"Visalia",
    state:"California",
    zip:93291,
    url:"http://www.suncrestbank.com",
    county:"Tulare",
    parent:" ",
    region:"Visalia-Porterville, CA"
  },
  {
    assets:"$108,932,000",
    name:"California Pacific Bank",
    address:"250 Montgomery Street, 5th Floor",
    city:"San Francisco",
    state:"California",
    zip:94104,
    url:" ",
    county:"San Francisco",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$106,298,000",
    name:"Pan Pacific Bank",
    address:"47065 Warm Springs Boulevard",
    city:"Fremont",
    state:"California",
    zip:94539,
    url:"http://panpacificbank.com",
    county:"Alameda",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$105,130,000",
    name:"Home Bank of California",
    address:"4493 Ruffin Road",
    city:"San Diego",
    state:"California",
    zip:92123,
    url:"http://www.homebankofcalifornia.com",
    county:"San Diego",
    parent:"La Jolla Pacific Bancorp",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$104,449,000",
    name:"Community Valley Bank",
    address:"1443 Main Street",
    city:"El Centro",
    state:"California",
    zip:92243,
    url:"http://www.yourcvb.com",
    county:"Imperial",
    parent:" ",
    region:"El Centro, CA"
  },
  {
    assets:"$102,899,000",
    name:"First Security Business Bank",
    address:"803 East Katella Avenue",
    city:"Orange",
    state:"California",
    zip:92867,
    url:"http://www.firstam.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$99,691,000",
    name:"Friendly Hills Bank",
    address:"16011 E. Whittier Boulevard",
    city:"Whittier",
    state:"California",
    zip:90603,
    url:"www.friendlyhillsbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$99,314,000",
    name:"Mission Oaks National Bank",
    address:"41530 Enterprise Circle South, Suite 100",
    city:"Temecula",
    state:"California",
    zip:92590,
    url:"http://www.missionaoksbank.com",
    county:"Riverside",
    parent:"Mission Oaks Bancorp",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$96,518,000",
    name:"Neighborhood National Bank",
    address:"3511 National Avenue",
    city:"San Diego",
    state:"California",
    zip:92113,
    url:"http://www.mynnb.com",
    county:"San Diego",
    parent:"Neighborhood Bancorp",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$95,838,000",
    name:"Tri-Valley Bank",
    address:"2404 San Ramon Valley Boulevard, Suite 100",
    city:"San Ramon",
    state:"California",
    zip:94583,
    url:"http://www.trivalleybank.com",
    county:"Contra Costa",
    parent:" ",
    region:"San Francisco-Oakland-Hayward, CA"
  },
  {
    assets:"$94,391,000",
    name:"Delta Bank, National Association",
    address:"611 North Main Street",
    city:"Manteca",
    state:"California",
    zip:95336,
    url:"www.deltabank.com",
    county:"San Joaquin",
    parent:"Delta National Bancorp",
    region:"Stockton-Lodi, CA"
  },
  {
    assets:"$91,689,000",
    name:"Merchants Bank of California, National Association",
    address:"One Civic Plaza, Suite 100",
    city:"Carson",
    state:"California",
    zip:90745,
    url:"http://merchantsbankca.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$89,834,000",
    name:"Security First Bank",
    address:"663 W Nees Avenue",
    city:"Fresno",
    state:"California",
    zip:93711,
    url:"http://www.securityfirstfresno.com",
    county:"Fresno",
    parent:" ",
    region:"Fresno, CA"
  },
  {
    assets:"$87,954,000",
    name:"Sierra Vista Bank",
    address:"1710 Prairie City Road",
    city:"Folsom",
    state:"California",
    zip:95630,
    url:"http://sierravistabank.com",
    county:"Sacramento",
    parent:" ",
    region:"Sacramento-Roseville-Arden-Arcade, CA"
  },
  {
    assets:"$81,386,000",
    name:"Golden State Bank",
    address:"1060 West Foothill Boulevard",
    city:"Upland",
    state:"California",
    zip:91786,
    url:"www.goldenstatebank.com",
    county:"San Bernardino",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$81,294,000",
    name:"US Metro Bank",
    address:"9866 Garden Grove Boulevard",
    city:"Garden Grove",
    state:"California",
    zip:92844,
    url:"http://WWW.USMETROBANK.COM",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$76,940,000",
    name:"Capital Bank and Trust Company",
    address:"6455 Irvine Center Drive",
    city:"Irvine",
    state:"California",
    zip:92618,
    url:"www.americanfunds.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$66,607,000",
    name:"Sutter Community Bank",
    address:"700 Plumas Street",
    city:"Yuba City",
    state:"California",
    zip:95991,
    url:"http://suttercommunitybank.com",
    county:"Sutter",
    parent:" ",
    region:"Yuba City, CA"
  },
  {
    assets:"$63,776,000",
    name:"Mother Lode Bank",
    address:"172 West Stockton Road",
    city:"Sonora",
    state:"California",
    zip:95370,
    url:"www.motherlodebank.com",
    county:"Tuolumne",
    parent:" ",
    region:"Sonora, CA"
  },
  {
    assets:"$61,189,000",
    name:"Bank of Feather River",
    address:"855 Harter Parkway, Suite 100",
    city:"Yuba City",
    state:"California",
    zip:95991,
    url:"http://www.bankoffeatherriver.com",
    county:"Sutter",
    parent:" ",
    region:"Yuba City, CA"
  },
  {
    assets:"$60,843,000",
    name:"Tustin Community Bank",
    address:"13891 Newport Avenue, Suites 100 & 130",
    city:"Tustin",
    state:"California",
    zip:92780,
    url:"http://tustincmtybank.com",
    county:"Orange",
    parent:"Saddleback Bancorp",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$56,066,000",
    name:"Bank of Whittier, National Association",
    address:"15141 East Whittier Boulevard",
    city:"Whittier",
    state:"California",
    zip:90609,
    url:"http://www.whittierbank.com",
    county:"Los Angeles",
    parent:"Greater Pacific Bancshares",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$53,846,000",
    name:"Asian Pacific National Bank",
    address:"333 West Valley Boulevard",
    city:"San Gabriel",
    state:"California",
    zip:91776,
    url:" ",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$51,211,000",
    name:"Saigon National Bank",
    address:"15606 Brookhurst St, Suite C",
    city:"Westminster",
    state:"California",
    zip:92683,
    url:"http://saigonnational.com",
    county:"Orange",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$50,346,000",
    name:"Commerce Bank of Temecula Valley",
    address:"25220 Hancock Avenue, Suite #140",
    city:"Murrieta",
    state:"California",
    zip:92562,
    url:"http://www.commercebanktv.com",
    county:"Riverside",
    parent:" ",
    region:"Riverside-San Bernardino-Ontario, CA"
  },
  {
    assets:"$46,116,000",
    name:"California Business Bank",
    address:"800 West Sixth Street, Suite 1000",
    city:"Los Angeles",
    state:"California",
    zip:90017,
    url:"http://www.californiabusinessbank.com",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$38,402,000",
    name:"Pan American Bank",
    address:"3626 East First Street",
    city:"Los Angeles",
    state:"California",
    zip:90063,
    url:"http://www.panamericanbank.us",
    county:"Los Angeles",
    parent:" ",
    region:"Los Angeles-Long Beach-Anaheim, CA"
  },
  {
    assets:"$27,566,000",
    name:"Rancho Santa Fe Thrift & Loan Association",
    address:"1001 West San Marcos Boulevard, #140",
    city:"San Marcos",
    state:"California",
    zip:92078,
    url:" ",
    county:"San Diego",
    parent:" ",
    region:"San Diego-Carlsbad, CA"
  },
  {
    assets:"$19,161,000",
    name:"Armed Forces Bank of California, National Association",
    address:"2260 Callagan Highway, Building 3187a, Suite 1",
    city:"San Diego",
    state:"California",
    zip:92136,
    url:"afbca.com",
    county:"San Diego",
    parent:"Dickinson Financial Corporation Ii",
    region:"San Diego-Carlsbad, CA"
  }
];


//generate the categories based on the first object in the array
var categories = [];


//used to quickly change array set
var dataArr = data;

for(category in dataArr[0]) {
  categories.push(category);
}

//create the table with the correct number of rows and columns (also create the category cells and label them)
function tableCreate() {

  $(".table").html("");

  for(var i = 0; i < categories.length; i++) {
    $(".table").append("<div class=\"column\"></div>");
  }

  for(var i = 0; i <= dataArr.length; i++) {
    if(i == 0) {
      $(".column").append("<div class=\"cell category\"></div>");
    }
    else {
      $(".column").append("<div class=\"cell\"></div>");
    }
  }

  $(".column").each(function(index) {
    $(this).children(".cell:nth-child(1)").html(categories[index]);
  });

}

//to update the table when changes are made to the dataArr array
function tableUpdate() {
  for(var i = 0; i < dataArr.length; i++) {
    for(var j = 0; j < categories.length; j++) {
      $(".column:nth-child(" + (j+1) + ") .cell:nth-child(" + (i+2) + ")").html(dataArr[i][categories[j]]);
    }
  }
}

//updates made to the categories which is used for tableUpdate
function categoryUpdate() {
  categories = [];
  $(".column .cell.category").each(function(index) {
    categories[index] = $(this).text();
  });
}

//a small sorting function for the osrting functionality onDblclick
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = b[key]; var y = a[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

$(document).ready(function () {
  tableCreate();
  tableUpdate();


  //jquery sortables stuff
  $(".table").sortable({
    axis: "x",
    cursor: "move",
    cancel: ".column .cell:not(:first-child)",
    start: function(event, ui) {
      $(".table").css({
        "margin-left": "100px",
        "margin-right": "100px"
      });
    },
    stop: function(event, ui) {
      $(".table").css({
        "margin-left": "10px",
        "margin-right": "10px"
      });
    }
  });

  $(".table").disableSelection();

  var oldSort = "id";

  $(".cell.category").on("dblclick", function() {
    categoryUpdate();

    //determine if the same column that is being sorted as the previous column
    if(oldSort != $(this).text()) {
      dataArr = sortByKey(dataArr, $(this).text());
    }

    dataArr = dataArr.reverse();

    tableUpdate();
    oldSort = $(this).text();
  });

  //for creating "sticky" headers
  $(window).on("scroll load", function() {
    if($(window).scrollTop() >= 60)
    {
      $(".category").css({
        "position": "relative",
        "top": (($(window).scrollTop() - 10) + "px"),
        "border-left": "1px solid #000",
        "border-top": "none",
        "border-bottom": "1px solid #000",
        "border-right": "none",
        "z-index": "100",
        "background": "#fff"
      });
    }
    else
    {
      $(".category").css({
        "position": "static",
        "border-left": "1px solid #000",
        "border-top": "1px solid #000",
        "border-bottom": "none",
        "border-right": "none"
      });
    }
  });

});