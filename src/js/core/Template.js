const templateStr = (data) => {
    const temp = `<li data-id="${data.id}">
        <p>카테고리: ${data.category}</p>
        <p>등록일: ${data.created}</p>
        <div class="letter-title">${data.title}</div>
    </li>`;
    return temp;
}

const Template = (model) => {
    const categoryEnum = {
        1: '친구',
        2: '가족',
        3: '동료',
    };
    const category = categoryEnum[model.category] || null;

    var templateData = {
        id: model.id,
        created: model.created,
        category: category,
        title: model.title
    };

    return templateStr(templateData);
}

export default Template

