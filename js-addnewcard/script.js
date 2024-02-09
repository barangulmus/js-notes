let sayac;
let backgroundcolor;
let backgroundcolorspecial;
function RadioBgColorControls() {
    var bg_primary = document.getElementById("exampleRadiosPrimary");
    var bg_secondary = document.getElementById("exampleRadiosSecondary");
    var bg_success = document.getElementById("exampleRadiosSuccess");
    var bg_danger = document.getElementById("exampleRadiosDanger");
    var bg_warning = document.getElementById("exampleRadiosWarning");
    var bg_info = document.getElementById("exampleRadiosInfo");
    var bg_special = document.getElementById("exampleRadiosSpecial");

    if (bg_primary.checked) {
        backgroundcolor = "primary";
    }
    if (bg_secondary.checked) {
        backgroundcolor = "secondary";
    }
    if (bg_success.checked) {
        backgroundcolor = "success";
    }
    if (bg_danger.checked) {
        backgroundcolor = "danger";
    }
    if (bg_warning.checked) {
        backgroundcolor = "warning";
    }
    if (bg_info.checked) {
        backgroundcolor = "info";
    }
    if (bg_special.checked) {
        backgroundcolorspecial = document.getElementById("radioNoLabelSpecialColor").value;
    }
    if (!bg_special.checked) {
        backgroundcolorspecial = null;
    }
}
let textcolor;
let textspecial;
function RadioTColorControls() {
    var tc_primary = document.getElementById("textRadiosPrimary");
    var tc_secondary = document.getElementById("textRadiosSecondary");
    var tc_success = document.getElementById("textRadiosSuccess");
    var tc_danger = document.getElementById("textRadiosDanger");
    var tc_warning = document.getElementById("textRadiosWarning");
    var tc_info = document.getElementById("textRadiosInfo");
    var tc_special = document.getElementById("textRadiosSpecial");

    if (tc_primary.checked) {
        textcolor = "primary";
    }
    if (tc_secondary.checked) {
        textcolor = "secondary";
    }
    if (tc_success.checked) {
        textcolor = "success";
    }
    if (tc_danger.checked) {
        textcolor = "danger";
    }
    if (tc_warning.checked) {
        textcolor = "warning";
    }
    if (tc_info.checked) {
        textcolor = "info";
    }
    if (tc_special.checked) {
        textspecial = document.getElementById("radioTextLabelSpecialColor").value;
    }
    if (!tc_special.checked) {
        textspecial = null;
    }
}
let addnewcards_button = document.getElementById("addnewcard-form").addEventListener("click", function () {
    //Bu kod, içinde bulunduğumuz click fonksiyonu çalıştığında arkaplanın opacitysini düşürerek form ekranını ortaya çıkarır.
    document.querySelector(".cards").style = "opacity:30%;";

    document.getElementById("ana").style = "opacity: 1; pointer-events:all;";

    //Altta bulunan kodda, doldurulan formdaki veriler altta bulunan buttona lik olunduğunda yeni bir kart oluşturmaya çalışır
});
//Bu kod parçasi X butonuna basıldığında tetiklernir
document.getElementById("closeforms").addEventListener("click", function () {
    document.querySelector(".cards").style = "opacity:100%;"
    document.getElementById("ana").style = "opacity: 0; pointer-events:none;";
});
let addnewcard = document.getElementById("addnewcard").addEventListener("click", function () {
    RadioBgColorControls();
    const card_header = document.getElementById("card-header-input");
    const card_text = document.getElementById("card-text-input");
    const cards = document.getElementById("cards");
    console.log(cards);
    let card;
    if (backgroundcolor.length > 0) {
        card = `
                <div class="card mb-3 bg-${backgroundcolor} animate__bounceIn">
                    <div class="card-body">
                        <h5 class="card-title">${card_header.value}</h5>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>    
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square pencil" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        </span>
                        <p class="card-text">${card_text.value}</p>
                    </div>
                </div>`;
    } else if (backgroundcolorspecial.length > 0) {
        card = `
                <div class="card mb-3 animate__bounceIn" style="background-color:${backgroundcolorspecial};">
                    <div class="card-body">
                        <h5 class="card-title">${card_header.value}</h5>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>    
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square pencil" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        </span>
                        <p class="card-text">${card_text.value}</p>
                    </div> 
                </div>`;
    }
    document.querySelector(".cards").style = "opacity:100%;"
    document.getElementById("ana").style = "opacity: 0; pointer-events:none;";
    cards.insertAdjacentHTML("afterbegin", card);
    sayac++;
});
document.addEventListener("click", function (event) {
    // Tıklanan elementin bir delete butonu olup olmadığını kontrol et
    if (event.target.closest('.card .trash')) {
        // Tıklanan delete butonuna ait olan kartı bul
        var cardToDelete = event.target.closest('.card');
        // Kart varsa, onu sil
        if (cardToDelete) {
            cardToDelete.remove();
            sayac--;
        }
    }
});
/*document.addEventListener("click", function (event) {
    // Tıklanan elementin bir refresh butonu olup olmadığını kontrol et
    if (event.target.closest('.card .pencil')) {
        // Tıklanan delete butonuna ait olan kartı bul
        var cardToRefresh = event.target.closest('.card');
        // Kart varsa, onu yenile
        if (cardToRefresh) {

            document.querySelector(".cards").style = "opacity:30%;";
            document.getElementById("ana").style = "opacity: 1; pointer-events:all;";
            document.getElementById("addnewcard").id = "refreshtocard";
            document.getElementById("refreshtocard").value = "Refresh to card";
            var card_header_refresh = cardToRefresh.querySelector("#card-header-input").value;
            var card_text_refresh = cardToRefresh.querySelector("#card-text-input").value;
            const card_header_ref = document.getElementById("card-header-input").value;
            const card_text_ref = document.getElementById("card-text-input").value;


            //////////////////////////////////////////////////////////////////////////////////////////////
            document.getElementById("refreshtocard").addEventListener("click", function () {
                card_header_refresh.value = card_header_ref;
                card_text_refresh.value = card_text_ref;
                document.querySelector(".cards").style = "opacity:100%;"
                document.getElementById("ana").style = "opacity: 0; pointer-events:none;";
                //burada yapılacak işlem, card içinde yazılı olan value değerine bizim yukarıda refresh ile tanımladığımız kısım atanacak ve çarpı butonun basılmış gibi herşey düzelecek, yani insertAdjaventElement olayı gerçekleşmeyecek.
            });
        }
    }
    else {
        document.getElementById("refreshtocard").id = "addnewcard";
        document.getElementById("addnewcard").value = "add new card";
    }
});*/
