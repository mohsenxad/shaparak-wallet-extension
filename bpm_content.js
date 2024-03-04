console.log("BPM (MELLAT) PAYMENT GATEWAY ON SHAPARAK");

function getPANElement()
    {
        let PAN0Element = document.getElementById("cardnumber");
        return PAN0Element;
    }

function getCVVElement()
    {
        let CVVElement = document.getElementById("inputcvv2");
        return CVVElement;
    }

function getExpDateMonthElement()
    {
        let ExpDateMonthElement = document.getElementById("inputmonth");
        return ExpDateMonthElement;
    }

function getExpDateYearElement()
    {
        let ExpDateYearElement = document.getElementById("inputyear");
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