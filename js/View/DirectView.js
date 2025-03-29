export class DirectView {
    directInit

    #moderator
    #admin
    #superAdmin
    #saveReset

    constructor() {
        this.#moderator = $('#moderator');
        this.#admin = $('#admin');
        this.#superAdmin = $('#super-admin');
        this.#saveReset = $('#save-reset');
        // this.#moderator = '<a href="" id="sidebar-view" class="sidebar__link popup-link">ПРОСМОТР</a><a href="" id="sidebar-print" class="sidebar__link popup-link">ПЕЧАТЬ</a>';

        // this.#admin = '<a href="" id="sidebar-create" class="sidebar__link popup-link">СОЗДАТЬ</a><a href="" id="sidebar-edit" class="sidebar__link popup-link">ИЗМЕНИТЬ</a><a href="" id="sidebar-add" class="sidebar__link popup-link">ДОБАВИТЬ</a><a href="" id="sidebar-delate" class="sidebar__link popup-link">УДАЛИТЬ</a>';

        // this.#superAdmin = '<a href="" id="sidebar-settings" class="sidebar__link popup-link">НАСТРОЙКИ</a >';
    }

    directInit = (role) => {
        let moderator = '<a href="" id="sidebar-view" class="sidebar__link sidebar__link-disabled popup-link">ПРОСМОТР</a><a href="" id="sidebar-print" class="sidebar__link sidebar__link-disabled popup-link">ПЕЧАТЬ</a>';

        let admin = '<a href="" id="sidebar-create" class="sidebar__link popup-link">СОЗДАТЬ</a><a href="" id="sidebar-edit" class="sidebar__link sidebar__link-disabled popup-link">ИЗМЕНИТЬ</a><a href="" id="sidebar-add" class="sidebar__link sidebar__link-disabled popup-link">ДОБАВИТЬ</a><a href="" id="sidebar-delate" class="sidebar__link sidebar__link-disabled popup-link">УДАЛИТЬ</a>';

        let superAdmin = '<a href="" id="sidebar-settings" class="sidebar__link popup-link">НАСТРОЙКИ</a >';

        let saveButton = '<button id="sidebar-save" type="submit" form="" class="sidebar__btn sidebar__btn-disabled">СОХРАНИТЬ</button>';

        let resetButton = '<button id="sidebar-reset" type="reset" form="" class="sidebar__btn sidebar__btn-disabled">ОТМЕНИТЬ</button>';

        switch (role) {
            case 'moderator':
                this.#moderator.prepend(moderator);
                break;
            case 'admin':
                this.#moderator.prepend(moderator);
                this.#admin.prepend(admin);
                this.#saveReset.prepend(saveButton);
                this.#saveReset.append(resetButton);
                break;
            case 'super-admin':
                this.#moderator.prepend(moderator);
                this.#admin.prepend(admin);
                this.#superAdmin.prepend(superAdmin);
                this.#saveReset.prepend(saveButton);
                this.#saveReset.append(resetButton);
                break;
            default:
                this.#moderator.prepend(moderator);
        }
    }
}