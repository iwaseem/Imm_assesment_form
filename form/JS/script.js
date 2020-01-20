


var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ],
  select = document.getElementById("countries");
//select = document.getElementById("countries_2")
for (country in countries) {
  select.add(new Option(countries[country]));
}

select = document.getElementById("countries_2");
for (country in countries) {
  select.add(new Option(countries[country]));
}

var levelOfEducation = [
    "Choose From The List",
    "None, or Less than Secondary School",
    "Secondary Diploma (High School Graduation)",
    "One-year program at University, College, Trade or Techincal School, or Other Institue",
    "Two-year program at University, College, Trade or Techincal School, or Other Institue",
    "Bachelors Degree (three or more year program at a university, college, Trade or Techincal School, or Other Institue)",
    "Masters degree, or professional degree needed to practice in a licensed profession",
    "Doctoral Level University Degree"
  ],
  select = document.getElementById("education");
//select = document.getElementById("countries_2")
for (education in levelOfEducation) {
  select.add(new Option(levelOfEducation[education]));
}





//sections
function hideAll(){
  document.getElementById("personalInfo").setAttribute("style", "display: none;")
  document.getElementById("relativsCanada").setAttribute("style", "display: none;")
  document.getElementById("netWorth").setAttribute("style", "display: none;")
  document.getElementById("educationSection").setAttribute("style", "display: none;")
  document.getElementById("employment").setAttribute("style", "display: none;")
  document.getElementById("language").setAttribute("style", "display: none;")
  document.getElementById("additional").setAttribute("style", "display: none;")
  document.getElementById("otherInfo").setAttribute("style", "display: none;")
}



let sections = [
  'personalInfo',
  'relativsCanada',
  'netWorth',
  'educationSection',
  'employment',
  'language',
  'additional',
  'otherInfo',
]
let currentSection = 0;

function showSection(name){
  document.getElementById(sections[name]).setAttribute("style", "display: block;")
}

function handleButtons(pageNumber){
  if(pageNumber === 0){
    document.getElementById("backButton").setAttribute("style", "display: none;")
  }else{
    document.getElementById("backButton").setAttribute("style", "display: inline-block;")

  }
  if(pageNumber === sections.length - 1){
    document.getElementById("nextButton").setAttribute("style", "display: none;")
    document.getElementById("submitButton").setAttribute("style", "display: inline-block;")
  }else{
    document.getElementById("nextButton").setAttribute("style", "display: inline-block;")
    document.getElementById("submitButton").setAttribute("style", "display: none;")
  }
}

handleSections = (x) => {
  if(x === "next"){
    currentSection++
    hideAll()
    showSection(currentSection)
  }else if(x === "back"){
    currentSection--
    hideAll()
    showSection(currentSection)
  }
  handleButtons(currentSection)
}

function startApp(){
  hideAll()
  currentSection = 0
  showSection(currentSection)
  handleButtons(currentSection)
}
startApp()