# SformValidate
form validation and send data to form action using ajax and without ajax action
*************************************************************************************************************************************

NOTE :  include SformValidate.css anf SformValidate.js file in your document
-----------------------------------------------------------------------------------------------------------------------------------------

Easy to use this plugin in our site.
-> Add below function after js file 

  ```js
  $(target_form).submit(function(){
     $(this).SfromValidate();
         return false;
  });
```		 
                 
  in target_form add form class, id or custom attribute ..

-----------------------------------------------------------------------------------------------------------------------------------------

East  to validate my form.

	(1)required : add "required" class in which field you need required field validation.
 	(2)email : add "email" class in which filed you need email field validation.
 	(3)character : add "character" class in which field you need character  field validation.
 	(4)number : add "number" class in which field you need number  field validation.
 	(5)minimum : add "minimum" class in which field you need atleast minimum  character in field validation.
 	(6)maximum: add "maximum" class in which field you need maximum character in field validation..
 	(7)fix-lenght: add "fix-lenght" class in which field you need fix digit or character in field validation.(like 10 digit you need)
	
-----------------------------------------------------------------------------------------------------------------------------------------

East to set custome validation message.
```js
$(target_form).submit(function () {
    $(this).SfromValidate({
        required_message: "add your custom message for required field validation",
        sucess_message: "add your custom message for email sent sucessfully",
        invalid_email_message: "add your custom message for Invalid email validation",
        only_character_message: "add your custom message for enter only a character validation",
        only_digit_message: "add your custom message form enter only a digit field validation",
        minimum_digit_message: "add your custom message for enter atleast 2 character validation",
        maximum_digit_message: "add your custom message for enter more than 8 character validation",
    });
    return false;
});
```
-----------------------------------------------------------------------------------------------------------------------------------------

Easy to set minimum and maximum validation range in field validation. 
`The default mimimum range is 2 and maximum range is 8 .`
```js

$(target_form).submit(function () {
    $(this).SfromValidate({
        maximum: set your custom minimum range,
        maximum: set your maximum custom range,
    });
    return false;
});

```
-----------------------------------------------------------------------------------------------------------------------------------------

Easy to change border color instead of validation message ?
```js
$(target_form).submit(function () {
    $(this).SfromValidate({
        deactive_validation_message: true
    });
    return false;
});
```
----------------------------------------------------------------------------------------------------------------------------------------
Easy to show response message from form targated file
```js
$(target_form).submit(function () {
    $(this).SfromValidate({
        show_response: true
    });
    return false;
});
 ```                
-----------------------------------------------------------------------------------------------------------------------------------------
Easy to set fix limit of field value
```js
$(target_form).submit(function () {
    $(this).SfromValidate({
        field_length: 12
    });
    return false;
});
```
-----------------------------------------------------------------------------------------------------------------------------------------
Easy to avoid use form submit using ajax
```js
var $response = $(this).SfromValidate({
    show_response: true,
    no_need_ajax: true,
})
alert($response);
if ($response == 'true') {
    return true;
} else {
    return false;
}
})
  ```               
-----------------------------------------------------------------------------------------------------------------------------------------
Easy to set validation message position
```js
$(this).SfromValidate({
   validation_message_position : $('.class_name_where_validation_msg_show')
})
```
-----------------------------------------------------------------------------------------------------------------------------------------
Easy to set custom validation message

     <input type="text" class="required" data-validation="Loan value field is reqired" name="ur_loan_value">	
               
-----------------------------------------------------------------------------------------------------------------------------------------
Easy to choose if you don't want loader
```js
$(this).SfromValidate({
    hide_loader : true
})
                     
```

