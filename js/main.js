function getApi() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText; // string
            var yassin = JSON.parse(result); // string to json (array of object)
            var basket = "";
            for (var i = 0; i < yassin.length; i++) {

                var cartoona = ` <div class="md:col-4 text-center">
                <img src="${yassin[i].url}" class="w-100">
                <h4>${yassin[i].title}</h4>
                <h6>${yassin[i].id}</h6>
                </div>
                `;
                basket = basket + cartoona;
            }


            document.querySelector(".test").innerHTML = basket;

        }
    }

    xhttp.open("GET", 'https://jsonplaceholder.typicode.com/photos', true);
    xhttp.send();

}

getApi();