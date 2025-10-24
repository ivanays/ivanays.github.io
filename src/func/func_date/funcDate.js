function getYearsOnFooter(year) {
    let startYear = year;
    let now = new Date();
    return `${startYear} - ${now.getFullYear()}`;
}

export default getYearsOnFooter;