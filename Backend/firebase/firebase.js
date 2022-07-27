const admin = require("firebase-admin")
const firebaseConfig = {
    "type": "service_account",
    "project_id": "mynext-a074a",
    "private_key_id": "d70475803fd0c628746bfb2c60d63521c0ada5ae",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmvCljMXjjPCB0\nU0wgayFkvUZLGz+NRONCmyjLAhGjZW6BxYjLvZcTCGDF1npZJn93fC8NTxXDGcTO\nvkKJFBu0rEh2jxyWHBMOZ7TRO06rObJwT496FiJ/WX2fLQgdBqgSpUJH67fF9QAJ\nUY3/bwrYKo4jn5IforcZAR1SNq7iO6EDP519uLf69N1tMr2vnIXTun54Q8BOPBeB\n+m2mNbUxaIczv82RR0L3DYDn61f+flXxjLq1vN6mWgfRvnI7Sp+DscRk3y9fEEVG\nPEnY/RihwpXIAs8F0Y55A2syxaSipQwMx87Bm7bJTJk6pUAHfudwsUb0+MpFd+RP\n87hudm9bAgMBAAECggEAFBf0/OlHYksqthobwIRon9VXlVGRVRsKMEq2ndCAA6sD\nqEv/8l3EyRxnXTA9ymSjU+j5Wqc/PiXq2+d96TstI5bnnLIehdCYU1IYLmbxUh0/\n7d0Is3PbcHF+fCJXKfhVZPnZhQVZPlgKSxUzAaeGLQrj2lMurvVTD4Zc3D2O0eCf\n8E11zRFZgsMTYl2SmLX53DH9rj/w1nSf09cb5YI2T68zZOk4eWjAX2JT5YnuQl21\nnVw1blICVl7zBaNWZvWAvRZi5dncF7l6vWzxTvJYG3ZgzbiCIic/l5Hd57fMXxcT\natFf+wJMXq1/+Q6DFM9bHptP/XbO7ubWSXfx7IfhkQKBgQDWVe6Xwc2rnQzF0Rkc\n2Bf/lZdRiJt0x56GQYdQVkxk5dE7+VQe/T+NQYrCh4rjX8JqHzPekGnWM55qbkOd\nuPWrQ5heFxDL9YqVgJCGHAyOCYFQF4ENm/6vTn+vLXcFezThkVIlKBYOkHjuXkh6\ni9R+xhpTckOroZMh+D2riZqmlwKBgQDHJXWlYnwtGcFBoq5wV6lDNN89yIOyllIq\nOjIqthMRWiDBiHOs7+oXVVmqvQT96b1IfSu3DEEvM76d0sZ7O70j4PZUNaqKhB1u\nNAQZcTvFVXfIYGdPnxD725LKjipheaf3FAkd821un9cln8x2i9ut5v51uM/QumVW\nIyEZQqs53QKBgQCMgH5MSwYY1nW2AzEUIG/y4kv0bbmCXw0C81fRiRDBH4n+Z54G\nRnrvjSR6CsI39OEMEfI9lqtaeDIDkM6QSNv6bfAm1bX0DbzP7hxPXXm5bm+vYgj+\nM+FLaAj5e7NHC5IJv+p6YwG6gGhV0cZvVtRwWkqNoxzLGLrLjOBYX3badwKBgHJg\nSVlbXwZoLF6OGLHdJxG6ZB0P9NO1Eiu+kOGHARyOLxH4VLeWc1RDaORu+1b50AS6\nH0laeHWrumbaj7RncxIQOmnTCMfVaTHKHjCeoD2OAOXMuIk6Sn7cdUpwrFafkKCP\nmUziao+GrgKl7MCJQvp2GN9z7adr5pe6RWBEsiLhAoGBAIDjipQjkjP/9G0hqiqF\nCqsApZY4IAyOsXjoglkT/Bdmhs5eI3Wf6voPQ9MZ72ZH1vNbiqbG+75m58NdpyIM\nZ8emszM2Wih8GQW1d6nz5KB5o5+LcsJXwVn1jyUFQLY82CkhwBEimo0fkqiyskD3\nHEUjPDQjZP7/8hDay2ZNMkk7\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-vd8m6@mynext-a074a.iam.gserviceaccount.com",
    "client_id": "101759561882390529720",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vd8m6%40mynext-a074a.iam.gserviceaccount.com"
}
  
admin.initializeApp({credential:admin.credential.cert(firebaseConfig),storageBucket:"mynext-a074a.appspot.com"})

const bucket = admin.storage().bucket()

module.exports = {
    bucket:bucket
}