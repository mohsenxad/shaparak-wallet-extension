
const CART_LIST_KEY = "CART_LIST";
var currentTabId;

function getCartList
()
    {
        const cartListString = localStorage.getItem(CART_LIST_KEY);
        if
        (
            cartListString
        )
            {
                try 
                    {
                        const cartList = JSON.parse(cartListString);
                        return cartList
                    }
                catch
                (
                    error
                )
                    {
                        alert(`json parse cart list error: ${error.message}`)        
                    }
            }
        else
            {
                return [];
            }
    }

function sendCartInfoToTab
(
    {
        cartInfo
    }
)
    {
        chrome.tabs.sendMessage(currentTabId, cartInfo);
    }

function addCartItemToWalletView
(
    {
        cart
    }
)
    {

        const hashedCartNumber = `${cart.pan0}-****-${cart.pan3}`;

        const ulWallet = document.getElementById('ulWallet');

        const newLiWallet = document.createElement("li");

        const newDl = document.createElement("dl");



        const dtBankTitle = document.createElement("dt");
        dtBankTitle.innerText = "اسم بانک";

        const ddBankTitle = document.createElement("dd");
        ddBankTitle.innerText = "سامان";


        newDl.appendChild(dtBankTitle);
        newDl.appendChild(ddBankTitle);

        const dtBankLogo = document.createElement("dt");
        dtBankLogo.innerText = "لوگو بانک";

        const ddBankLogo = document.createElement("dd");
        ddBankLogo.classList.add('bank-logo');
        const bankLogoUrl = `https://assets.megabuild.ir/bank/logo/648d84607e7601d06532982e.svg`;
        ddBankLogo.style.backgroundImage = `url("${bankLogoUrl}")`;

        newDl.appendChild(dtBankLogo);
        newDl.appendChild(ddBankLogo);

        const dtCartNumTitle = document.createElement("dt");
        dtCartNumTitle.innerText = "شماره کارت";

        const ddCartNumTitle = document.createElement("dd");
        ddCartNumTitle.innerText = hashedCartNumber;

        newDl.appendChild(dtCartNumTitle);
        newDl.appendChild(ddCartNumTitle);


        const newUlActionList = document.createElement("ul");
        const newLiActionListItem = document.createElement("li");


        const newUseCartButton = document.createElement("button");
        newUseCartButton.classList.add('btnUseCart');
        newUseCartButton.setAttribute("type","button");
        newUseCartButton.innerText = "استفاده";
        newUseCartButton.addEventListener("click",()=>
            {
                sendCartInfoToTab(
                    {
                        cartInfo: cart
                    }
                );
            }
        );

        const newRemoveCartButton = document.createElement("button");
        newRemoveCartButton.classList.add('btnRemoveCart');
        newRemoveCartButton.innerText = "حذف";
        newRemoveCartButton.addEventListener("click",()=>
            {
                removeCartFromStorage(
                    {
                        cartInfo: cart
                    }
                );

                showWallet();
            }
        );

        
        newLiActionListItem.appendChild(newUseCartButton);
        newLiActionListItem.appendChild(newRemoveCartButton);

        newUlActionList.appendChild(newLiActionListItem);


        newLiWallet.appendChild(newDl);
        newLiWallet.appendChild(newUlActionList);

        ulWallet.appendChild(newLiWallet);

    }

function addCartListToWalletView
(
    cartList
)
    {
        const ulWallet = document.getElementById('ulWallet');

        ulWallet.innerHTML='';

        cartList.forEach(
            cart => 
                {
                    addCartItemToWalletView(
                        {
                            cart: cart
                        }
                    )
                }
        );
    }

async function hideWallet
()
    {

    }

function showWallet
()
    {
        const cartList = getCartList();
        addCartListToWalletView(cartList);
    }

async function showAddNewCartForm
()
    {}

async function removeCartFromList
()
    {}

function getPan0Element
()
    {
        const pan0Element = document.getElementById("pan0");
        return pan0Element;
    }

function getPan0Value
()
    {
        const pan0Element = getPan0Element();
        return pan0Element.value;
    }

function getPan1Element
()
    {
        const pan1Element = document.getElementById("pan1");
        return pan1Element;
    }

function getPan1Value
()
    {
        const pan1Element = getPan1Element();
        return pan1Element.value;
    }

function getPan2Element
()
    {
        const pan2Element = document.getElementById("pan2");
        return pan2Element;
    }

