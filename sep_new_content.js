console.log("SEP PAYMENT GATEWAY ON SHAPARAK");

function getPANElement()
    {
        let PAN0Element = document.getElementById("CardNumber_PanString");
        return PAN0Element;
    }

function getCVVElement()
    {
        let CVVElement = document.getElementById("Cvv2");
        return CVVElement;
    }

function getExpDateMonthElement()
    {
        let ExpDateMonthElement = document.getElementById("Month");
        return ExpDateMonthElement;
    }

function getExpDateYearElement()
    {
        let ExpDateYearElement = document.getElementById("Year");
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