import {Main} from "./components/main";
import {Login} from "./components/auth/login";
import {SignUp} from "./components/auth/sign-up";
import {Expenses} from "./components/expenses/expenses";
import {ExpensesEdit} from "./components/expenses/expenses-edit";
import {ExpensesCreate} from "./components/expenses/expenses-create";
import {Income} from "./components/income/income";
import {IncomeEdit} from "./components/income/income-edit";
import {IncomeCreate} from "./components/income/income-create";
import {IncomeAndExpenses} from "./components/income-and-expenses/income-and-expenses";
import {IncomeAndExpensesCreate} from "./components/income-and-expenses/income-and-expenses-create";
import {IncomeAndExpensesEdit} from "./components/income-and-expenses/income-and-expenses-edit";
import {Logout} from "./components/auth/logout";
import {AuthCheckUtils} from "./ulits/auth-check-utils";
import {Balance} from "./components/balance";
import {UserName} from "./components/user-name";


export class Router {

    constructor() {

        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');

        this.initEvents();

        this.routes = [
            {
                route: '/',
                title: 'Главная',
                filePathTemplate: '/templates/pages/main.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new Main(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/404',
                title: 'Ошибка',
                filePathTemplate: '/templates/pages/404.html',
                useLayout: false,
            },
            {
                route: '/login',
                title: 'Вход в систему',
                filePathTemplate: '/templates/pages/auth/login.html',
                useLayout: false,
                load: () => {
                    new Login(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/sign-up',
                title: 'Регистрация',
                filePathTemplate: '/templates/pages/auth/sign-up.html',
                useLayout: false,
                load: () => {
                    new SignUp(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/logout',
                load: () => {
                    new Logout(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/income-and-expenses',
                title: 'Доходы и расходы',
                filePathTemplate: '/templates/pages/income-and-expenses/income-and-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new IncomeAndExpenses(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/income-and-expenses-create',
                title: 'Создание дохода и расхода',
                filePathTemplate: '/templates/pages/income-and-expenses/income-and-expenses-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new IncomeAndExpensesCreate(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/income-and-expenses-edit',
                title: 'Редактирование дохода и расхода',
                filePathTemplate: '/templates/pages/income-and-expenses/income-and-expenses-edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new IncomeAndExpensesEdit(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/expenses',
                title: 'Расходы',
                filePathTemplate: '/templates/pages/expenses/expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new Expenses(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/expenses-edit',
                title: 'Редактирование категории расходов',
                filePathTemplate: '/templates/pages/expenses/expenses-edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new ExpensesEdit(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/expenses-create',
                title: 'Создание категории расходов',
                filePathTemplate: '/templates/pages/expenses/expenses-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new ExpensesCreate(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/income',
                title: 'Доходы',
                filePathTemplate: '/templates/pages/income/income.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new Income(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/income-edit',
                title: 'Редактирование категории доходов',
                filePathTemplate: '/templates/pages/income/income-edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new IncomeEdit(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
            {
                route: '/income-create',
                title: 'Создание категории доходов',
                filePathTemplate: '/templates/pages/income/income-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    const accessCheck = new AuthCheckUtils(this.openNewRoute.bind(this));
                    if (accessCheck.checkAndRedirect()) {
                        new IncomeCreate(this.openNewRoute.bind(this));
                        new Balance();
                        new UserName();
                    }
                }
            },
        ];

    }

    initEvents() {
        // Вызывается при первом запуске или обновлении страницы
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        // Вызывается когда меняется url ( переход с одной страницы на другую )
        window.addEventListener('popstate', this.activateRoute.bind(this));
        // Отлеживаем любые клики на странице чтобы страница не перезагружалась при переходе по страницам
        document.addEventListener('click', this.clickHandler.bind(this));
    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState({}, '', url);
        await this.activateRoute();
    }

    async clickHandler(event) {
        let element = null;

        if (event.target.nodeName === 'A') {
            element = event.target;
        } else if (event.target.parentNode.nodeName === 'A') {
            element = event.target.parentNode;
        }
        if (element) {
            event.preventDefault();

            const currentRoute = window.location.pathname;

            const url = element.href.replace(window.location.origin, '');
            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
                return;
            }
            await this.openNewRoute(url);

        }
    }

    async activateRoute() {

        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute) {
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title + ' | Lumincoin Finance';
            }
            if (newRoute.filePathTemplate) {
                let contentBlock = this.contentPageElement;
                if (newRoute.useLayout) {
                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());
                    contentBlock = document.getElementById('content-layout');
                }
                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
            }

            // Проверяем что  функция load  не пустая и что она является функцией. Если да то вызываем
            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }

        } else {
            console.log('No route found');
            history.pushState({}, '', '/404');
            await this.activateRoute();
        }
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function () {
                const sidebar = document.querySelector('.custom-sidebar');
                const menuButton = document.querySelector('.menu-toggle');
                sidebar.classList.toggle('show-sidebar');
                menuButton.classList.toggle('show-sidebar');
            });
        }
    }

}