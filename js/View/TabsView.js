export class TabsView {
    tabInit

    #tabsLink
    #tabsParty
    #tabTarget
    #idTabTarget

    constructor() {

        this.#tabsLink = $('.tabs__link');
        this.#tabsParty = $('.tabs__party');
        
        this.#tabsLink.on("click", (e) => {
            e.preventDefault();

            this.#tabTarget = $(e.target);
            console.log(this.#tabTarget);
            this.#idTabTarget = this.#tabTarget.attr('href');
            console.log(this.#idTabTarget);
            let letter = this.#idTabTarget.slice(-1);
            let create = `#popup-create-${letter}`;
            $('#sidebar-create').attr('href', create);
            console.log(letter);
            this.#tabsLink.removeClass('tabs__link--active');
            this.#tabsParty.removeClass('tabs__party--active');
            this.#tabTarget.addClass('tabs__link--active');
            $(this.#idTabTarget).addClass('tabs__party--active');
        });

        this.tabInit = () => {
            $('.tabs__link[href="#tab-a"]').click();
        }
    }
}