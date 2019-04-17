import { CountryInfo } from './types';

const data: { [code: string]: CountryInfo } = {
  AU: {
    name: 'Australia',
    sub: {
      'AU-ACT': {
        type: 'Territory',
        name: 'Australian Capital Territory',
      },
      'AU-QLD': {
        type: 'State',
        name: 'Queensland',
      },
      'AU-TAS': {
        type: 'State',
        name: 'Tasmania',
      },
      'AU-VIC': {
        type: 'State',
        name: 'Victoria',
      },
      'AU-NT': {
        type: 'Territory',
        name: 'Northern Territory',
      },
      'AU-WA': {
        type: 'State',
        name: 'Western Australia',
      },
      'AU-SA': {
        type: 'State',
        name: 'South Australia',
      },
      'AU-NSW': {
        type: 'State',
        name: 'New South Wales',
      },
    },
  },
  BE: {
    name: 'Belgium',
    sub: {
      'BE-VWV': {
        type: 'Province',
        name: 'West-Vlaanderen',
      },
      'BE-VAN': {
        type: 'Province',
        name: 'Antwerpen',
      },
      'BE-VLG': {
        type: 'Region',
        name: 'Vlaams Gewest',
      },
      'BE-VLI': {
        type: 'Province',
        name: 'Limburg',
      },
      'BE-WBR': {
        type: 'Province',
        name: 'Brabant wallon',
      },
      'BE-VBR': {
        type: 'Province',
        name: 'Vlaams-Brabant',
      },
      'BE-VOV': {
        type: 'Province',
        name: 'Oost-Vlaanderen',
      },
      'BE-WLG': {
        type: 'Province',
        name: 'Liège',
      },
      'BE-WLX': {
        type: 'Province',
        name: 'Luxembourg',
      },
      'BE-WHT': {
        type: 'Province',
        name: 'Hainaut',
      },
      'BE-WAL': {
        type: 'Region',
        name: 'wallonne, Région',
      },
      'BE-BRU': {
        type: 'Region',
        name: 'Brussels Hoofdstedelijk Gewest',
      },
      'BE-WNA': {
        type: 'Province',
        name: 'Namur',
      },
    },
  },
  CA: {
    name: 'Canada',
    sub: {
      'CA-NT': {
        type: 'Territory',
        name: 'Northwest Territories',
      },
      'CA-NU': {
        type: 'Territory',
        name: 'Nunavut',
      },
      'CA-NS': {
        type: 'Province',
        name: 'Nova Scotia',
      },
      'CA-MB': {
        type: 'Province',
        name: 'Manitoba',
      },
      'CA-SK': {
        type: 'Province',
        name: 'Saskatchewan',
      },
      'CA-QC': {
        type: 'Province',
        name: 'Quebec',
      },
      'CA-PE': {
        type: 'Province',
        name: 'Prince Edward Island',
      },
      'CA-BC': {
        type: 'Province',
        name: 'British Columbia',
      },
      'CA-YT': {
        type: 'Territory',
        name: 'Yukon',
      },
      'CA-NB': {
        type: 'Province',
        name: 'New Brunswick',
      },
      'CA-NL': {
        type: 'Province',
        name: 'Newfoundland and Labrador',
      },
      'CA-ON': {
        type: 'Province',
        name: 'Ontario',
      },
      'CA-AB': {
        type: 'Province',
        name: 'Alberta',
      },
    },
  },
  DE: {
    name: 'Germany',
    sub: {
      'DE-BE': {
        type: 'Länder',
        name: 'Berlin',
      },
      'DE-ST': {
        type: 'Länder',
        name: 'Sachsen-Anhalt',
      },
      'DE-RP': {
        type: 'Länder',
        name: 'Rheinland-Pfalz',
      },
      'DE-BB': {
        type: 'Länder',
        name: 'Brandenburg',
      },
      'DE-NI': {
        type: 'Länder',
        name: 'Niedersachsen',
      },
      'DE-SH': {
        type: 'Länder',
        name: 'Schleswig-Holstein',
      },
      'DE-TH': {
        type: 'Länder',
        name: 'Thüringen',
      },
      'DE-BW': {
        type: 'Länder',
        name: 'Baden-Württemberg',
      },
      'DE-HH': {
        type: 'Länder',
        name: 'Hamburg',
      },
      'DE-MV': {
        type: 'Länder',
        name: 'Mecklenburg-Vorpommern',
      },
      'DE-NW': {
        type: 'Länder',
        name: 'Nordrhein-Westfalen',
      },
      'DE-SN': {
        type: 'Länder',
        name: 'Sachsen',
      },
      'DE-HB': {
        type: 'Länder',
        name: 'Bremen',
      },
      'DE-SL': {
        type: 'Länder',
        name: 'Saarland',
      },
      'DE-BY': {
        type: 'Länder',
        name: 'Bayern',
      },
      'DE-HE': {
        type: 'Länder',
        name: 'Hessen',
      },
    },
  },
  GB: {
    name: 'United Kingdom',
    sub: {
      'GB-TRF': {
        type: 'Metropolitan district',
        name: 'Trafford',
      },
      'GB-WRX': {
        type: 'Unitary authority',
        name: 'Wrexham',
      },
      'GB-BEN': {
        type: 'London borough',
        name: 'Brent',
      },
      'GB-HRW': {
        type: 'London borough',
        name: 'Harrow',
      },
      'GB-WRT': {
        type: 'Unitary authority',
        name: 'Warrington',
      },
      'GB-LBH': {
        type: 'London borough',
        name: 'Lambeth',
      },
      'GB-DAL': {
        type: 'Unitary authority',
        name: 'Darlington',
      },
      'GB-WRL': {
        type: 'Metropolitan district',
        name: 'Wirral',
      },
      'GB-MYL': {
        type: 'District council area',
        name: 'Moyle',
      },
      'GB-UKM': {
        type: 'Nation',
        name: 'United Kingdom',
      },
      'GB-BEX': {
        type: 'London borough',
        name: 'Bexley',
      },
      'GB-BUR': {
        type: 'Metropolitan district',
        name: 'Bury',
      },
      'GB-KIR': {
        type: 'Metropolitan district',
        name: 'Kirklees',
      },
      'GB-FER': {
        type: 'District council area',
        name: 'Fermanagh',
      },
      'GB-NBL': {
        type: 'Unitary authority',
        name: 'Northumberland',
      },
      'GB-DRY': {
        type: 'District council area',
        name: 'Derry',
      },
      'GB-CKF': {
        type: 'District council area',
        name: 'Carrickfergus',
      },
      'GB-ERY': {
        type: 'Unitary authority',
        name: 'East Riding of Yorkshire',
      },
      'GB-CMA': {
        type: 'Two-tier county',
        name: 'Cumbria',
      },
      'GB-HCK': {
        type: 'London borough',
        name: 'Hackney',
      },
      'GB-CRY': {
        type: 'London borough',
        name: 'Croydon',
      },
      'GB-ABE': {
        type: 'Council area',
        name: 'Aberdeen City',
      },
      'GB-ABD': {
        type: 'Council area',
        name: 'Aberdeenshire',
      },
      'GB-CKT': {
        type: 'District council area',
        name: 'Cookstown',
      },
      'GB-ERW': {
        type: 'Council area',
        name: 'East Renfrewshire',
      },
      'GB-HIL': {
        type: 'London borough',
        name: 'Hillingdon',
      },
      'GB-NLN': {
        type: 'Unitary authority',
        name: 'North Lincolnshire',
      },
      'GB-WSX': {
        type: 'Two-tier county',
        name: 'West Sussex',
      },
      'GB-BIR': {
        type: 'Metropolitan district',
        name: 'Birmingham',
      },
      'GB-WBK': {
        type: 'Unitary authority',
        name: 'West Berkshire',
      },
      'GB-EDU': {
        type: 'Council area',
        name: 'East Dunbartonshire',
      },
      'GB-WSM': {
        type: 'London borough',
        name: 'Westminster',
      },
      'GB-STS': {
        type: 'Two-tier county',
        name: 'Staffordshire',
      },
      'GB-HRT': {
        type: 'Two-tier county',
        name: 'Hertfordshire',
      },
      'GB-LSB': {
        type: 'District council area',
        name: 'Lisburn',
      },
      'GB-EDH': {
        type: 'Council area',
        name: 'Edinburgh, City of',
      },
      'GB-HRY': {
        type: 'London borough',
        name: 'Haringey',
      },
      'GB-LAN': {
        type: 'Two-tier county',
        name: 'Lancashire',
      },
      'GB-RIC': {
        type: 'London borough',
        name: 'Richmond upon Thames',
      },
      'GB-LRN': {
        type: 'District council area',
        name: 'Larne',
      },
      'GB-ZET': {
        type: 'Council area',
        name: 'Shetland Islands',
      },
      'GB-ELS': {
        type: 'Council area',
        name: 'Eilean Siar',
      },
      'GB-NTA': {
        type: 'District council area',
        name: 'Newtownabbey',
      },
      'GB-SRY': {
        type: 'Two-tier county',
        name: 'Surrey',
      },
      'GB-BMH': {
        type: 'Unitary authority',
        name: 'Bournemouth',
      },
      'GB-CHE': {
        type: 'Unitary authority',
        name: 'Cheshire East',
      },
      'GB-FLN': {
        type: 'Unitary authority',
        name: 'Flintshire',
      },
      'GB-NET': {
        type: 'Metropolitan district',
        name: 'Newcastle upon Tyne',
      },
      'GB-NTH': {
        type: 'Two-tier county',
        name: 'Northamptonshire',
      },
      'GB-NTT': {
        type: 'Two-tier county',
        name: 'Nottinghamshire',
      },
      'GB-NTL': {
        type: 'Unitary authority',
        name: 'Neath Port Talbot',
      },
      'GB-ESX': {
        type: 'Two-tier county',
        name: 'East Sussex',
      },
      'GB-KTT': {
        type: 'London borough',
        name: 'Kingston upon Thames',
      },
      'GB-MRT': {
        type: 'London borough',
        name: 'Merton',
      },
      'GB-OXF': {
        type: 'Two-tier county',
        name: 'Oxfordshire',
      },
      'GB-MRY': {
        type: 'Council area',
        name: 'Moray',
      },
      'GB-ESS': {
        type: 'Two-tier county',
        name: 'Essex',
      },
      'GB-CHW': {
        type: 'Unitary authority',
        name: 'Cheshire West and Chester',
      },
      'GB-SOS': {
        type: 'Unitary authority',
        name: 'Southend-on-Sea',
      },
      'GB-PEM': {
        type: 'Unitary authority',
        name: 'Pembrokeshire',
      },
      'GB-NTY': {
        type: 'Metropolitan district',
        name: 'North Tyneside',
      },
      'GB-NEL': {
        type: 'Unitary authority',
        name: 'North East Lincolnshire',
      },
      'GB-HAL': {
        type: 'Unitary authority',
        name: 'Halton',
      },
      'GB-RFW': {
        type: 'Council area',
        name: 'Renfrewshire',
      },
      'GB-LUT': {
        type: 'Unitary authority',
        name: 'Luton',
      },
      'GB-WOK': {
        type: 'Unitary authority',
        name: 'Wokingham',
      },
      'GB-WOR': {
        type: 'Two-tier county',
        name: 'Worcestershire',
      },
      'GB-HLD': {
        type: 'Council area',
        name: 'Highland',
      },
      'GB-MFT': {
        type: 'District council area',
        name: 'Magherafelt',
      },
      'GB-NSM': {
        type: 'Unitary authority',
        name: 'North Somerset',
      },
      'GB-LDS': {
        type: 'Metropolitan district',
        name: 'Leeds',
      },
      'GB-KWL': {
        type: 'Metropolitan district',
        name: 'Knowsley',
      },
      'GB-SOM': {
        type: 'Two-tier county',
        name: 'Somerset',
      },
      'GB-DEN': {
        type: 'Unitary authority',
        name: 'Denbighshire',
      },
      'GB-BST': {
        type: 'Unitary authority',
        name: 'Bristol, City of',
      },
      'GB-EAL': {
        type: 'London borough',
        name: 'Ealing',
      },
      'GB-RDB': {
        type: 'London borough',
        name: 'Redbridge',
      },
      'GB-CSR': {
        type: 'District council area',
        name: 'Castlereagh',
      },
      'GB-RDG': {
        type: 'Unitary authority',
        name: 'Reading',
      },
      'GB-EAW': {
        type: 'Nation',
        name: 'England and Wales',
      },
      'GB-CMD': {
        type: 'London borough',
        name: 'Camden',
      },
      'GB-MON': {
        type: 'Unitary authority',
        name: 'Monmouthshire',
      },
      'GB-OLD': {
        type: 'Metropolitan district',
        name: 'Oldham',
      },
      'GB-CON': {
        type: 'Unitary authority',
        name: 'Cornwall',
      },
      'GB-CMN': {
        type: 'Unitary authority',
        name: 'Carmarthenshire',
      },
      'GB-EAY': {
        type: 'Council area',
        name: 'East Ayrshire',
      },
      'GB-HEF': {
        type: 'Unitary authority',
        name: 'Herefordshire',
      },
      'GB-ROT': {
        type: 'Metropolitan district',
        name: 'Rotherham',
      },
      'GB-NAY': {
        type: 'Council area',
        name: 'North Ayrshire',
      },
      'GB-BBD': {
        type: 'Unitary authority',
        name: 'Blackburn with Darwen',
      },
      'GB-TOF': {
        type: 'Unitary authority',
        name: 'Torfaen',
      },
      'GB-WDU': {
        type: 'Council area',
        name: 'West Dunbartonshire',
      },
      'GB-WLL': {
        type: 'Metropolitan district',
        name: 'Walsall',
      },
      'GB-WLN': {
        type: 'Council area',
        name: 'West Lothian',
      },
      'GB-GRE': {
        type: 'London borough',
        name: 'Greenwich',
      },
      'GB-MIK': {
        type: 'Unitary authority',
        name: 'Milton Keynes',
      },
      'GB-KEC': {
        type: 'London borough',
        name: 'Kensington and Chelsea',
      },
      'GB-MAN': {
        type: 'Metropolitan district',
        name: 'Manchester',
      },
      'GB-WLV': {
        type: 'Metropolitan district',
        name: 'Wolverhampton',
      },
      'GB-WLS': {
        type: 'Country',
        name: 'Wales',
      },
      'GB-ELN': {
        type: 'Council area',
        name: 'East Lothian',
      },
      'GB-CBF': {
        type: 'Unitary authority',
        name: 'Central Bedfordshire',
      },
      'GB-STH': {
        type: 'Unitary authority',
        name: 'Southampton',
      },
      'GB-KEN': {
        type: 'Two-tier county',
        name: 'Kent',
      },
      'GB-STY': {
        type: 'Metropolitan district',
        name: 'South Tyneside',
      },
      'GB-LCE': {
        type: 'Unitary authority',
        name: 'Leicester',
      },
      'GB-ARM': {
        type: 'District council area',
        name: 'Armagh',
      },
      'GB-BKM': {
        type: 'Two-tier county',
        name: 'Buckinghamshire',
      },
      'GB-SLG': {
        type: 'Unitary authority',
        name: 'Slough',
      },
      'GB-SLF': {
        type: 'Metropolitan district',
        name: 'Salford',
      },
      'GB-ORK': {
        type: 'Council area',
        name: 'Orkney Islands',
      },
      'GB-ARD': {
        type: 'District council area',
        name: 'Ards',
      },
      'GB-SLK': {
        type: 'Council area',
        name: 'South Lanarkshire',
      },
      'GB-BRY': {
        type: 'London borough',
        name: 'Bromley',
      },
      'GB-STT': {
        type: 'Unitary authority',
        name: 'Stockton-on-Tees',
      },
      'GB-POL': {
        type: 'Unitary authority',
        name: 'Poole',
      },
      'GB-BRC': {
        type: 'Unitary authority',
        name: 'Bracknell Forest',
      },
      'GB-SHN': {
        type: 'Metropolitan district',
        name: 'St. Helens',
      },
      'GB-POW': {
        type: 'Unitary authority',
        name: 'Powys',
      },
      'GB-GBN': {
        type: 'Nation',
        name: 'Great Britain',
      },
      'GB-BRD': {
        type: 'Metropolitan district',
        name: 'Bradford',
      },
      'GB-CRF': {
        type: 'Unitary authority',
        name: 'Cardiff',
      },
      'GB-STB': {
        type: 'District council area',
        name: 'Strabane',
      },
      'GB-STE': {
        type: 'Unitary authority',
        name: 'Stoke-on-Trent',
      },
      'GB-DBY': {
        type: 'Two-tier county',
        name: 'Derbyshire',
      },
      'GB-STG': {
        type: 'Council area',
        name: 'Stirling',
      },
      'GB-AGB': {
        type: 'Council area',
        name: 'Argyll and Bute',
      },
      'GB-DEV': {
        type: 'Two-tier county',
        name: 'Devon',
      },
      'GB-WIL': {
        type: 'Unitary authority',
        name: 'Wiltshire',
      },
      'GB-DER': {
        type: 'Unitary authority',
        name: 'Derby',
      },
      'GB-HNS': {
        type: 'London borough',
        name: 'Hounslow',
      },
      'GB-SAW': {
        type: 'Metropolitan district',
        name: 'Sandwell',
      },
      'GB-PLY': {
        type: 'Unitary authority',
        name: 'Plymouth',
      },
      'GB-NIR': {
        type: 'Province',
        name: 'Northern Ireland',
      },
      'GB-THR': {
        type: 'Unitary authority',
        name: 'Thurrock',
      },
      'GB-BAS': {
        type: 'Unitary authority',
        name: 'Bath and North East Somerset',
      },
      'GB-FIF': {
        type: 'Council area',
        name: 'Fife',
      },
      'GB-AGY': {
        type: 'Unitary authority',
        name: 'Isle of Anglesey',
      },
      'GB-SAY': {
        type: 'Council area',
        name: 'South Ayrshire',
      },
      'GB-NFK': {
        type: 'Two-tier county',
        name: 'Norfolk',
      },
      'GB-TFW': {
        type: 'Unitary authority',
        name: 'Telford and Wrekin',
      },
      'GB-BNE': {
        type: 'London borough',
        name: 'Barnet',
      },
      'GB-BNB': {
        type: 'District council area',
        name: 'Banbridge',
      },
      'GB-TOB': {
        type: 'Unitary authority',
        name: 'Torbay',
      },
      'GB-CGN': {
        type: 'Unitary authority',
        name: 'Ceredigion',
      },
      'GB-BFS': {
        type: 'District council area',
        name: 'Belfast',
      },
      'GB-BNH': {
        type: 'Unitary authority',
        name: 'Brighton and Hove',
      },
      'GB-WAR': {
        type: 'Two-tier county',
        name: 'Warwickshire',
      },
      'GB-CGV': {
        type: 'District council area',
        name: 'Craigavon',
      },
      'GB-BNS': {
        type: 'Metropolitan district',
        name: 'Barnsley',
      },
      'GB-TWH': {
        type: 'London borough',
        name: 'Tower Hamlets',
      },
      'GB-ANS': {
        type: 'Council area',
        name: 'Angus',
      },
      'GB-FAL': {
        type: 'Council area',
        name: 'Falkirk',
      },
      'GB-NYK': {
        type: 'Two-tier county',
        name: 'North Yorkshire',
      },
      'GB-ANT': {
        type: 'District council area',
        name: 'Antrim',
      },
      'GB-SWD': {
        type: 'Unitary authority',
        name: 'Swindon',
      },
      'GB-IOS': {
        type: 'Unitary authority',
        name: 'Isles of Scilly',
      },
      'GB-WNM': {
        type: 'Unitary authority',
        name: 'Windsor and Maidenhead',
      },
      'GB-IOW': {
        type: 'Unitary authority',
        name: 'Isle of Wight',
      },
      'GB-GLS': {
        type: 'Two-tier county',
        name: 'Gloucestershire',
      },
      'GB-SFT': {
        type: 'Metropolitan district',
        name: 'Sefton',
      },
      'GB-IVC': {
        type: 'Council area',
        name: 'Inverclyde',
      },
      'GB-WND': {
        type: 'London borough',
        name: 'Wandsworth',
      },
      'GB-LEC': {
        type: 'Two-tier county',
        name: 'Leicestershire',
      },
      'GB-SWK': {
        type: 'London borough',
        name: 'Southwark',
      },
      'GB-YOR': {
        type: 'Unitary authority',
        name: 'York',
      },
      'GB-GLG': {
        type: 'Council area',
        name: 'Glasgow City',
      },
      'GB-RUT': {
        type: 'Unitary authority',
        name: 'Rutland',
      },
      'GB-HMF': {
        type: 'London borough',
        name: 'Hammersmith and Fulham',
      },
      'GB-SFK': {
        type: 'Two-tier county',
        name: 'Suffolk',
      },
      'GB-LEW': {
        type: 'London borough',
        name: 'Lewisham',
      },
      'GB-NYM': {
        type: 'District council area',
        name: 'Newry and Mourne',
      },
      'GB-DUD': {
        type: 'Metropolitan district',
        name: 'Dudley',
      },
      'GB-CLR': {
        type: 'District council area',
        name: 'Coleraine',
      },
      'GB-CWY': {
        type: 'Unitary authority',
        name: 'Conwy',
      },
      'GB-SND': {
        type: 'Metropolitan district',
        name: 'Sunderland',
      },
      'GB-BPL': {
        type: 'Unitary authority',
        name: 'Blackpool',
      },
      'GB-VGL': {
        type: 'Unitary authority',
        name: 'Vale of Glamorgan, The',
      },
      'GB-WFT': {
        type: 'London borough',
        name: 'Waltham Forest',
      },
      'GB-LND': {
        type: 'City corporation',
        name: 'London, City of',
      },
      'GB-CLD': {
        type: 'Metropolitan district',
        name: 'Calderdale',
      },
      'GB-GWN': {
        type: 'Unitary authority',
        name: 'Gwynedd',
      },
      'GB-DUR': {
        type: 'Unitary authority',
        name: 'Durham County',
      },
      'GB-SCT': {
        type: 'Country',
        name: 'Scotland',
      },
      'GB-CLK': {
        type: 'Council area',
        name: 'Clackmannanshire',
      },
      'GB-ENG': {
        type: 'Country',
        name: 'England',
      },
      'GB-MDW': {
        type: 'Unitary authority',
        name: 'Medway',
      },
      'GB-SCB': {
        type: 'Council area',
        name: 'Scottish Borders, The',
      },
      'GB-DNC': {
        type: 'Metropolitan district',
        name: 'Doncaster',
      },
      'GB-TAM': {
        type: 'Metropolitan district',
        name: 'Tameside',
      },
      'GB-WGN': {
        type: 'Metropolitan district',
        name: 'Wigan',
      },
      'GB-DGY': {
        type: 'Council area',
        name: 'Dumfries and Galloway',
      },
      'GB-PTE': {
        type: 'Unitary authority',
        name: 'Peterborough',
      },
      'GB-SKP': {
        type: 'Metropolitan district',
        name: 'Stockport',
      },
      'GB-NWP': {
        type: 'Unitary authority',
        name: 'Newport',
      },
      'GB-ISL': {
        type: 'London borough',
        name: 'Islington',
      },
      'GB-SGC': {
        type: 'Unitary authority',
        name: 'South Gloucestershire',
      },
      'GB-CAY': {
        type: 'Unitary authority',
        name: 'Caerphilly',
      },
      'GB-DGN': {
        type: 'District council area',
        name: 'Dungannon and South Tyrone',
      },
      'GB-WKF': {
        type: 'Metropolitan district',
        name: 'Wakefield',
      },
      'GB-NWM': {
        type: 'London borough',
        name: 'Newham',
      },
      'GB-MDB': {
        type: 'Unitary authority',
        name: 'Middlesbrough',
      },
      'GB-CAM': {
        type: 'Two-tier county',
        name: 'Cambridgeshire',
      },
      'GB-SWA': {
        type: 'Unitary authority',
        name: 'Swansea',
      },
      'GB-DOW': {
        type: 'District council area',
        name: 'Down',
      },
      'GB-BLA': {
        type: 'District council area',
        name: 'Ballymena',
      },
      'GB-HAV': {
        type: 'London borough',
        name: 'Havering',
      },
      'GB-DOR': {
        type: 'Two-tier county',
        name: 'Dorset',
      },
      'GB-GAT': {
        type: 'Metropolitan district',
        name: 'Gateshead',
      },
      'GB-POR': {
        type: 'Unitary authority',
        name: 'Portsmouth',
      },
      'GB-NLK': {
        type: 'Council area',
        name: 'North Lanarkshire',
      },
      'GB-LIV': {
        type: 'Metropolitan district',
        name: 'Liverpool',
      },
      'GB-LIN': {
        type: 'Two-tier county',
        name: 'Lincolnshire',
      },
      'GB-HAM': {
        type: 'Two-tier county',
        name: 'Hampshire',
      },
      'GB-BLY': {
        type: 'District council area',
        name: 'Ballymoney',
      },
      'GB-NDN': {
        type: 'District council area',
        name: 'North Down',
      },
      'GB-BDF': {
        type: 'Unitary authority',
        name: 'Bedford',
      },
      'GB-BDG': {
        type: 'London borough',
        name: 'Barking and Dagenham',
      },
      'GB-SOL': {
        type: 'Metropolitan district',
        name: 'Solihull',
      },
      'GB-OMH': {
        type: 'District council area',
        name: 'Omagh',
      },
      'GB-HPL': {
        type: 'Unitary authority',
        name: 'Hartlepool',
      },
      'GB-COV': {
        type: 'Metropolitan district',
        name: 'Coventry',
      },
      'GB-SHR': {
        type: 'Unitary authority',
        name: 'Shropshire',
      },
      'GB-PKN': {
        type: 'Council area',
        name: 'Perth and Kinross',
      },
      'GB-LMV': {
        type: 'District council area',
        name: 'Limavady',
      },
      'GB-RCH': {
        type: 'Metropolitan district',
        name: 'Rochdale',
      },
      'GB-SHF': {
        type: 'Metropolitan district',
        name: 'Sheffield',
      },
      'GB-NGM': {
        type: 'Unitary authority',
        name: 'Nottingham',
      },
      'GB-RCT': {
        type: 'Unitary authority',
        name: 'Rhondda, Cynon, Taff',
      },
      'GB-BOL': {
        type: 'Metropolitan district',
        name: 'Bolton',
      },
      'GB-BGW': {
        type: 'Unitary authority',
        name: 'Blaenau Gwent',
      },
      'GB-ENF': {
        type: 'London borough',
        name: 'Enfield',
      },
      'GB-DND': {
        type: 'Council area',
        name: 'Dundee City',
      },
      'GB-STN': {
        type: 'London borough',
        name: 'Sutton',
      },
      'GB-MLN': {
        type: 'Council area',
        name: 'Midlothian',
      },
      'GB-RCC': {
        type: 'Unitary authority',
        name: 'Redcar and Cleveland',
      },
      'GB-BGE': {
        type: 'Unitary authority',
        name: 'Bridgend',
      },
      'GB-KHL': {
        type: 'Unitary authority',
        name: 'Kingston upon Hull',
      },
      'GB-MTY': {
        type: 'Unitary authority',
        name: 'Merthyr Tydfil',
      },
    },
  },
  NL: {
    name: 'Netherlands',
    sub: {
      'NL-ZH': {
        type: 'Province',
        name: 'Zuid-Holland',
      },
      'NL-FR': {
        type: 'Province',
        name: 'Fryslân',
      },
      'NL-AW': {
        type: 'Country',
        name: 'Aruba',
      },
      'NL-CW': {
        type: 'Country',
        name: 'Curaçao',
      },
      'NL-UT': {
        type: 'Province',
        name: 'Utrecht',
      },
      'NL-OV': {
        type: 'Province',
        name: 'Overijssel',
      },
      'NL-GE': {
        type: 'Province',
        name: 'Gelderland',
      },
      'NL-BQ2': {
        type: 'Special municipality',
        name: 'Saba',
      },
      'NL-BQ3': {
        type: 'Special municipality',
        name: 'Sint Eustatius',
      },
      'NL-BQ1': {
        type: 'Special municipality',
        name: 'Bonaire',
      },
      'NL-NH': {
        type: 'Province',
        name: 'Noord-Holland',
      },
      'NL-ZE': {
        type: 'Province',
        name: 'Zeeland',
      },
      'NL-SX': {
        type: 'Country',
        name: 'Sint Maarten',
      },
      'NL-FL': {
        type: 'Province',
        name: 'Flevoland',
      },
      'NL-GR': {
        type: 'Province',
        name: 'Groningen',
      },
      'NL-DR': {
        type: 'Province',
        name: 'Drenthe',
      },
      'NL-NB': {
        type: 'Province',
        name: 'Noord-Brabant',
      },
      'NL-LI': {
        type: 'Province',
        name: 'Limburg',
      },
    },
  },
  NZ: {
    name: 'New Zealand',
    sub: {
      'NZ-NSN': {
        type: 'Unitary authority',
        name: 'Nelson City',
      },
      'NZ-S': {
        type: 'Island',
        name: 'South Island',
      },
      'NZ-STL': {
        type: 'Regional council',
        name: 'Southland',
      },
      'NZ-BOP': {
        type: 'Regional council',
        name: 'Bay of Plenty',
      },
      'NZ-HKB': {
        type: 'Regional council',
        name: `Hawke's Bay`,
      },
      'NZ-AUK': {
        type: 'Unitary authority',
        name: 'Auckland',
      },
      'NZ-TKI': {
        type: 'Regional council',
        name: 'Taranaki',
      },
      'NZ-MBH': {
        type: 'Unitary authority',
        name: 'Marlborough District',
      },
      'NZ-CIT': {
        type: 'Special island authority',
        name: 'Chatham Islands Territory',
      },
      'NZ-WKO': {
        type: 'Regional council',
        name: 'Waikato',
      },
      'NZ-TAS': {
        type: 'Unitary authority',
        name: 'Tasman District',
      },
      'NZ-WGN': {
        type: 'Regional council',
        name: 'Wellington',
      },
      'NZ-WTC': {
        type: 'Regional council',
        name: 'West Coast',
      },
      'NZ-OTA': {
        type: 'Regional council',
        name: 'Otago',
      },
      'NZ-NTL': {
        type: 'Regional council',
        name: 'Northland',
      },
      'NZ-MWT': {
        type: 'Regional council',
        name: 'Manawatu-Wanganui',
      },
      'NZ-N': {
        type: 'Island',
        name: 'North Island',
      },
      'NZ-GIS': {
        type: 'Unitary authority',
        name: 'Gisborne District',
      },
      'NZ-CAN': {
        type: 'Regional council',
        name: 'Canterbury',
      },
    },
  },
  PA: {
    name: 'Panama',
    sub: {
      'PA-NB': {
        type: 'Indigenous region',
        name: 'Ngöbe-Buglé',
      },
      'PA-8': {
        type: 'Province',
        name: 'Panamá',
      },
      'PA-9': {
        type: 'Province',
        name: 'Veraguas',
      },
      'PA-6': {
        type: 'Province',
        name: 'Herrera',
      },
      'PA-7': {
        type: 'Province',
        name: 'Los Santos',
      },
      'PA-4': {
        type: 'Province',
        name: 'Chiriquí',
      },
      'PA-5': {
        type: 'Province',
        name: 'Darién',
      },
      'PA-2': {
        type: 'Province',
        name: 'Coclé',
      },
      'PA-3': {
        type: 'Province',
        name: 'Colón',
      },
      'PA-1': {
        type: 'Province',
        name: 'Bocas del Toro',
      },
      'PA-10': {
        type: 'Province',
        name: 'Panamá Oeste',
      },
      'PA-EM': {
        type: 'Indigenous region',
        name: 'Emberá',
      },
      'PA-KY': {
        type: 'Indigenous region',
        name: 'Kuna Yala',
      },
    },
  },
  US: {
    name: 'United States',
    sub: {
      'US-NY': {
        type: 'State',
        name: 'New York',
      },
      'US-PA': {
        type: 'State',
        name: 'Pennsylvania',
      },
      'US-TN': {
        type: 'State',
        name: 'Tennessee',
      },
      'US-VI': {
        type: 'Outlying area',
        name: 'Virgin Islands, U.S.',
      },
      'US-NV': {
        type: 'State',
        name: 'Nevada',
      },
      'US-NJ': {
        type: 'State',
        name: 'New Jersey',
      },
      'US-NH': {
        type: 'State',
        name: 'New Hampshire',
      },
      'US-VA': {
        type: 'State',
        name: 'Virginia',
      },
      'US-HI': {
        type: 'State',
        name: 'Hawaii',
      },
      'US-PR': {
        type: 'Outlying area',
        name: 'Puerto Rico',
      },
      'US-NM': {
        type: 'State',
        name: 'New Mexico',
      },
      'US-NC': {
        type: 'State',
        name: 'North Carolina',
      },
      'US-ND': {
        type: 'State',
        name: 'North Dakota',
      },
      'US-NE': {
        type: 'State',
        name: 'Nebraska',
      },
      'US-LA': {
        type: 'State',
        name: 'Louisiana',
      },
      'US-UT': {
        type: 'State',
        name: 'Utah',
      },
      'US-SD': {
        type: 'State',
        name: 'South Dakota',
      },
      'US-DC': {
        type: 'District',
        name: 'District of Columbia',
      },
      'US-DE': {
        type: 'State',
        name: 'Delaware',
      },
      'US-FL': {
        type: 'State',
        name: 'Florida',
      },
      'US-WA': {
        type: 'State',
        name: 'Washington',
      },
      'US-UM': {
        type: 'Outlying area',
        name: 'United States Minor Outlying Islands',
      },
      'US-KS': {
        type: 'State',
        name: 'Kansas',
      },
      'US-WI': {
        type: 'State',
        name: 'Wisconsin',
      },
      'US-OR': {
        type: 'State',
        name: 'Oregon',
      },
      'US-KY': {
        type: 'State',
        name: 'Kentucky',
      },
      'US-ME': {
        type: 'State',
        name: 'Maine',
      },
      'US-OH': {
        type: 'State',
        name: 'Ohio',
      },
      'US-IA': {
        type: 'State',
        name: 'Iowa',
      },
      'US-MD': {
        type: 'State',
        name: 'Maryland',
      },
      'US-ID': {
        type: 'State',
        name: 'Idaho',
      },
      'US-WY': {
        type: 'State',
        name: 'Wyoming',
      },
      'US-VT': {
        type: 'State',
        name: 'Vermont',
      },
      'US-RI': {
        type: 'State',
        name: 'Rhode Island',
      },
      'US-IN': {
        type: 'State',
        name: 'Indiana',
      },
      'US-IL': {
        type: 'State',
        name: 'Illinois',
      },
      'US-AK': {
        type: 'State',
        name: 'Alaska',
      },
      'US-TX': {
        type: 'State',
        name: 'Texas',
      },
      'US-CO': {
        type: 'State',
        name: 'Colorado',
      },
      'US-AR': {
        type: 'State',
        name: 'Arkansas',
      },
      'US-GU': {
        type: 'Outlying area',
        name: 'Guam',
      },
      'US-MA': {
        type: 'State',
        name: 'Massachusetts',
      },
      'US-AL': {
        type: 'State',
        name: 'Alabama',
      },
      'US-MO': {
        type: 'State',
        name: 'Missouri',
      },
      'US-MN': {
        type: 'State',
        name: 'Minnesota',
      },
      'US-WV': {
        type: 'State',
        name: 'West Virginia',
      },
      'US-CA': {
        type: 'State',
        name: 'California',
      },
      'US-OK': {
        type: 'State',
        name: 'Oklahoma',
      },
      'US-MI': {
        type: 'State',
        name: 'Michigan',
      },
      'US-GA': {
        type: 'State',
        name: 'Georgia',
      },
      'US-AZ': {
        type: 'State',
        name: 'Arizona',
      },
      'US-MT': {
        type: 'State',
        name: 'Montana',
      },
      'US-MS': {
        type: 'State',
        name: 'Mississippi',
      },
      'US-SC': {
        type: 'State',
        name: 'South Carolina',
      },
      'US-MP': {
        type: 'Outlying area',
        name: 'Northern Mariana Islands',
      },
      'US-AS': {
        type: 'Outlying area',
        name: 'American Samoa',
      },
      'US-CT': {
        type: 'State',
        name: 'Connecticut',
      },
    },
  },
};

export default data;
