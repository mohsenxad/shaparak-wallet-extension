console.log("SEP PAYMENT GATEWAY ON SHAPARAK");

function getPAN0Element()
    {
        let PAN0Element = document.getElementById("PAN0");
        return PAN0Element;
    }

function getPAN1Element()
    {
        let PAN1Element = document.getElementById("PAN1");
        return PAN1Element;
    }

function getPAN2Element()
    {
        let PAN2Element = document.getElementById("PAN2");
        return PAN2Element;
    }

function getPAN3Element()
    {
        let PAN3Element = document.getElementById("PAN3");
        return PAN3Element;
    }

function getCVVElement()
    {
        let CVVElement = document.getElementById("CVV");
        return CVVElement;
    }

function getExpDateMonthElement()
    {
        let ExpDateMonthElement = document.getElementById("ExpDateMonth");
        return ExpDateMonthElement;
    }

function getExpDateYearElement()
    {
        let ExpDateYearElement = document.getElementById("ExpDateYear");
        return ExpDateYearElement;
    }

function fillFormWithCartInfo
(
    {
        cart
    }
)
    {
        getPAN0Element().value = cart.pan0;
        getPAN1Element().value = cart.pan1;
        getPAN2Element().value = cart.pan2;
        getPAN3Element().value = cart.pan3;
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