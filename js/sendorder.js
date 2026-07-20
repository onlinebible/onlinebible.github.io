function SendOrder()
{
    const f = document.getElementById("orderForm");

    const body =
`ФИО: ${f.fio.value}
Адрес по эл. почте: ${f.email.value}
Улица, дом, квартира: ${f.ulitsa.value}
Город: ${f.gorod.value}
Область/республика/штат: ${f.region.value}
Страна: ${f.country.value}
Индекс: ${f.postcode.value}

Комментарии:

${f.comments.value}
`;

    const subject = "Order for Online Bible Update CD";

    location.href =
        "mailto:Michael1972@mail.ru"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
}
