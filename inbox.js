const replaceField = () => {

    document.querySelectorAll(".brq").forEach(abtn => {
        abtn.setAttribute("data-tooltip", "Mark done")
    });

    document.querySelectorAll(".ar8").forEach(abtn => {
        abtn.parentNode.parentNode.setAttribute("data-tooltip", "Mark done")
        abtn.parentNode.parentNode.setAttribute("aria-label", "Mark done")
    });

    let toolTip = document.querySelector(".vh .aT .bAq");
    if (toolTip) toolTip.innerHTML = toolTip.innerHTML.replace("Conversation archived.", "Marked as Done.");

    const replaceString = "done_replace_string";
    location.href = location.href.replace(`#label/${replaceString}`,"#search/-in%3Asent+-in%3Achat+-in%3Adraft+-in%3Ainbox")
    let doneField;
    document.querySelectorAll(".J-Ke.n0").forEach(field => {
        if (field.title === replaceString) {
            doneField = field;
        } else if (field.title === "Done") {
            if (location.href.includes("#search/-in%3Asent+-in%3Achat+-in%3Adraft+-in%3Ainbox")) {
                field.parentNode.parentNode.parentNode.parentNode.classList.add("nZ");
                field.parentNode.parentNode.parentNode.parentNode.classList.add("aiq");
            } else {
                field.parentNode.parentNode.parentNode.parentNode.classList.remove("nZ");
                field.parentNode.parentNode.parentNode.parentNode.classList.remove("aiq");
            }
        }
    });

    if (!doneField) return;

    let icon = doneField.parentNode.parentNode.parentNode.querySelector(".qj.qr");
    //let evt = doneField.parentNode.parentNode.parentNode.parentNode.parentNode;

    //label
    doneField.setAttribute("title", "Done");
    doneField.setAttribute("aria-label", "Done");
    doneField.innerHTML = "Done";

    // icon
    icon.classList.remove("qj");
    icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>`;
    icon.style["margin-right"] = "18px";
    icon.style["opacity"] = .54;
}

setInterval(replaceField, 200)