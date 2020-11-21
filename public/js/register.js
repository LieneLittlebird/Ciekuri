$('#main-form').submit(function () {
    $('.error-msg').hide();

    var isValid = true;

    if ($('#first-name').val() == '') {
        $('#first-name-error').show();
        isValid = false;
    }
    if ($('#last-name').val() == '') {
        $('#last-name-error').show();
        isValid = false;
    }
    if ($('#email').val() == '') {
        $('#email-error').show();
        isValid = false;
    }
    if ($('#password1').val() == '') {
        $('#password1-error').show();
        isValid = false;
    }
    if ($('#password1').val().length <= 8) {
        $('#password3-error').show();
        isValid = false;
    }
    if ($('#password1').val() != $('#password2').val()) {
        $('#password2-error').show();
        isValid = false;
    }
    
    if (!$('#check-box').prop('checked')) {
        $('#terms-error').show();
        isValid = false;
    }
    if ($('#country').val() == null) {
        $('#country-error').show();
        isValid = false;
    }

    if ($('#gender').val() == null) {
        $('#gender-error').show();
        isValid = false;
    }
    return isValid;
});