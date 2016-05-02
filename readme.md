#Angular Timepicker

<!--[Demo](http://www.pocketconfetti.com/token-fields "Token Fields Demo")-->

Not a plugin, just a component used in an application.

This timepicker directive uses three select menus to set the time. It has limited options that are tailored to the application it is designed for. Hours are set at 1-12, minutes default to 15 minute intervals, but can be set manually with the `minute-interval` attribute.

    <timepicker model="vm.timestamp"></timepicker>