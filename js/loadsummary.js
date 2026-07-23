async function loadSummary(fileName)
{
    const response = await fetch(fileName);
    if (!response.ok) {
        throw new Error(`Не удалось загрузить <${fileName}>`);
    }
    const text = await response.text();

    const lines = text.split(/\r?\n/);

    const data = {};

    let start = false;

    for (const line of lines)
    {
        if (!start)
        {
            if (line.trim() === "Modules Sorted by Compile Date")
                start = true;

            continue;
        }

        const s = line.trim();

        if (s === "")
            continue;

        // Language Date Code Title
        const m = s.match(/^(\S+)\s+(\d{4}\/\d{2}\/\d{2})\s+(\S+)\s+(.+)$/);

        if (!m)
            continue;

        const language = m[1];
        const date     = m[2];
        const code     = m[3];
        const title    = m[4];

        if (!data[language])
            data[language] = [];

        data[language].push({
            date,
            code,
            title
        });
    }

    return data;
}

function buildSummary(containerId, data)
{
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    for (const language of Object.keys(data))
    {
        const section = document.createElement("div");
        section.className = `section ${language}`;
        section.innerHTML =
        `
            <h2 id="sec_${language}">${language}</h2>

            <table class="table table-striped table-hover">
                <tbody></tbody>
            </table>

            <a class="page_scroll" href="#language">
                Наверх <span class="glyphicon glyphicon-upload"></span>
            </a>
        `;

        const tbody = section.querySelector("tbody");

        for (const module of data[language])
        {
            tbody.insertAdjacentHTML("beforeend",
            `
                <tr class="product">
                    <td class="sort">
                        ${module.date}
                    </td>

                    <td class="title">
                        <span>${module.code}</span>
                    </td>

                    <td class="subtitle">
                        <span>${module.title}</span>
                    </td>
                </tr>
            `);
        }

        container.appendChild(section);
    }
}

window.addEventListener("DOMContentLoaded", async () =>
{
    try
    {
        const summary = await loadSummary("Summary.Txt");
        buildSummary("products", summary);
    }
    catch (err)
    {
        console.error(err);
    }
});