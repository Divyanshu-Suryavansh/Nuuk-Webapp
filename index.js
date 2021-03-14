console.log('Few changes in the webpage through js')

var quote_tab = document.getElementById("quote-tab");

quote_tab.onclick = function() {

    var form = document.getElementById('form-nav')
    form.style.right= "0px";
    form.style.transition = "0.6s";
}

var cancel = document.getElementById('form-close');

cancel.onclick = function() {

    var form = document.getElementById('form-nav')
    form.style.right= "-100%";
    form.style.transition = "1s";
}

var form_submit = document.getElementById('form-submit');

form_submit.onclick = function() {

    var form = document.getElementById('form-nav')
    form.style.right= "-100%";
    form.style.transition = "1s";
}

var quote_tab_2 = document.getElementById("quote-tab-2");

quote_tab_2.onclick = function() {

    var form = document.getElementById('form-nav')
    form.style.right= "0px";
    form.style.transition = "0.6s";
}

var form_toggle = document.getElementById('toggle-menu');

form_toggle.onclick = function() {

    var navigation = document.getElementById('navigation-menu');
    navigation.classList.toggle("show-menu")

    var cancel1 = document.getElementById('line-1');
    cancel1.classList.toggle("h-1")

    var cancel2 = document.getElementById('line-2');
    cancel2.classList.toggle("h-2")
}





