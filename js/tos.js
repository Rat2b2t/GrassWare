function enableButton() {
    1 == document.getElementById("tosbox").checked && (document.getElementById("buybutton").disabled = !1, document.getElementById("buybutton").className = "enabledbutton"), 0 == document.getElementById("tosbox").checked && (document.getElementById("buybutton").disabled = !0, document.getElementById("buybutton").className = "disabledbutton")
}

function buy() {
    window.open("https://discord.gg/F8CgSByvmf"
    )}