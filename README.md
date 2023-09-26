`IP`
> http://4.210.123.248:3000/
***

`URL`
> http://iotcounter.northeurope.cloudapp.azure.com:3000/
***

Get current count
`HTTP GET`

> http://4.210.123.248:3000
***

Update count
`HTTP POST`
```
{
    "username": "iotcalc",
    "password": "secret",
    "currentCount": 0,
    "totalCount": 0
}
```

> http://4.210.123.248:3000/update
***

Reset count
`HTTP POST`
```
{
    "username": "iotcalc",
    "password": "secret",
}
```

> http://4.210.123.248:3000/reset
***



Shows number of current visitors and the total number of visitors since last reset

Azure
ssh username@4.210.123.248
use screen
