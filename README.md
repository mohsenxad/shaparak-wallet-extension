از معتبر بودن آدرس پرداخت مطمئن خواهید شد و نگران سرقت اطلاعات بانکی خود توسط وبسایت نباشید.

در صورتی که اطلاعات کارت بانکی خود را اضافه کنید، میتونید به سادگی اطلاعات درگاه بانکی معتبر را تکمیل کنید.


// store payemnt data to local storage
// store refrence data  to local storage
// take screen shot of payement
// user can see list of payments
// get otp from mobile app


{
    "name": "پرداخت شاپرک",
    "version": "1.0.0",
    "description": "پرداخت مطمئن و آسان در بستر شاپرک",
    "manifest_version": 3,
    "author": "mohsenXAD",
    "host_permissions": [
        "http://*/*",
        "https://*/*"
    ],
    "permissions": [
        "tabs",
        "activeTab",
        "scripting"
    ],
	// "content_scripts": [
	// 	{
	// 		"matches": ["*://time.ir/*"],
	// 		"js": ["content.js"]
	// 	}
	// ],
    // "background": {
    // 	"service_worker": "background.js"
    // },
    "action":{
        "default_popup": "index.html",
        "default_title": "پرداخت شاپرک"
    }
}