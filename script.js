
async function getCartList
()
    {
        return [
            {
                title:"سامان",
                bankAbbriviation:"SAMAN",
                cartNumberParts: [
                    1111,
                    2222,
                    3333,
                    4444
                ],
                cvv2: 1234,
                month:6,
                year: 1402
            },
            {
                title:"ملت",
                bankAbbriviation:"MELLAT",
                cartNumberParts: [
                    1211,
                    2322,
                    3433,
                    4544
                ],
                cvv2: 1534,
                month:3,
                year: 1403
            }
        ]
    }
async function addCartItemToWalletView
(
    cart
)
    {
        const ulWallet = document.getElementById('ulWallet');
        const newLiWallet = document.createElement("li");
        newLiWallet.innerText = cart.title;
        ulWallet.appendChild(newLiWallet);

    }

async function addCartListToWalletView
(
    cartList
)
    {
        cartList.forEach(
            async cart => 
                {
                    await addCartItemToWalletView(cart)
                }
        );
    }

async function hideWallet
()
    {

    }

async function showWallet
()
    {
        const cartList = await getCartList();
        await addCartListToWalletView(cartList);
    }

async function showAddNewCartForm
()
    {}

async function removeCartFromList
()
    {}

async function init()
{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        alert(url)
        await showWallet();
    });
}

init();