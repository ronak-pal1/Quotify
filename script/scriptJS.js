
function getQuote()
{

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0779041587msh879dba5f85a5986p13e3cfjsn3c2cf0acded7',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        document.getElementById("quoteField").innerHTML=response.content;
        document.getElementById("authorField").innerHTML="- "+response.originator.name;
    })
	.catch(err => console.error(err));

}


function copy() {
    // Get the text field
    var copyText = document.getElementById("quoteField").innerHTML;
  
    navigator.clipboard.writeText(copyText);
}
