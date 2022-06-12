const admin = require("firebase-admin")
const firebaseConfig = {
    "type": "service_account",
    "project_id": "mynext-a074a",
    "private_key_id": "d5158b792e68d60486a326f253239e8c0cb7d13e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLey2njclS0HjN\nuZrMlcmjnnDACajFSk6+Hg334qZDXMoFSOgZDIyKqreIgLR9IqUH1iE4XNUz7/KH\nkS7EqyRFQ1g40yG8HovhPa6YLYYhlDs/db0392fTlcxpli3rOjsyTNZoSr3CvfH/\nvB2xqoOk/5CVt/cFAr/RRi+nbieAPaKrzDybQ6VziPYSwjKrJAhH42VvQGYThxyj\nepazSfAkJLfa1fZhSsu8G5IU45jFm2pEv+T7AzqynMqAOyRmjpbcB4JmlyhjxwQt\n/VvKc3xPm3TH6n844CjmCMiJzKsX7PWRBehPge4NKxvn7B7zM2P16zCkYHvG7irI\niKr0Rr5RAgMBAAECggEAAvUU2kkQwn/eKZtHeS66IgMk/12Eku18DH5SVKZ6JSN9\nmisPmIGar09A4J6CQQlWXbFKhU+wF5Omsjq1c81K9yi96QGEjX/iJ5FmbrbGqslF\nPSxgZiZV33jfYi95FmCfyKDeQuDHNkPddwqMYe8o/6ZpOwvT7sI1+HwtKCFNOKtm\nBcgSN0GQnJ2MQqhrvimKyPLmhovshUaezE5fACsJLLpmD2ItiGkNljPHAoPM9rC/\nMsVO/ie9omQfmwT7EPNk/atdIaztABS/8A/jA1u+ljg1yk3fhYKkznLhHRXCPEyT\netzU9ezdUHXsk9Axj4y2UVHv3OwGSaIFCP5xYkrlMwKBgQDnmc+G1K9Jb7VpFJR0\ngVuopkqZGlLRkFNQBZocetVXtS5mcV4i88pDmHTNSsWeALKMRCq/Q1Vbi/P/b/qV\nKEYmypws4vQaJ8rbW3fZa9jJe2++zkvWdkaSxCG+t5OXr5AZnEkO4kX1hCsNAOwy\nw5CY72vdDlBVkc8WvnwjXLru3wKBgQDg6v2mxW3Ts7Dpy97i9jzDevqi0lI3D/+B\nHPU5b/ImzwbFCkLEWmWFhHGhXkIiaiT3ZV4/h19yzX52oeZ/8ShV+wQuZew/SEfy\nUDeL+rA27+iEP9u3TguXuFybXiZx3Q7Xia9S+XFkFrXeU4IsfYE7oT0GwcSRzl67\nEuyUS4tozwKBgQCbcu2L/i05CTWmNh3+pOS0qgjgAn8cEdcZmuj5vKh9mipusCET\nLLbR7/5V3J4Pk0BETWyzu6oLLEC1bp+uhb2wQ8XXiu10sMjDuv0SfgSgF63FUAov\nBGwSDnrn26fA5CHATtnql42FYRTUQY5H9GOVgv3O/dCF3rw08922joMZ2QKBgCpR\nrLYzUY3Ssofa9y4HHLm/Kud14UhA91coxq8u9AX/UAvE+XkOdSmhGOw+2vy0sg3m\ngcw8QWZNae0SW1dZXbiHyWqdfM0PYZIjK8Bnw74id8JibYnY4m+CndIR7fPgnwlI\n+7cF/iLR7xhM6CJM3wMEPIJH9R9mEAbs8ZyZdjqbAoGAcNL6xJgUhhviXR3/5yUF\nKFIi0NfkTEFsZjPnZhfuJunn1HUYx/4c8dsoyUr60Qclp8KrUfiZhpA4dob+zyLK\nhIb79uoTEGEXb0Alw3YJjS29P3Z/plCHRZ567VUAI+/WQZNj8M97skYefUydeE7Z\nnSbYCpmO+CjW964GUDFL6vU=\n-----END PRIVATE KEY-----\n",
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