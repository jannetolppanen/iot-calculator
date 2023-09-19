`IP` 
>http://4.210.123.248:3000/

 
`Osoite` 
>http://iotcounter.northeurope.cloudapp.azure.com:3000/

Get current count
`HTTP GET`
>http://4.210.123.248:3000

Increment count
`HTTP POST`
>http://4.210.123.248:3000/increment

Decrement count
`HTTP POST`
>http://4.210.123.248:3000/decrement

Reset count
`HTTP POST`
>http://4.210.123.248:3000/reset

Increment, decrement and reset require a credentials. Get current count does not.
For increment, decrement and reset to work you need to add credentials to the request body:

    {
        "username": "iotcalc",
        "password": "secret"
    }

Shows number of current visitors and the total number of visitors since last reset

Azure
ssh username@4.210.123.248
use screen
