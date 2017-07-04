/*
 *version 1.5
 *developed by wizard-team (suresh)
 */
$.fn.SfromValidate = function (options) {

    /*
     * variable declaration
     */
    var $this = this;
    var email_filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var name_filter = /^[a-zA-Z]+$/;
    var number_filter = /^[0-9]+$/;
    var check_field = true;
    var form_action = this.attr('action');
    var form_data = this.serialize();
    var start_error_label = '<label class="field-required">';
    var start_cstm_label = '<label class="custom-msg">';
    var start_suces_label = '<label class="suces-message">';
    var finish_label = '</label>';
    var px_solid_red = '1px solid red';


    /*
     * Default option
     */
    var settings = $.extend({
        required_message: "Field is required",
        sucess_message: "Your message has been sent successfully",
        invalid_email_message: "Enter a valid email",
        only_character_message: "Enter only a character",
        only_digit_message: "Enter only a digit",
        minimum_digit_message: "Enter atleast 2 character",
        maximum_digit_message: "Enter more than 8 character",
        fix_length_message: "Enter a 10 digit",
        minimum: 2,
        maximum: 8,
        field_length: 10,
        deactive_validation_message: false,
        show_response: false,
        no_need_ajax: false,
        hide_loader: false,
        validation_message_position: '',
        single_required_message: "* fields are required"
    }, options);

    /*
     *onload event
     */
    $('.field-required, .suces-message, .custom-msg').remove();
    $('input, select, textarea').removeAttr('style');
    if (settings.hide_loader == false) {
        this.find('button').append('<div class="sloader"></div>');
    }


    /*
     *check form action attribute exist or not
     */
    if (!this.attr('action')) {
        //if form action attribute is not exist then show alert to user
        alert('form action attribute should be required');
    } else {
        
        
        /**
         * Reuired validation
         */
        var i = 0;
        this.find('.required').each(function () {
            if ($(this).val() == '') {
                if (settings.deactive_validation_message == false) {
                    $custom_msg = $(this).attr('data-validation');
                    if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        if (typeof $custom_msg !== typeof undefined && $custom_msg !== false) {
                            $(this).parent().append(start_error_label + $custom_msg + finish_label);
                        } else {
                            $(this).parent().append(start_error_label + settings.required_message + finish_label);
                        }
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.single_required_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                }
                else {
                    $(this).css('border', px_solid_red);
                }
                $('.sloader').remove();
                check_field = false;
            }
        })


        /**
         * Email validation
         */
        var i = 0;
        this.find('.email').each(function () {
            if ($(this).val() != '' && !($(this).val()).match(email_filter)) {
                if (settings.deactive_validation_message == false) {
                if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                    $(this).parent().append(start_error_label + settings.invalid_email_message + finish_label);
                } else {
                    if (i == 0) {
                        $(start_error_label + settings.invalid_email_message + finish_label).appendTo(settings.validation_message_position);
                    }
                    $(this).css('border', px_solid_red);
                    i++;
                }

            } else {
                $(this).css('border', px_solid_red);
            }
            $('.sloader').remove();
            check_field = false;
            }
        })


        /**
         * Character validation
         */
          var i = 0;
        this.find('.character').each(function () {
            if ($(this).val() != '' && !($(this).val()).match(name_filter)) {
                if (settings.deactive_validation_message == false) {
                    if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        $(this).parent().append(start_error_label + settings.only_character_message + finish_label);
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.only_character_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                } else {
                    $(this).css('border', px_solid_red);
                }
                $('.sloader').remove();
                check_field = false;
            }
        })


        /**
         * Number validation
         */
        var i = 0;
        this.find('.number').each(function () {
            if ($(this).val() != '' && !($(this).val()).match(number_filter)) {
                    if (settings.deactive_validation_message == false) {
                    if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        $(this).parent().append(start_error_label + settings.only_digit_message + finish_label);
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.only_digit_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                    } else {
                        $(this).css('border', px_solid_red);
                    }
                    $('.sloader').remove();
                    check_field = false;
            }

        })

        /**
         * Minimum validation
         */
         var i = 0;
        this.find('.minimum').each(function (i) {
            if ($(this).val() != '') {
                if ($(this).val().length < settings.minimum) {
                    if (settings.deactive_validation_message == false) {
                        if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        $(this).parent().append(start_error_label + settings.minimum_digit_message + finish_label);
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.minimum_digit_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                    } else {
                        $(this).css('border', px_solid_red);
                    }
                    $('.sloader').remove();
                    check_field = false;
                }
            }

        })


        /**
         * Maximum validation
         */
        var i = 0;
        this.find('.maximum').each(function (i) {
            if ($(this).val() != '') {
                if ($(this).val().length > settings.maximum) {
                    if (settings.deactive_validation_message == false) {
                         if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        $(this).parent().append(start_error_label + settings.maximum_digit_message + finish_label);
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.maximum_digit_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                    } else {
                        $(this).css('border', px_solid_red);
                    }
                    $('.sloader').remove();
                    check_field = false;
                }
            }

        })



        /**
         * Fix digit validation
         */
        var i = 0;
        this.find('.fixlenght').each(function (i) {
            if ($(this).val() != '') {
                if ($(this).val().length != settings.field_length) {
                    if (settings.deactive_validation_message == false) {
                        if (settings.validation_message_position == '' || settings.validation_message_position.length == 0) {
                        $(this).parent().append(start_error_label + settings.fix_length_message + finish_label);
                    } else {
                        if (i == 0) {
                            $(start_error_label + settings.fix_length_message + finish_label).appendTo(settings.validation_message_position);
                        }
                        $(this).css('border', px_solid_red);
                        i++;
                    }
                    } else {
                        $(this).css('border', px_solid_red);
                    }
                    $('.sloader').remove();
                    check_field = false;
                }
            }

        })


        /**
         * Execute bolow if validation error occur
         */
        if (check_field == false) {
            $('.field-required').css('display', 'block');
            $("html, body").animate({
                scrollTop: $(this).offset().top - 80
            }, 700);
        }

        /**
         * execute below function if no validation error in form
         */
        if (check_field == true && settings.no_need_ajax == false) {
            jQuery.ajax({
                type: "POST",
                url: form_action,
                data: form_data,
                cache: false,
                success: function (data) {
                    // proceess sucess 
                    setTimeout(function () {
                        $('.sloader').remove();
                        if (settings.show_response == false) {
                            $this.find('button').parent().append(start_suces_label + settings.sucess_message + finish_label);
                        } else {
                            $this.find('button').parent().append(start_cstm_label + data + finish_label);
                        }
                        $('label', $this).slideDown();
                        $this.trigger('reset');
                        setTimeout(function () {
                            $('.custom-msg, .suces-message').slideUp();
                        }, 4000)
                        $("html, body").animate({
                            scrollTop: $($this.find('button')).offset().top - 180
                        }, 700);

                    }, 3000)

                },
                error: function (error) {
                    //process fail
                    $('.sloader').remove();
                    alert('fail');

                }
            });
        }


        /**
         * return true id no need ajax is tru
         */
        if (check_field == true && settings.no_need_ajax == true) {
            return 'true';
        }


    }

}
