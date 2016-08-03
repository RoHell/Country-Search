var urlName = 'https://restcountries.eu/rest/v1/name/';
var urlCapital = 'https://restcountries.eu/rest/v1/capital/';
var countriesList = $('#countries');
var countryInfo = $('#country-info');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	var capital = $.ajax({
				url: urlCapital + countryName,
				method: 'GET',
				success: showCountryInfo
			});
	var name = $.ajax({
				url: urlName + countryName,
				method: 'GET',
				success: showCountriesList
			});
	};

function showCountryInfo(resp) {
	// countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.capital + ' (' + item.name + ')').appendTo(countryInfo);		
	});
}