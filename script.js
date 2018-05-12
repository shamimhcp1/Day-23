
// Check Error ///


function checkFirstName() {
    var firstName = $('#firstName').val();
    var reg = /^[a-zA-Z -]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text(' ')
    } else {
        $('#firstNameError').text('First Name Should be 2 to 10 Characters')
    }
};

function checkLastName() {
    var lastName = $('#lastName').val();
    var reg = /^[a-zA-Z -]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text(' ')
    } else {
        $('#lastNameError').text('Last Name Should be 2 to 10 Characters')
    }
};

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text(' ')
    } else {
        $('#emailAddressError').text('Email Address is invalid')
    }
};

function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){
        $('#passwordError').text(' ')
    } else {
        $('#passwordError').text('* password formate is invalid')
    }
};
function checkConfirmPassword() {
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if(Password = confirmPassword){
        $('#confirmPasswordError').text(' ')
    } else {
        $('#confirmPasswordError').text('* password should be same')
    }
};

$('#firstName').keyup(function () {
    checkFirstName();
});

$('#lastName').keyup(function () {
    checkLastName();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});
$('#password').keyup(function () {
    checkPassword();
});
$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});






// Fixed Menu////////////////////////////////

$(window).scroll(function () {
    var menuPosition = $("#menu").position();
    var windowScrollPosition = $(window).scrollTop();
    if(windowScrollPosition >= menuPosition.top) {
        $('#menuUl').css ({
            'position': 'fixed',
            'top': '0px',
            'width': '80%'
        });
    } else {
        $('#menuUl').css ({
            'position': 'relative',
            'top': '0px',
            'width': '100%'
        })
    }
});