function getPan2Value
()
    {
        const pan2Element = getPan2Element();
        return pan2Element.value;
    }

function getPan3Element
()
    {
        const pan3Element = document.getElementById("pan3");
        return pan3Element;
    }

function getPan3Value
()
    {
        const pan3Element = getPan3Element();
        return pan3Element.value;
    }

function getCVVElement
()
    {
        const cvvElement = document.getElementById("txtcvv");
        return cvvElement;
    }

function getCVVValue
()
    {
        const cvvElement = getCVVElement();
        return cvvElement.value;
    }

function getExpDateMonthElement
()
    {
        const expDateMonthElement = document.getElementById("txtExpDateMonth");
        return expDateMonthElement;
    }

function getExpDateMonthValue
()
    {
        const expDateMonthElement = getExpDateMonthElement();
        return expDateMonthElement.value;
    }

function getExpDateYearElement
()
    {
        const expDateYearElement = document.getElementById("txtExpDateYear");
        return expDateYearElement;
    }

function getExpDateYearValue
()
    {
        const expDateYearElement = getExpDateYearElement();
        return expDateYearElement.value;
    }
    
function getNewCartInfo
()
    {
        let cart = {
            pan0:getPan0Value(),
            pan1:getPan1Value(),
            pan2:getPan2Value(),
            pan3:getPan3Value(),
            cvv:getCVVValue(),
            expDateMonth: getExpDateMonthValue(),
            expDateYear: getExpDateYearValue()
        };

        return cart;
    }

function validateCartInfo
(
    {
        cartInfo
    }
)
    {
        let validationResult = {
            isValid: true,
            errorMessageList:[]
        };

        return validationResult;
    }



function addCartToStorage
(
    {
        cartInfo
    }
)
    {
        let cartList = getCartList();

        cartList.push(cartInfo);

        localStorage.setItem(
            CART_LIST_KEY,
            JSON.stringify(cartList)
        );
    }

function removeCartFromStorage
(
    {
        cartInfo
    }
)
    {
        let cartList = getCartList();

        let newCartList = cartList.filter(
            (currentCart)=>
                {
                    if
                    (
                        currentCart.pan0 != cartInfo.pan0 &&
                        currentCart.pan1 != cartInfo.pan1 &&
                        currentCart.pan2 != cartInfo.pan2 &&
                        currentCart.pan3 != cartInfo.pan3 
                    )
                        {
                            return currentCart
                        }

                }
        )

        localStorage.setItem(
            CART_LIST_KEY,
            JSON.stringify(newCartList)
        );
    }

function onAddNewCartButtonClicked
()
    {
        let newCartInfo = getNewCartInfo();
        let validateCartInfoResult = validateCartInfo(
            {
                cartInfo: newCartInfo
            }
        );

        if
        (
            validateCartInfoResult.isValid
        )
            {
                console.log(newCartInfo);
                addCartToStorage(
                    {
                        cartInfo: newCartInfo
                    }
                )
                showWallet();
            }
        else
            {
                console.log(validateCartInfoResult.sendMessage);
            }
        
    }

function setAddNewCartEventListener
()
    {
        const addNewCartButtonElement = document.getElementById("btnAddNewCart");
        addNewCartButtonElement.addEventListener(
            "click",
            onAddNewCartButtonClicked
        );
    }

async function init()
{
    showWallet();
    setAddNewCartEventListener();
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs =>
        {
            let currentTab = tabs[0];
            currentTabId = currentTab.id;

            //console.log(currentTab.outerHTML);
            let url = currentTab.url;
            // use `url` here inside the callback because it's asynchronous!
            //alert(url);

            //console.log(document.body.innerHTML);

            let includeFile;

            if
            (
                url.startsWith("https://bpm.shaparak.ir/")
            )
                {
                    includeFile = "bpm_content.js"
                }
            else if
            (
                url.startsWith("https://sep.shaparak.ir/OnlinePG")
            )
                {
                    includeFile = "sep_new_content.js"
                }
            else if
            (
                url.startsWith("https://sep.shaparak.ir/")
            )
                {
                    includeFile = "sep_content.js"
                }

            if
            (
                includeFile
            )
                {
                    chrome.scripting
                    .executeScript(
                        {
                            target : {tabId : currentTab.id},
                            files : [ includeFile ],
                        }
                    );
                    //.then(() => console.log("script injected"));
                }

            
        }
    );
}

init();

