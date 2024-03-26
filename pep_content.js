console.log("PEP (PASARGAD) PAYMENT GATEWAY ON SHAPARAK");

function getPANElement()
    {
        let PAN0Element = document.getElementById("ctl00_mainPlace_cardNumber");
        return PAN0Element;
    }

function getCVVElement()
    {
        let CVVElement = document.getElementById("ctl00_mainPlace_CVV2");
        return CVVElement;
    }

function getExpDateMonthElement()
    {
        let ExpDateMonthElement = document.getElementById("ctl00_mainPlace__expireMonth");
        return ExpDateMonthElement;
    }

function getExpDateYearElement()
    {
        let ExpDateYearElement = document.getElementById("ctl00_mainPlace__expireYear");
        return ExpDateYearElement;
    }

function fillFormWithCartInfo
(
    {
        cart
    }
)
    {
        getPANElement().value = cart.pan0 + cart.pan1 + cart.pan2 + cart.pan3;
        getCVVElement().value = cart.cvv;
        getExpDateMonthElement().value = cart.expDateMonth;
        getExpDateYearElement().value = cart.expDateYear;
    }

chrome.runtime.onMessage.addListener(
    function
    (
        message,
        sender,
        sendResponse
    )
        {

            let cart = message;

            fillFormWithCartInfo(
                {
                    cart: cart
                }
            );

            console.log(message);
        }
);     