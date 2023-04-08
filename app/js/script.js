let bill = $("#bill"),
    numbPeople = $("#numbPeople"),
    customTip = $("#customTip"),
    tip = $("#tip"),
    total = $("#total");

let tipValue = 0;   

startSetting();

bill.on("input", () => {
    bill.val(bill.val().replace(/[a-zA-za-ž]/g, ""));
    if (bill.is(":invalid")) {
        $(".errorMess1").removeClass("hidden");
    }
    else $(".errorMess1").addClass("hidden");

    Calculate();
})
numbPeople.on("input", (event) => {
    numbPeople.val(numbPeople.val().replace(/[a-zA-za-ž]/g, ""));
    if (numbPeople.is(":invalid")) {
        $(".errorMess2").removeClass("hidden");
    }
    else $(".errorMess2").addClass("hidden");

    Calculate();
})

$.each($(".bttnTips"), (key, bttn) => {
    $(bttn).on("click", () => {
        tipValue = bttn.value; //|| customTip.value;
        customTip.val("");
        Calculate();
    })
})
$(customTip).on("input", () => {
    customTip.val(customTip.val().replace(/[a-zA-Za-ž]/g, ""));
    tipValue = customTip.val(); 
    Calculate();
})

$("#reset").on("click", () => {
    startSetting();
})

function startSetting() {
    bill.val(0.00);
    numbPeople.val(1);
    tip.text("$0.00");
    total.text("$0.00");
    customTip.val("");
}
function Calculate() {
    if (bill.val() === "" || numbPeople.val() === "") {
        startSetting();
    }

    let tipAmount = (bill.val()*(tipValue/100))/numbPeople.val();
    let totalAmount = bill.val()/numbPeople.val() + tipAmount;
    tip.text("$" + tipAmount.toFixed(2));
    total.text("$" + totalAmount.toFixed(2));   
}

