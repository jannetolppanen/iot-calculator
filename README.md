`IP`
> http://4.210.123.248:3000/
***

`URL`
> http://iotcounter.northeurope.cloudapp.azure.com/
***

Get current count
`HTTP GET`

> http://iotcounter.northeurope.cloudapp.azure.com/status
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

> http://iotcounter.northeurope.cloudapp.azure.com/update
***

Reset count
`HTTP POST`
```
{
    "username": "iotcalc",
    "password": "secret",
}
```

> http://iotcounter.northeurope.cloudapp.azure.com/reset
***



Shows number of current visitors and the total number of visitors since last reset


