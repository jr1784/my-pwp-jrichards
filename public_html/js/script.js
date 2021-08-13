$(document).ready(function() {
    $('#contactMeForm').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        // these are the rules to define what data we want and what we don't want
        //each of these groups start with the form input NAME attribute
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            emailAddress: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            firstName: {
                required: 'First name is required'
            },
            lastName: {
                required: 'Last name is required'
            },
            emailAddress: {
                email: 'Please provide a valid email.',
                required: 'Email is required'
            },
            message: {
                required: 'Message is required',
                maxlength: 'Message must be 2000 characters or less.'
            }
        },
        submitHandler: (form) => {
            console.log("is this thing on?")
            $('#contactMeForm').ajaxSubmit({
                type: 'POST',
                url: $('#contactMeForm').attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css('display', '')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success' >= 1)) {
                        $('#contactMeForm')[0].reset()
                    }
                }
            })
        }

    })

})