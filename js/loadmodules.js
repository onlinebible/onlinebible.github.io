async function loadModules() {

    const response = await fetch("files/internet.rus");
    if (!response.ok) {
        throw new Error("Не удалось загрузить <internet.rus>");
    }

    const text = await response.text();

    const table = document.getElementById("ModulesTable");

    // "RST77" 2026/05/31 "Русский Синодальный перевод 1876/1956" "{2.67 МБ}" "https://onlinebible.github.io/files/"
    const re = /^"([^"]+)"\s+([0-9]{4}\/[0-9]{2}\/[0-9]{2})\s+"([^"]+)"\s+"([^"]+)"\s+"([^"]+)"$/;

    text.split(/\r?\n/).forEach(line => {

        line = line.trim();

        if (line === "")
            return;

        if (line.startsWith(";"))
            return;

        const m = line.match(re);

        if (!m)
            return;

        const code = m[1];
        const date = m[2];
        const name = m[3];
        const size = m[4];
        const url = m[5];

        const href = (url + code + ".exe").toLowerCase();
        const title = `${code} ${date}`;

        table.insertAdjacentHTML("beforeend", `
<tr>
    <td colspan="2"
        onmouseover="bgColor='0099FF'"
        onmouseout="bgColor='66CCFF'"
        align="left"
        height="32">

        <a href="${href}"
           title="${title}"
           style="display:block;color:#000066;text-decoration:none">

            ${name}
            <i><small>${size}</small></i>

        </a>

    </td>
</tr>`);
    });
}

window.addEventListener("DOMContentLoaded", loadModules);