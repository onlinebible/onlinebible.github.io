function updateVerticalCenters()
{
    document.querySelectorAll(".vertical-center").forEach(section =>
    {
        const body = section.querySelector(".sectionBody");
        const content = section.querySelector(".sectionContent");

        if (!body || !content)
            return;

        body.classList.toggle(
            "centered",
            content.scrollHeight <= body.clientHeight
        );
    });
}

window.addEventListener("load", updateVerticalCenters);
window.addEventListener("resize", updateVerticalCenters);
